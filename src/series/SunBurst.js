import ChartComponent from '@/charts/ChartComponent'
import {getObject, isFunction, elementOffset} from '@/utils'
import {arc, scaleLinear, d3Event, scaleSqrt, scaleOrdinal, path, schemeCategory10, interpolate} from '@/d3Importer'
import constants from '@/constants'

export default class SunBurst extends ChartComponent {
  constructor (opts) {
    super()
    this.opts = Object.assign({
      className: '',
      sunBurstData: null,
      visible: true,
      events: {},
    }, opts)
    this.maxRadius = Math.floor(Math.min(this.opts.chart.chartWidth, this.opts.chart.chartHeight) / 2)
    this.x = scaleLinear()
      .range([0, 2 * Math.PI])
      .clamp(true) // scale the data upto 360 degree from 0 and clamp true means not exceed the range

    this.y = scaleSqrt()
      .range([this.maxRadius * 0.1, this.maxRadius]) // circle is scaled as area in sqrt and range is max radius * .1 to max Radius

    const colorArray = getObject(this.opts.chart.options, 'series.sunburst.color') || []
    const colorSchema = colorArray.length ? colorArray : schemeCategory10

    this.color = scaleOrdinal(colorSchema) // Give different color for each data d3 inbuilt schema

    /*
        create the arc for each data object
        X(d.x0) start angle calculated by d3 after partition  and also scaled in that range
        X(d.x1) end point angle calculated
        this is same for d.y0 and d.y1 calculated based on data
    */
    this.arcs = arc()
      .startAngle(d => this.x(d.x0))
      .endAngle(d => this.x(d.x1))
      .innerRadius(d => Math.max(0, this.y(d.y0)))
      .outerRadius(d => Math.max(0, this.y(d.y1)))

    /*
        To  Format the text and show the text based on arc position
      */
    this.middleArcLine = d => {
      const halfPi = Math.PI / 2
      const angles = [this.x(d.x0) - halfPi, this.x(d.x1) - halfPi]
      const r = Math.max(0, (this.y(d.y0) + this.y(d.y1)) / 2)

      const middleAngle = (angles[1] + angles[0]) / 2
      const invertDirection = middleAngle > 0 && middleAngle < Math.PI // On lower quadrants write text
      if (invertDirection) { angles.reverse() }

      const paths = path()

      paths.arc(0, 0, r, angles[0], angles[1], invertDirection)

      return paths.toString()
    }

    // To find if the text is fits inside the arc
    this.textFits = d => {
      const CHAR_SPACE = 8 // each character space

      const deltaAngle = this.x(d.x1) - this.x(d.x0) // angle of arc that can be treated as theta
      const r = Math.max(0, (this.y(d.y0) + this.y(d.y1)) / 2) // radius from center of circle to arc drown
      const perimeter = r * deltaAngle // perimeter of arc is r* theta
      // If name exceeds the arc perimeter dont show the name
      return d.data.name.length * CHAR_SPACE < perimeter
    }

    /*
    Append the svg  with view box attribute and on click focus for zoom control and to scale
     */
    // const clipElement = this.opts.chart.container.select('svg clipPath')
    this.opts.chart.svg
      .attr('viewBox', `${-this.opts.chart.chartWidth / 2} ${-this.opts.chart.chartHeight / 2} 
      ${this.opts.chart.chartWidth} ${this.opts.chart.chartHeight}`) // Adding view box for zoom control
      .on('click', () => {
        this.focusOn()
        const fn = this.opts.events.click
        if (isFunction(fn)) {
          fn.call(this.opts.chart, null, null)
        }
      }) // Reset zoom on canvas click

    this.sunTag = this.opts.chart.graphZone.append('g')
      .attr('class', 'vc-sunburst-plot')
  }

  draw () {
    const self = this
    console.log('sunburst draw has been called')
    // take the root hierarchy and form the sum based on size
    const root = this.opts.sunBurstData
    const defaultDataParserApproach =
      getObject(this.opts.chart.options, 'series.sunburst.dataApproach')
    const valueModel = getObject(this.opts.chart.options, 'series.sunburst.dataValueAttr')


    // Calculate the x and y for the data
    const slice = this.sunTag.selectAll('g.vc-slice')
      .data(root.descendants())

    // Data need to be removed same as enter this is used to exit the data
    slice.exit().remove()

    /* After click and removed the adding new data with <g> container
    stop all other event on click
    */
    const newSlice = slice.enter()
      .append('g').attr('class', 'vc-slice')
      .style('cursor', 'pointer')
      .on('click', (d, i, nodes) => {
        d3Event.stopPropagation()
        this.focusOn(d)
        const fn = this.opts.events.click
        if (isFunction(fn)) {
          fn.call(this.opts.chart, d.data[valueModel], d)
        }

      })
    // Attach the unique class names for any other operation if found in the data
    newSlice.each((d, i, elementArray) => {
      const elm = elementArray[i]
      elm.classList.add(d.data && d.data.uniqueId ? d.data.uniqueId : '')
    })
    /*
      For Tool tip to show
     */
    newSlice.on('mouseover', (d, ind, nodes) => {

      let textElem = newSlice.select(`text.vc-sunburst-text${ind}`) // Actual container <g> element whole area
      // If the text is not visible take the path element to show the tooltip
      if (textElem.attr('display') === 'none') {
        textElem = newSlice.select(`path.vc-sunburst-text${ind}`)
      }
      const textPos = elementOffset(textElem) // taking the area of hidden-arc to get position
      const pathElement = nodes[ind].childNodes[0] // To get the color of path element main-arc get the color of path element main-arc
      const color = pathElement && pathElement.style.fill
      const toolTipValue = defaultDataParserApproach === constants.DATA_PARSE_DEFAULT_TYPE ? d.value : d.data[valueModel]
      const dataObj = {
        data: {
          name: d.data && d.data.name,
          value: toolTipValue,
          color: color
        }
      }
      self.opts.chart.tooltip && self.opts.chart.tooltip.hover(textPos.left, textPos.top, dataObj)
    }).on('mouseout', function (d) { // Hide tooltip
      self.opts.chart.tooltip && self.opts.chart.tooltip.hide()
    })

    // Append <path> tag under container and fill different colors
    newSlice.append('path')
      .attr('class', 'vc-main-arc')
      .style('stroke', '#fff')
      .style('stroke-width', '1px')
      .style('fill', d => {
        let parentObj = null
        const depthSize = d.depth - 1 // for first depth
        let dataName = d.data.name
        // Go up to depth and get the parent data
        for (let k = 0; k < depthSize; k++) {
          parentObj = parentObj ? parentObj.parent : d.parent
          dataName = getObject(parentObj, 'data.name')
        }
        // console.log(dataName)
        return this.color(dataName)
      })
      .attr('d', this.arcs)


    // //creating the hidden arc line
    newSlice.append('path')
      .attr('class', (d, i) => `vc-hidden-arc vc-sunburst-text${i}`) // Used for tooltip when text is hidden
      .style('fill', 'none')
      .attr('id', (_, i) => `vc-hiddenArc${i}`)
      .attr('d', this.middleArcLine)

    // append the text
    const text = newSlice.append('text')
      .attr('class', (d, i) => `vc-sunburst-text${i}`) // used for tooltip
      .style('pointer-events', 'none')
      .style('dominant-baseline', 'middle')
      .style('text-anchor', 'middle')
      .style('font-size', '.8rem')
      .attr('display', d => this.textFits(d) ? null : 'none')

    // Add white contour
    text.append('textPath')
      .text(d => d.data.name)

    // Append the textPath and show the formatted Text according with position of arc
    text.append('textPath')
      .attr('startOffset', '50%')
      .attr('xlink:href', (_, i) => `#vc-hiddenArc${i}`)
      .text(d => d.data.name)
  }

  update () {
  }

  showHide (showFlag) {
    showFlag = !!showFlag
    this.sunTag.classed('vc-hidden', !showFlag)
    this.opts.visible = showFlag
  }

  remove () {
    this.sunTag && this.sunTag.remove()
    this.arcs = null
    this.opts = null
    this.color = null
    this.maxRadius = null
    this.x = null
    this.y = null
    this.middleArcLine = null
    this.textFits = null
  }

  focusOn (d = { x0: 0, x1: 1, y0: 0, y1: 1 }) {
    // Reset to top-level if no data point specified
    const self = this
    const transition = this.sunTag.transition()
      .duration(constants.SUN_BURST_TRANSITION_TIME)
      .tween('scale', () => {
        const xd = interpolate(this.x.domain(), [d.x0, d.x1])
        const yd = interpolate(this.y.domain(), [d.y0, 1])
        return t => { this.x.domain(xd(t)); this.y.domain(yd(t)) }
      })

    transition.selectAll('path.vc-main-arc')
      .attrTween('d', d => () => self.arcs(d))

    transition.selectAll('path.vc-hidden-arc')
      .attrTween('d', d => () => self.middleArcLine(d))

    transition.selectAll('text')
      .attrTween('display', d => () => self.textFits(d) ? null : 'none')
    // On click the parent or child needs to be focus

    const moveStackToFront = (elD) => {
      self.sunTag.selectAll('.vc-slice').filter(d => d === elD)
        .each((d, index, elemArray) => {
          const elem = elemArray[0]
          elem.parentNode.appendChild(elem)
          if (d.parent) { moveStackToFront(d.parent) }
        })
    }

    moveStackToFront(d)


  }
}

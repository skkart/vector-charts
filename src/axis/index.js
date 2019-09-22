import ChartComponent from '@/charts/ChartComponent'
import {axisBottom, axisTop, axisLeft, axisRight} from 'd3-axis'
import {scaleBand, scaleLinear, scaleTime} from 'd3-scale'
import constants from '@/constants'
import {emptyFn, isFunction, isNumber, truncateText} from '@/utils'

export default class Axis extends ChartComponent {
  constructor (opts) {
    super()
    this.opts = Object.assign({
      className: '',
      position: 'y',
      orient: 'left',
      label: '',
      unit: '',
      rangeScale: [0, 1000],
      domainScale: [0, 100],
      scaleType: '',
      axisClamp: true,
      tickNumber: null,
      rotateText: false,
      textLimit: 8,
      tickFormatter: false, // Use d3 tickFormatter
      showGridLines: false,
      tickPadding: constants.TICK_PADDING,
      scalePadding: constants.SCALE_PADDING,
      visible: true
    }, opts)

    this.axis = null
    // Create Axis and Scale based on input options
    if (this.opts.scaleType === 'scaleBand') {
      this.scale = scaleBand()
    } else {
      this.scale = scaleLinear()
      if (this.opts.unit === constants.UNITS_TIME) {
        this.scale = scaleTime()
      }
    }

    if (this.opts.position === 'x') {
      if (this.opts.orient === constants.DIR_BOTTOM) {
        this.axis = axisBottom()
      } else if (this.opts.orient === constants.DIR_TOP) {
        this.axis = axisTop()
      }
      if (this.opts.showGridLines === true) {
        this.axis.tickSizeInner(-(this.opts.chart.chartHeight))
      }

    }

    // Holds all tick values that axis shows
    this.tickValues = []

    if (this.opts.position === 'y') {
      if (this.opts.orient === constants.DIR_LEFT) {
        this.axis = axisLeft()
      } else if (this.opts.orient === constants.DIR_RIGHT) {
        this.axis = axisRight()
        this.axis.tickSizeInner(0)
      }
      if (this.opts.showGridLines === true) {
        this.axis.tickSizeInner(-(this.opts.chart.chartWidth))
      }

      if (isFunction(this.opts.tickFormatter)) {
        // If external formatter is provided, modify formatter to populate tickValues
        const externalFormatter = this.opts.tickFormatter
        this.opts.tickFormatter = function (val) {
          self.tickValues.unshift(val)
          return externalFormatter(val)
        }
      }
    }

    if (this.opts.tickPadding > 0) {
      this.axis.tickPadding(this.opts.tickPadding)
    }
  }

  modifyAxisProps (opts = {}) {
    Object.assign(this.opts, opts)
    this.update()
  }

  draw () {
    this.transformAttr = null

    if (this.opts.orient === constants.DIR_BOTTOM) {
      this.transformAttr = `translate(0,${this.opts.chart.chartHeight})`
    } else if (this.opts.orient === constants.DIR_RIGHT) {
      this.transformAttr = `translate(${this.opts.chart.chartWidth},0)`
    }

    this.axisTag = this.opts.chart.graphZone.append('g')
      .attr('class', `vc-axis vc-axis-${this.opts.orient} vc-axis-${this.opts.className}`)


    // If no formatter is provided, axis uses d3 default formatter
    isFunction(this.opts.tickFormatter) && this.axis.tickFormat(this.opts.tickFormatter)

    // Add Label to Axis
    if (this.opts.label) {
      this.opts.axisLabelTag = this.axisTag.append('text')
        .attr('class', 'vc-axis-label')
        .text(this.opts.label)
    }

    this.update()

    // IF not visible, Dont show the axis, but still scale and plot on graphZone, so that all series can be plotted
    !this.opts.visible && this.axisTag.classed('vc-hidden', true)
  }

  // Updates graph Axis based on new width and modify range, domain and ticks
  update () {
    if (this.opts.orient === constants.DIR_BOTTOM) {
      this.opts.rangeScale = [0, this.opts.chart.chartWidth]
    }

    if (this.opts.orient === constants.DIR_RIGHT) {
      this.transformAttr = `translate(${this.opts.chart.chartWidth},0)`
    }


    // Position label, scale, ticks, axis based on chart width
    if (this.opts.label) {
      let xTrans = 0
      let yTrans = 0
      let rotate = 0
      if (this.opts.orient === constants.DIR_BOTTOM) {
        xTrans = Math.floor(this.opts.chart.chartWidth / 2)
        yTrans = constants.X_AXIS_LABEL_Y
      } else if (this.opts.orient === constants.DIR_LEFT || this.opts.orient === constants.DIR_RIGHT) {
        if (this.opts.orient === constants.DIR_LEFT) {
          xTrans = -(this.opts.chart.margin.left) + constants.BRUSHY_BUFFER
          rotate = 270
        } else {
          xTrans = this.opts.chart.margin.right - constants.BRUSHY_BUFFER
          rotate = 90
        }
        yTrans = Math.floor(this.opts.chart.chartHeight / 2)
      }
      this.opts.axisLabelTag
        .attr('transform',
          `translate(${xTrans},${yTrans}) rotate(${rotate})`)
    }

    this.tickValues = []

    let domainScale = [this.opts.domainScale[0], this.opts.domainScale[this.opts.domainScale.length - 1]]
    if (this.opts.scaleType === 'scaleBand') {
      domainScale = this.opts.domainScale
      this.scale
        .padding(this.opts.scalePadding)
    } else {
      this.opts.axisClamp && this.scale.clamp() // Clamps outside range value within spectifed range and domain
    }

    this.scale.range(this.opts.rangeScale)
      .domain(domainScale)

    this.axis.scale(this.scale)

    if (isNumber(this.opts.tickNumber)) {
      let tickVal = this.opts.tickNumber
      if (this.opts.position === 'x' && this.opts.unit === constants.UNITS_TIME) {
        // modify xtick to display less ticks on lower chart width or has less days
        const newTick = Math.floor(this.opts.chart.chartWidth / 60)
        const dayLength = Math.floor((this.opts.domainScale[1] - this.opts.domainScale[0]) / (60 * 60 * 24 * 1000)) + 1
        if (dayLength > 2 && dayLength < tickVal) {
          tickVal = dayLength
        }

        const minuteLength = Math.floor((this.opts.domainScale[1] - this.opts.domainScale[0]) / (60 * 1000))
        if (minuteLength < tickVal) {
          tickVal = minuteLength
        }

        if (newTick < tickVal) {
          tickVal = newTick
        }
      }

      this.axis.ticks(tickVal)
    } else if (isFunction(this.opts.tickNumber)) {
      this.axis.ticks(this.opts.tickNumber())
    }

    this.transformAttr && this.axisTag.attr('transform', this.transformAttr)

    if (this.opts.showGridLines && this.opts.position === 'y') {
      this.axis.tickSizeInner(-(this.opts.chart.chartWidth))
    }

    this.axisTag.call(this.axis)


    const limitText = this.opts.textLimit
    const tickFmt = isFunction(this.opts.tickFormatter) ? this.opts.tickFormatter : emptyFn

    if (this.opts.rotateText === 'slant') {
      this.axisTag
        .selectAll('text')
        .style('text-anchor', 'end')
        .attr('y', '8')
        .attr('dx', '-1.0em')
        .attr('dy', '.15em')
        .attr('transform', 'rotate(-65)')
        .text(function (d, i) {
          return truncateText(tickFmt(d), limitText)
        })
    } else if (this.opts.rotateText === 'vertical') {
      this.axisTag
        .selectAll('text')
        .attr('y', 0)
        .attr('x', 9)
        .attr('dy', '.35em')
        .attr('transform', 'rotate(90)')
        .style('text-anchor', 'start')
        .text(function (d, i) {
          return truncateText(tickFmt(d), limitText)
        })
    }
  }

  showHide (showFlag) {
    showFlag = !!showFlag
    this.axisTag && this.axisTag.classed('vc-hidden', !showFlag)
    this.opts.axisLabelTag && this.opts.axisLabelTag.classed('vc-hidden', !showFlag)
    this.opts.visible = showFlag
  }

  // Remove Axis Instance
  remove () {
    this.opts.axisLabelTag && this.opts.axisLabelTag.remove()
    this.axisTag && this.axisTag.remove()
    this.scale = null
    this.axis = null
    this.opts = null
  }
}

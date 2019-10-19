import ChartComponent from '@/charts/ChartComponent'
import constants from '@/constants'

export default class PieSeriesLegend extends ChartComponent {
  constructor (opts) {
    super()
    this.opts = opts
    const self = this
    this.opts.maxWidthLegend = 0
    this.opts.hasOverflow = false
    const graphOptions = this.opts.chart.options
    const eachPlotSet = graphOptions.plotSet
    const eachPlotNames = Object.keys(eachPlotSet)
    const textWidth = []
    const dummyG = this.opts.chart.svg.append('g')
    // Add all name on DOM to calculate how much space is needed for every names
    dummyG.selectAll('.dummyText')
      .data(eachPlotNames)
      .enter()
      .append('text')
      .attr('class', 'vc-legend-label')
      .text(function (d) {
        return (self.opts.legendPrefix + (eachPlotSet[d] ? eachPlotSet[d].name : ''))
      })
      .each(function (d, i) {
        // Find size required for each legend on screen
        const thisWidth = Math.round(this.getComputedTextLength())
        if (thisWidth > self.opts.maxWidthLegend) {
          self.opts.maxWidthLegend = thisWidth
        }
        textWidth.push(thisWidth)
      })

    dummyG.remove()

    if (this.opts.maxWidthLegend > constants.LEGEND_MAX_WIDTH) {
      this.opts.maxWidthLegend = constants.LEGEND_MAX_WIDTH
    }

  }

  draw () {

    const self = this
    const graphOptions = this.opts.chart.options
    const eachPlotSet = graphOptions.plotSet
    const eachPlotNames = Object.keys(eachPlotSet)
    const maxYLen = Math.floor(this.opts.chart.chartFullSpace.height * 90 / 100)
    let fullYLen = eachPlotNames.length * constants.LEGEND_Y_SPACE
    fullYLen = fullYLen > maxYLen ? maxYLen : fullYLen
    const divWidth = this.opts.maxWidthLegend + constants.LEGEND_SHOW_WIDTH

    this.opts.legendDiv = {
      width: divWidth,
      height: fullYLen
    }

    this.legendDisplay = this.opts.chart.svg.append('g')
      .attr('class', 'vc-legend-group')

    const pieforeignDiv = this.legendDisplay
      .append('foreignObject')
      .attr('width', divWidth)
      .attr('height', fullYLen)
      .attr('class', 'vc-legend-right')
      .append('xhtml:div')
      .attr('xmlns', 'http://www.w3.org/1999/xhtml')
      .style('height', '100%')
      .style('padding', '5px 0px')

    if (fullYLen === maxYLen) {
      // Add overflow to chart
      pieforeignDiv
        .style('overflow', 'auto')
      this.opts.hasOverflow = true
    }

    this.legendBlock = pieforeignDiv
      .selectAll('div')
      .data(eachPlotNames)
      .enter()
      .append('div')
      .attr('class', 'vc-legend-name')


    this.legendBlock.append('span')
      .style('background-color', function (d) {
        return eachPlotSet[d].color
      })

    this.legendBlock.append('label')
      .style('width', (divWidth - 40) + 'px')
      .style('font-size', '11px')
      .style('font-weight', '600')
      .text(function (d) {
        return (self.opts.legendPrefix + eachPlotSet[d].name)
      })

    this.legendXDiv = pieforeignDiv
    this.update()

  }

  update () {
    // Display in vertical order
    const chartZoneWidth = this.opts.chart.graphZone.node().getBBox().width
    const basicWidth = this.opts.maxWidthLegend + this.opts.chart.margin.left + this.opts.chart.margin.right + constants.LEGEND_RIGHT_BUFFER

    let pieLegendPos = constants.PIE_POS_LEGEND
    if (this.opts.maxWidthLegend === constants.LEGEND_MAX_WIDTH) {
      pieLegendPos = constants.PIE_POS_LEGEND - 5
    }

    let legendXPos = Math.floor(this.opts.chart.chartWidth * pieLegendPos / 100)
    let xBuff = this.opts.chart.chartWidth - legendXPos
    xBuff = Math.floor((xBuff - this.opts.legendDiv.width) / 2)
    legendXPos += xBuff

    const legendYPos = Math.floor((this.opts.chart.chartFullSpace.height - this.opts.legendDiv.height) / 2)

    if (!this.opts.hasOverflow) {
      this.legendDisplay
        .attr('transform', 'translate(' + legendXPos + ',' + legendYPos + ')')
    } else {
      this.legendXDiv
        .style('position', 'relative')
        .style('top', legendYPos + 'px')
        .style('left', legendXPos + 'px')
    }

    if (this.opts.chart.chartWidth < (basicWidth + chartZoneWidth)) {
      // Hide legend display for pielegends
      this.hide()
    } else {
      this.show()
    }

  }

  showHide (showFlag) {
    showFlag = !!showFlag
    this.opts.visible = showFlag
    this.legendDisplay && this.legendDisplay.classed('vc-hidden', !showFlag)
  }

  remove () {
    this.legendBlock && this.legendBlock.remove()
    this.legendDisplay && this.legendDisplay.remove()
    this.opts = null
  }
}
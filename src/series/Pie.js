import ChartComponent from '@/charts/ChartComponent'
import constants from '@/constants'
import {pie, arc, interpolate, select} from '@/d3Importer'

export default class Pie extends ChartComponent {
  constructor (opts) {
    super()
    this.opts = Object.assign({
      className: '',
      pieData: null,
      donutPercent: 100,
      positionPercentage: null,
      seriesOrder: true,
      visible: true
    }, opts)

    this.opts.piePosPercentage = this.opts.positionPercentage || (constants.PIE_POS_DEFAULT / 100)
    this.opts.radius = Math.floor(Math.min((this.opts.chart.chartWidth * this.opts.piePosPercentage), this.opts.chart.chartHeight) / 2)

    // X Position of pie graph on the chart
    this.pie = pie()

    if (this.opts.seriesOrder) {
      this.pie
        .sort(function (a, b) {
          return (b.order - a.order) // Sort based on each series order
        })
    }

    this.pie
      .value(function (d) {
        return d.value // provide index of this series in data Arr
      })


    if (this.opts.donutPercent > 100 || this.opts.donutPercent < 0) {
      this.opts.donutPercent = 100
    }

    this.opts.donutLength = Math.floor(this.opts.donutPercent * this.opts.radius / 100)

    this.opts.tooltipHelper = arc()
      .outerRadius(this.opts.radius + 2 * constants.PIE_TOOLTIP_BUFFER)
      .innerRadius(this.opts.radius)

    this.arc = arc()
    // .outerRadius(this.opts.radius)
      .innerRadius(this.opts.radius - this.opts.donutLength)
  }

  draw () {

    const outerRadius = this.opts.radius
    const arc = this.arc
    const self = this
    this.pieTag = this.opts.chart.graphZone.append('g')
      .attr('class', 'vc-pie-plot vc-pie-' + this.opts.className)
      .attr('transform', 'translate(' + Math.floor(this.opts.chart.chartWidth * this.opts.piePosPercentage / 2) + ',' + Math.floor(this.opts.chart.chartHeight / 2) + ')')

    this.arcZone = this.pieTag.selectAll('.vc-pie-arc')
      .data(this.pie(this.opts.pieData.arcs))
      .enter().append('g')
      .attr('class', 'vc-pie-arc')

    this.arcZone.append('path')
      .each(function (d) {
        d.outerRadius = outerRadius
      })
      .attr('d', this.arc)
      .attr('fill', function (d) {
        return d.data.color
      })
      .style('opacity', constants.PIE_DARK_OPACITY)
      .style('stroke-width', 0)
      .on('mouseover', function (d) {
        // tooltip feature
        const textPos = $(this).parent().find('text').offset() // Find position of Arc respective tooltipHelper
        self.opts.chart.tooltip && self.opts.chart.tooltip.hover(textPos.left, textPos.top, d)
        // Dull all other Arcs
        self.arcZone.selectAll('path')
          .style('opacity', constants.PIE_DULL_OPACITY)
        // Provide new radius and stroke-width
        select(this)
          .style('opacity', constants.PIE_DARK_OPACITY)
          .style('stroke-width', constants.PIE_ARC_STROKE)
          .transition().delay(10).attrTween('d', function (d) {
            const i = interpolate(d.outerRadius, outerRadius + constants.PIE_HOVER_BUFFER)
            return function (t) {
              d.outerRadius = i(t)
              return arc(d)
            }
          })
      })
      .on('mouseout', function (d) { // Hide tooltip
        self.opts.chart.tooltip && self.opts.chart.tooltip.hide()
        // Provide dark opacity to all arcs
        self.arcZone.selectAll('path')
          .style('opacity', constants.PIE_DARK_OPACITY)
        // Revert back to its loaded radius
        select(this)
          .style('stroke-width', 0)
          .transition().delay(150).attrTween('d', function (d) {
            const i = interpolate(d.outerRadius, outerRadius)
            return function (t) {
              d.outerRadius = i(t)
              return arc(d)
            }
          })
      })

    // Add tooltip-helper for each arc outside pie area
    this.arcZone.append('text')
      .attr('transform', function (d) {
        return 'translate(' + self.opts.tooltipHelper.centroid(d) + ')'
      })
      .style('visibility', 'hidden')
      .text(function (d) {
        return 'T'
      })
  }

  update () {
    const self = this
    this.opts.radius = Math.floor(Math.min((this.opts.chart.chartWidth * this.opts.piePosPercentage), this.opts.chart.chartHeight) / 2)
    this.pieTag.attr('transform', 'translate(' + Math.floor(this.opts.chart.chartWidth * this.opts.piePosPercentage / 2) + ',' + Math.floor(this.opts.chart.chartHeight / 2) + ')')
    this.opts.donutLength = Math.floor(this.opts.donutPercent * this.opts.radius / 100)

    this.arc
      .outerRadius(this.opts.radius)
      .innerRadius(this.opts.radius - this.opts.donutLength)

    this.opts.tooltipHelper
      .outerRadius(this.opts.radius + 2 * constants.PIE_TOOLTIP_BUFFER)
      .innerRadius(this.opts.radius)

    this.arcZone.select('path').attr('d', this.arc)
    this.arcZone.select('text')
      .attr('transform', function (d) {
        return 'translate(' + self.opts.tooltipHelper.centroid(d) + ')'
      })
      .style('visibility', 'hidden')
      .text(function (d) {
        return 'T'
      })
  }

  showHide (showFlag) {
    showFlag = !!showFlag
    this.pieTag.classed('vc-hidden', !showFlag)
    this.opts.visible = showFlag
  }

  remove () {
    this.arcZone && this.arcZone.remove()
    this.pieTag && this.pieTag.remove()
    this.opts.tooltipHelper = null
    this.arc = null
    this.pie = null
    this.opts = null
  }
}
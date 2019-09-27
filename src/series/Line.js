import ChartComponent from '@/charts/ChartComponent'
import constants from '@/constants'
import {getObject} from '@/utils'
import {line as d3Line} from 'd3-shape'

export default class Line extends ChartComponent {

  constructor (opts) {
    super()
    // Do not register this component in chartComponentsArr,  As the series component is already registered and will call the line APIs
    this.opts = Object.assign({
      className: '',
      plotAxis: [constants.DIR_LEFT, constants.DIR_BOTTOM],
      lineData: null,
      yAxisTarget: null,
      xAxisTarget: null,
      visible: true
    }, opts)

    var self = this

    // Find x and y axis based on plotAxis
    var x = getObject(this.opts, 'chart.xAxis.scale')
    if (this.opts.plotAxis.indexOf(constants.DIR_TOP) > -1) {
      x = getObject(this.opts, 'chart.xAxis2.scale')
    }

    var y = getObject(this.opts, 'chart.yAxis.scale')
    if (this.opts.plotAxis.indexOf(constants.DIR_RIGHT) > -1) {
      y = getObject(this.opts, 'chart.yAxis2.scale')
    }

    this.line = d3Line()

    if (this.opts.yAxisTarget) {
      // For normal series, yAxisTarget refers to the index of this series in data Arr
      this.line
        .defined(function (d) {
          return d[self.opts.yAxisTarget] != null
        })
        .x(function (d) {
          // xAxisTarget refers the index of date in data Arr
          return x(d[self.opts.xAxisTarget])
        })
        .y(function (d) {
          return y(d[self.opts.yAxisTarget])
        })
    }
  }

  draw () {
    var self = this
    this.lineTag = this.opts.chart.graphZone.selectAll('.vc-line-' + this.opts.className)
      .data([this.opts.lineData])
      .enter()
      .append('g')
      .attr('class', 'vc-line-plot vc-line-' + this.opts.className)

    var clipElement = this.opts.chart.$container.find('svg clipPath')
    // Adding the lines series for data to be shown
    this.lineTag.append('path')
      .attr('clip-path', 'url(#' + clipElement.attr('id') + ')') // display graphZone of same size as clip-path defined
      .attr('class', 'vc-line')
      .style('stroke', function (d) {
        return d.color
      })
      .style('fill', 'transparent')
      .style('stroke-width', function (d) {
        return d.lineWidth || '2px'
      })
      .attr('d', function (d) {
        return self.line(d.values) // Values are array of array having format like  [[date, series1, series2 ....],...]
      })
  }

  // Update happens when the chart is resized
  update () {
    var self = this
    this.lineTag && this.lineTag.select('path').attr('d', function (d) {
      return self.line(d.values)
    })
  }

  showHide (showFlag) {
    showFlag = !!showFlag
    this.lineTag && this.lineTag.classed('vc-hidden', !showFlag)
    this.opts.visible = showFlag
  }

  // Redraw is called when series is toggled from Legends
  redraw () {
    var eachPlotSet = this.opts.chart.options.plotSet
    var seriesName = this.opts.lineData.name
    // Remove line series
    this.lineTag && this.lineTag.remove()

    if (eachPlotSet && eachPlotSet[seriesName] && eachPlotSet[seriesName].visible) {
      this.draw()
    }

  }
  
  remove () {
    this.lineTag && this.lineTag.remove()
    this.line = null
    this.opts = null
  }

}
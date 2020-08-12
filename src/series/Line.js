import ChartComponent from '@/charts/ChartComponent'
import constants from '@/constants'
import {getObject} from '@/utils'
import {line} from '@/d3Importer'

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
      visible: true,
      dots: null
    }, opts)

    const self = this

    // Find x and y axis based on plotAxis
    let x = getObject(this.opts, 'chart.xAxis.scale')
    if (this.opts.plotAxis.indexOf(constants.DIR_TOP) > -1) {
      x = getObject(this.opts, 'chart.xAxis2.scale')
    }

    let y = getObject(this.opts, 'chart.yAxis.scale')
    if (this.opts.plotAxis.indexOf(constants.DIR_RIGHT) > -1) {
      y = getObject(this.opts, 'chart.yAxis2.scale')
    }

    this.line = line()

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
    const self = this
    this.lineTag = this.opts.chart.graphZone.selectAll('.vc-line-' + this.opts.className)
      .data([this.opts.lineData])
      .enter()
      .append('g')
      .attr('class', 'vc-line-plot vc-line-' + this.opts.className)

    const clipElement = this.opts.chart.container.select('svg clipPath')
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

    // Adding dots on each points on line if enabled
    if (this.opts.dots && this.opts.dots.visible) {
      const totalLineLength = this.opts.lineData.values.length
      this.dotsTag = this.lineTag.selectAll('vc-line-dot')
        .data(this.opts.lineData.values)
        .enter().append('circle')
        .attr('class', function (d, index) {
          let className = `vc-dot vc-dot-count-${index}`
          if (index === 0) {
            className += ' vc-dot-first'
          }
          if (index === (totalLineLength - 1)) {
            className += ' vc-dot-last'
          }
          return className
        })
        .attr('r', this.opts.dots.radius)
    }
  }

  // Update happens when the chart is resized
  update () {
    const self = this
    this.lineTag && this.lineTag.select('path').attr('d', function (d) {
      return self.line(d.values)
    })
    // Refresh dots
    if (this.dotsTag) {
      // Find x and y axis based on plotAxis
      let x = getObject(this.opts, 'chart.xAxis.scale')
      if (this.opts.plotAxis.indexOf(constants.DIR_TOP) > -1) {
        x = getObject(this.opts, 'chart.xAxis2.scale')
      }

      let y = getObject(this.opts, 'chart.yAxis.scale')
      if (this.opts.plotAxis.indexOf(constants.DIR_RIGHT) > -1) {
        y = getObject(this.opts, 'chart.yAxis2.scale')
      }
      this.dotsTag.attr('r', this.opts.dots.radius)
        .attr('cx', function (d) {
          // xAxisTarget refers the index of date in data Arr
          return x(d[self.opts.xAxisTarget])
        })
        .attr('cy', function (d) {
          return y(d[self.opts.yAxisTarget])
        })
    }
  }

  showHide (showFlag) {
    showFlag = !!showFlag
    this.lineTag && this.lineTag.classed('vc-hidden', !showFlag)
    this.opts.visible = showFlag
  }

  // Redraw is called when series is toggled from Legends
  redraw () {
    const eachPlotSet = this.opts.chart.options.plotSet
    const seriesName = this.opts.lineData.name
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

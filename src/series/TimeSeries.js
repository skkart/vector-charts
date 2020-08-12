import {isArray} from '@/utils'
import Line from '@/series/Line'
import StackArea from '@/series/StackArea'
import Series from '@/series/Series'

export default class TimeSeries extends Series {
  constructor (opts) {
    super()
    this.opts = opts
    this.plotSeries = []
    const data = this.opts.chart.options.chartData // Accept either timeseries or pieseries
    const plotInfo = this.opts.chart.options.series
    const eachPlotSet = this.opts.chart.options.plotSet

    // Create plot components based on input options and each plot info
    isArray(plotInfo.stack) && plotInfo.stack.forEach((plotData) => {
      this.plotSeries.push(new StackArea({
        chart: this.opts.chart,
        className: plotData.className || plotData.name,
        plotAxis: plotData.plotAxis,
        xAxisTarget: this.opts.chart.options.timeInfo.dataIndex,
        stackData: data,
        stackOrderMembers: plotData.stackOrderMembers
      }))
    })

    isArray(plotInfo.line) && plotInfo.line.forEach((plotData) => {
      this.plotSeries.push(new Line({
        chart: this.opts.chart,
        className: plotData.className || plotData.name,
        plotAxis: plotData.plotAxis,
        yAxisTarget: eachPlotSet[plotData.name].dataIndex,
        xAxisTarget: this.opts.chart.options.timeInfo.dataIndex,
        visible: eachPlotSet[plotData.name].visible,
        lineData: {
          name: plotData.name,
          color: eachPlotSet[plotData.name].color,
          lineWidth: eachPlotSet[plotData.name].lineWidth,
          values: data
        },
        dots: plotData.dots
      }))
    })
  }

}

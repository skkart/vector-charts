import {isArray} from '@/utils'
import Bar from '@/series/Bar'
import Series from '@/series/Series'

export default class BarSeries extends Series {
  constructor (opts) {
    super()
    this.opts = opts
    this.plotSeries = []
    const data = this.opts.chart.options.chartData // Accept either timeseries or pieseries
    const plotInfo = this.opts.chart.options.series
    const isBarPlot = isArray(plotInfo.bar) && plotInfo.bar.length
    const isStackPlot = isArray(plotInfo.stack) && plotInfo.stack.length
    let arrayData = []

    // check which data needs to be passed and present
    if (isBarPlot) {
      arrayData = plotInfo.bar
    } else if (isStackPlot) {
      arrayData = plotInfo.stack
    }

    // Create plot components based on input options and each plot info
    arrayData.forEach((plotData) => {
      this.plotSeries.push(new Bar({
        chart: this.opts.chart,
        className: plotData.className || plotData.name,
        plotAxis: plotData.plotAxis,
        xAxisTarget: this.opts.chart.options.timeInfo.dataIndex,
        barOrderMembers: plotData.barOrderMembers || plotData.stackOrderMembers,
        barType: plotData.barType || '',
        events: plotData.events || {},
        barData: data
      }))
    })
  }

}

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

    // Create plot components based on input options and each plot info
    isArray(plotInfo.bar) && plotInfo.bar.forEach((plotData) => {
      this.plotSeries.push(new Bar({
        chart: this.opts.chart,
        className: plotData.className || plotData.name,
        plotAxis: plotData.plotAxis,
        xAxisTarget: this.opts.chart.options.timeInfo.dataIndex,
        barOrderMembers: plotData.barOrderMembers,
        barData: data
      }))
    })
  }

}
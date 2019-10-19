import Series from '@/series/Series'
import Pie from '@/series/Pie'

export default class PieSeries extends Series {
  constructor (opts) {
    super()
    this.opts = opts
    this.plotSeries = []
    const data = this.opts.chart.options.chartData
    const pieInfo = this.opts.chart.options.series.pie

    this.plotSeries.push(new Pie({
      chart: this.opts.chart,
      className: pieInfo.className || pieInfo.name,
      pieData: data,
      donutPercent: pieInfo.donutPercent || 100,
      visible: pieInfo.visible
    }))
  }

}
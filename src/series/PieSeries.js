import Series from '@/series/Series'
import Pie from '@/series/Pie'
import SunBurst from '@/series/SunBurst'

export default class PieSeries extends Series {
  constructor (opts) {
    super()
    this.opts = opts
    this.plotSeries = []
    const data = this.opts.chart.options.chartData
    const pieInfo = this.opts.chart.options.series.pie
    const sunburstInfo = this.opts.chart.options.series.sunburst

    // change base don series given
    if (pieInfo) {
      this.plotSeries.push(new Pie({
        chart: this.opts.chart,
        className: pieInfo.className || pieInfo.name,
        pieData: data,
        donutPercent: pieInfo.donutPercent || 100,
        visible: pieInfo.visible
      }))
    } else if (sunburstInfo) {
      this.plotSeries.push(new SunBurst({
        chart: this.opts.chart,
        className: sunburstInfo.className || sunburstInfo.name,
        sunBurstData: data,
        events: this.opts.chart.options.series.events || {},
        visible: sunburstInfo.visible
      }))
    }

  }

}

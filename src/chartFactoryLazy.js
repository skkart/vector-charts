import {getObject} from '@/utils'
import constants from '@/constants'

export default async function chartFactory (container, opts) {
  try {
    if (getObject(opts, 'chart.chartType') === constants.TIME_SERIES_CHART_TYPE) {
      const Chart = await import(/* webpackChunkName: "timeseries"  */ '@/charts/TimeSeriesChart')
      const TimeSeriesChart = Chart.default
      return new TimeSeriesChart(container, opts)
    } else if (getObject(opts, 'chart.chartType') === constants.PIE_SERIES_CHART_TYPE) {
      const Chart = await import(/* webpackChunkName: "pieseries"  */ '@/charts/PieSeriesChart')
      const PieSeriesChart = Chart.default
      return new PieSeriesChart(container, opts)
    } else if (getObject(opts, 'chart.chartType') === constants.BAR_SERIES_CHART_TYPE) {
      const Chart = await import(/* webpackChunkName: "barseries"  */ '@/charts/BarSeriesChart')
      const BarSeriesChart = Chart.default
      return new BarSeriesChart(container, opts)
    } else {
      console.log('Graph chartType option is not in accordance with the input JSON data')
      throw new Error('Graph chartType option is not in accordance with the input JSON data')
    }
  } catch (e) {
    console.log('Error encountered while Chart initilization', e)
    this.opts.onError(e)
    throw new Error('Invalid JSON received - Error on timeseries JSON parsing')
  }
}

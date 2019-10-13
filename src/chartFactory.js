import {getObject} from '@/utils'
import constants from '@/constants'
import TimeSeriesChart from '@/charts/TimeSeriesChart'
import BarSeriesChart from '@/charts/BarSeriesChart'

export default function chartFactory (container, opts) {
  try {
    if (getObject(opts, 'chart.chartType') === constants.TIME_SERIES_CHART_TYPE) {
      return new TimeSeriesChart(container, opts)
    } else if (getObject(opts, 'chart.chartType') === constants.PIE_SERIES_CHART_TYPE) {
      // return new ac.pieSeriesChart(container, opts)
    } else if (getObject(opts, 'chart.chartType') === constants.BAR_SERIES_CHART_TYPE) {
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

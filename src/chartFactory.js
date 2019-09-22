import {getObject} from '@/utils'
import constants from '@/constants'
import BasicTSParser from '@/data-parser/BasicTSParser'
import {TimeSeriesChart} from '@/charts/TimeSeriesChart'
import ChartAxisParser from '@/data-parser/ChartAxisParser'

export default function chartFactory (container, opts) {
  try {
    if (getObject(opts, 'chart.chartType') === constants.TIME_SERIES_CHART_TYPE) {
      if (opts.dataParser) {
        if (!(opts.dataParser instanceof ChartAxisParser)) {
          throw new Error("DataParser in options dosen't have implementation of ChartAxisParser")
        }
      } else {
        opts.dataParser = new BasicTSParser(opts)
      }
      return new TimeSeriesChart(container, opts)
    } else if (getObject(opts, 'chart.chartType') === constants.PIE_SERIES_CHART_TYPE) {
      // return new ac.pieSeriesChart(container, opts)
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

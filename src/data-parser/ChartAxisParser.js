import ChartDataParser from '@/data-parser/ChartDataParser'

export default class ChartAxisParser extends ChartDataParser {
  constructor (opts) {
    // All the charts having timeseries Axis needs to implement chartDataProcessor and below APIs
    super(opts)
  }

  constructXAxisInfo () {
    /*
        User needs to construct timeInfo which contains information about time range on x Axis and
        dataIndex on which the date is refered from chart Data Array
        Ex:
        graphOptions.chartData -> [[date1, series1..],......,[dateN, series1, ..]]

        timeInfo = {
          dataIndex: 0,
          timeRange: [date1, dateN]
        }

        return {
          timeInfo
        };
        */
    console.log('vc.ChartAxisParser constructXAxisInfo defaults ', this)
  }

  constructYAxisInfo () {
    /*
       User needs to construct yRange which contains information about min and max range on y Axis
       based on all the plots which are visible using plotSet and series in graphOptions
       This method will be accessed every time user enables/disables series from legends
       Ex:
       yRange = [minY, maxY], For Y1 axis
       yRange2 = [min2Y, max2Y], For Y2 axis
       yrange value should be overridden if min or max is provided explicitly in graphOptions

       return {
         yRange , yRange2
       };

       */
    console.log('vc.ChartAxisParser constructYAxisInfo defaults ', this)
  }

}

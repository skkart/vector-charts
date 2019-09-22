export default class ChartDataParser {
  constructor (opts) {
    // All the data generators needs to implement below APIs
  }

  dataExecutor () {
    // Order in which the all DataProcessor APIs needs to be executed
    // This will be called during chart-initilize/chart-refresh
    // Retuns entire dataOptions to vector-charts after wrapping all the DataProcessor APIs results
  }

  constructChartData () {
    /*
        User needs to construct chartData such that vector-charts can access it
        Ex: timeseries needs data as -> [[date1, series1, series2 ..], ....]
            pieseries needs data as -> [{name:'pie1', arcs:[{name, value, color}...]},{name:pie2...}]

            chartData = timeseries/pieseries data

            return {
              chartData;
            }
        */
    console.log('vc.ChartDataParser constructChartData defaults ', this)
  }

  constructPlotInfo () {
    /*
        From the JSON and graphOptions, user needs to construct plotSet which contains all the series plots, its plotting information
        and additional information for series obtained from graphOptions
        Ex: plotSet = {
              plotName :{ // For each line/Stack
                color, name(UI Name), dataIndex, maxVal, minVal, visible, unit, plotAxis
              },
              plotArcName : { // For each Arcs of pie
                  color, name(UI Name), total, value, visible, unit
              }
            }

          series = {
            line:[
                  {name, uiName, plotAxis, valueRange}
                ],
            stack:[
                  {name, stackOrderMembers: [{},{}], valueRange, plotAxis }
                  ],
            pie:[
                  {name, uiName, totalAggregate}
                ]
          }

          If constant series exist, construct constantPlotSet and constantSeries in
          similar structure as mentioned above

          return {
              series , // newly updated series from user options having additional info of each series
              constantSeries,
              plotSet , // Info of each plot like color, max, min etc
              constantPlotSet  // Info of each constant plot like color, max, min etc
            };
        */
    console.log('vc.ChartDataParser constructPlotInfo defaults ', this)
  }

}

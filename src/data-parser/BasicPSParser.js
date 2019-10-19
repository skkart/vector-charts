import {refineString} from '@/utils'
import ChartDataParser from '@/data-parser/ChartDataParser'

export default class BasicPSParser extends ChartDataParser {
  constructor (opts) {
    super(opts)
    this.opts = opts
  }

  dataExecutor () {
    // Order in which the DataProcessor APIs needs to be executed
    try {

      this.dataOptions = {}
      this.opts.data && (this.dataOptions.data = this.opts.data)
      this.opts.series && (this.dataOptions.series = this.opts.series)

      Object.assign(this.dataOptions, this.constructPlotInfo())

      return this.dataOptions

    } catch (err) {
      console.log('Error encountered while pieseries JSON parsing :', err)
      this.opts.onError(err)
      throw new Error('Invalid JSON received - Error on pieseries JSON parsing')
    }
  }

  constructPlotInfo () {
    const dataOptions = this.dataOptions
    const resJson = dataOptions.data
    const pieData = resJson.pieseries
    const plotInfo = dataOptions.series
    const eachPlotSet = {}
    const othersArc = {
      name: 'Others',
      value: 0,
      color: '#324fff'
    }

    // Create pieSet for each pie charts and arcInfo which contains each pie arcs to be drawn
    const pieObj = plotInfo.pie
    pieObj.total = 0
    const arcs = []

    // Find total value for entire pie chart
    const allArcArr = pieData.values

    allArcArr.sort(function (a, b) {
      return (b.value - a.value)
    }).forEach(function (arcInfo, ind) {
      if (pieObj.pieArcCount && (ind + 1) >= pieObj.pieArcCount) {
        // Add to others arc
        othersArc.value += arcInfo.value
      } else {
        const refineName = refineString(arcInfo.name)
        // arcInfo.name = refineName
        eachPlotSet[refineName] = {}
        eachPlotSet[refineName].name = arcInfo.name
        eachPlotSet[refineName].color = arcInfo.color
        eachPlotSet[refineName].value = arcInfo.value
        eachPlotSet[refineName].visible = true
        eachPlotSet[refineName].unit = pieObj.unit
        arcs.push(arcInfo)
      }
      pieObj.total += arcInfo.value
     
    })
    // Add others to arc
    if (othersArc.value) {
      const refineName = refineString(othersArc.name)
      // othersArc.name = refineName
      eachPlotSet[refineName] = {}
      eachPlotSet[refineName].name = othersArc.name
      eachPlotSet[refineName].color = othersArc.color
      eachPlotSet[refineName].value = othersArc.value
      eachPlotSet[refineName].visible = true
      eachPlotSet[refineName].unit = pieObj.unit
      arcs.push(othersArc)
    }

    return {
      plotSet: eachPlotSet,
      series: {
        pie: pieObj
      },
      chartData: {
        name: pieObj.name,
        arcs
      }
    }
  }
}

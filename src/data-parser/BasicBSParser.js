import ChartAxisParser from '@/data-parser/ChartAxisParser'
import {getObject, refineString, isBoolean} from '@/utils'
import constants from '@/constants'


export default class BasicBSParser extends ChartAxisParser {
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
      this.opts.yAxis && (this.dataOptions.yAxis = this.opts.yAxis)

      Object.assign(this.dataOptions, this.constructChartData())
      Object.assign(this.dataOptions, this.constructXAxisInfo())
      Object.assign(this.dataOptions, this.constructPlotInfo())
      Object.assign(this.dataOptions, this.constructYAxisInfo())

      return this.dataOptions

    } catch (err) {
      console.log('Error encountered while bar series JSON parsing :', err)
      this.opts.onError(err)
      throw new Error('Invalid JSON received - Error on bar series JSON parsing')
    }
  }

  constructChartData () {
    const dataOptions = this.dataOptions
    const resJson = dataOptions.data
    const seriesData = resJson.barseries
    const columns = seriesData.columns
    const data = seriesData.values
    const validJSONType = (columns.length && data.length)

    if (!validJSONType) {
      throw new Error('Invalid Bar series JSON received')
    }

    return {
      chartData: data
    }
  }

  constructXAxisInfo () {
    const dataOptions = this.dataOptions
    const seriesData = dataOptions.chartData
    const dataIndex = 0
    return {
      timeInfo: {
        dataIndex,
        timeRange: seriesData.map((dt) => dt[0])
      }
    }
  }

  constructYAxisInfo () {
    const dataOptions = this.dataOptions
    const eachPlotSet = dataOptions.plotSet
    const plotInfo = dataOptions.series
    const data = dataOptions.chartData
    const yAxis = getObject(dataOptions, 'yAxis.left')
    const yAxis2 = getObject(dataOptions, 'yAxis.right')
    let key
    let yRange = null
    let yRange2 = null


    if (yAxis) {
      if (Number.isFinite(yAxis.min) && Number.isFinite(yAxis.max)) {
        yRange = [yAxis.min, yAxis.max]
      }
    }

    if (yAxis2) {
      if (Number.isFinite(yAxis2.min) && Number.isFinite(yAxis2.max)) {
        yRange2 = [yAxis2.min, yAxis2.max]
      }
    }

    // If yRange is not set from graphOptions, then go inside
    if (!yRange || !yRange2) {
      let findEachPlotRange = false
      for (key in eachPlotSet) {
        if (!Number.isFinite(eachPlotSet[key].minVal) || !Number.isFinite(eachPlotSet[key].maxVal)) {
          findEachPlotRange = true
          break
        }
      }

      if (findEachPlotRange) {

        // Calculate Max and Min for each plots series
        let valData = 0
        data.forEach(function (d) {
          for (const plot in eachPlotSet) {
            const eachPlot = eachPlotSet[plot]
            valData = d[eachPlot.dataIndex]
            if (valData < eachPlot.minVal) {
              eachPlot.minVal = valData
            }
            if (valData > eachPlot.maxVal) {
              eachPlot.maxVal = valData
            }
            // Attach value range for stacked bar data
            plotInfo.bar && plotInfo.bar.forEach(function (plotData) {
              if (plotData.barType === constants.STACKED_BAR) {
                const memberArr = plotData.barOrderMembers
                let sum = 0
                // Calculate maximum and minimum range for stacked group by adding all the data
                memberArr.forEach(function (member) {
                  sum += (eachPlotSet[member.name].visible ? d[eachPlotSet[member.name].dataIndex] : 0)
                })

                if (sum < plotData.valueRange[0]) {
                  plotData.valueRange[0] = sum
                }
                if (sum > plotData.valueRange[1]) {
                  plotData.valueRange[1] = sum
                }
              }

            })
          }
        })
      }

      // Find Max value required to plot on graph based on visible plot function . i.e line or stack
      let allMax = -Infinity
      let allMax2 = -Infinity
      for (key in plotInfo) {
        if (key === constants.BAR_KEY) {
          plotInfo[key].forEach(function (plotData) {
            // calculate maximum and minimum range if bar type is a grouped bar
            if (plotData.barType === constants.GROUPED_BAR) {
              const memberArr = plotData.barOrderMembers
              memberArr.forEach(function (member) {
                if (eachPlotSet[member.name].visible && eachPlotSet[member.name].plotAxis[0] === constants.DIR_LEFT && eachPlotSet[member.name].maxVal > allMax) {
                  allMax = eachPlotSet[member.name].maxVal
                }
                if (eachPlotSet[member.name].visible && eachPlotSet[member.name].plotAxis[0] === constants.DIR_RIGHT && eachPlotSet[member.name].maxVal > allMax2) {
                  allMax2 = eachPlotSet[member.name].maxVal
                }
              })
            } else if (plotData.barType === constants.STACKED_BAR) {
              if (plotData.plotAxis[0] === constants.DIR_LEFT && plotData.valueRange[1] > allMax) {
                allMax = plotData.valueRange[1]
              }
              if (plotData.plotAxis[0] === constants.DIR_RIGHT && plotData.valueRange[1] > allMax2) {
                allMax2 = plotData.valueRange[1]
              }

            }

          })
        }
      }

      // Find min value just by checking min value among all series data
      let allMin = Infinity
      let allMin2 = Infinity
      for (key in eachPlotSet) {
        if (eachPlotSet[key].plotAxis && eachPlotSet[key].plotAxis[0] === 'left' && eachPlotSet[key].visible && eachPlotSet[key].minVal < allMin) {
          allMin = eachPlotSet[key].minVal
        }
        if (eachPlotSet[key].plotAxis && eachPlotSet[key].plotAxis[0] === 'right' && eachPlotSet[key].visible && eachPlotSet[key].minVal < allMin2) {
          allMin2 = eachPlotSet[key].minVal
        }
      }


      let yMin, yMax
      // If Yaxis range is already defined in options, Override it.
      if ([allMin, allMax].reduce(function (a, b) {
        return Number.isFinite(a) && Number.isFinite(b)
      })) {
        yMin = getObject(dataOptions, 'yAxis.left.min')
        yMin = Number.isFinite(yMin) ? yMin : allMin
        yMax = getObject(dataOptions, 'yAxis.left.max')
        yMax = Number.isFinite(yMax) ? yMax : allMax
        if (!yMax) {
          yMax = yMin + 80 // Set as default 100 if range is [0,0]
        }
        yRange = [yMin, yMax]
      } else {
        if (yAxis) {
          yRange = [0, 80]
        } else {
          yRange = false
        }
      }


      if ([allMin2, allMax2].reduce(function (a, b) {
        return Number.isFinite(a) && Number.isFinite(b)
      })) {
        yMin = getObject(dataOptions, 'yAxis.right.min')
        yMin = Number.isFinite(yMin) ? yMin : allMin2
        yMax = getObject(dataOptions, 'yAxis.right.max')
        yMax = Number.isFinite(yMax) ? yMax : allMax2
        if (!yMax) {
          yMax = yMin + 80 // Set as default 100 if range is [0,0]
        }
        yRange2 = [yMin, yMax]
      } else {
        if (yAxis2) {
          yRange2 = [0, 80]
        } else {
          yRange2 = false
        }
      }

    }

    return {
      yRange: yRange,
      yRange2: yRange2
    }
  }

  constructPlotInfo () {
    const dataOptions = this.dataOptions
    const resJson = dataOptions.data
    const seriesData = resJson.barseries
    const columns = seriesData.columns.slice(1) // Ignore the first column, As it corresponds to x axis
    let ind = 1
    // Object that contains all plot functions needed for the chart
    const eachPlotSet = {}
    // Set of rules that charts needs to be draw on timeSeriesChart
    const plotInfo = dataOptions.series
    let key

    const dataColorArr = seriesData.color || []
    const yLeft = getObject(dataOptions, 'yAxis.left')
    const yRight = getObject(dataOptions, 'yAxis.right')

    // Generate eachPlotSet using columns
    columns.forEach(function (d) {
      // Convert the Series Name to JS suitable object mapped name ex: abc(%) 1 --> abc1
      const refineName = refineString(d)
      eachPlotSet[refineName] = {
        name: d,
        dataIndex: ind,
        minVal: Infinity,
        maxVal: -Infinity,
        visible: true,
        color: dataColorArr[ind] || '#000'
      }
      ind++
    })


    for (key in plotInfo) {
      if (key === 'bar') {
        plotInfo[key].forEach(function (plotData) {
          const memberArr = plotData.barOrderMembers
          plotData.valueRange = [Infinity, -Infinity]
          memberArr.forEach(function (member) {
            member.name = refineString(member.name)
            const color = member.color // Apply color for each Plot series or pick from data color Arr
            if (!color) {
              throw `Color not present for series ${plotData.name}`
            }
            color && (eachPlotSet[member.name].color = color)
            const plotAxis = member.plotAxis || ['left', 'bottom']
            eachPlotSet[member.name].plotAxis = plotAxis
            const unit = plotAxis[0] === 'left' ? yLeft.unit : yRight.unit
            eachPlotSet[member.name].unit = unit
            isBoolean(member.visible) && (eachPlotSet[member.name].visible = member.visible)
          })
        })
      }
    }

    return {
      series: plotInfo, // newly updated series from user options having additional info of each series
      plotSet: eachPlotSet, // Info of each plot like color, max, min etc
    }
  }
}

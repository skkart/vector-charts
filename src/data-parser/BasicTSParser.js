import ChartAxisParser from '@/data-parser/ChartAxisParser'
import {getDateInUserTimezone, getObject, refineString, isNumber, isDate, isBoolean} from '@/utils'
import each from 'lodash/each'

export default class BasicTSParser extends ChartAxisParser {
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
      this.opts.constantSeries && (this.dataOptions.constantSeries = this.opts.constantSeries)
      this.opts.yAxis && (this.dataOptions.yAxis = this.opts.yAxis)

      Object.assign(this.dataOptions, this.constructChartData())
      Object.assign(this.dataOptions, this.constructXAxisInfo())
      Object.assign(this.dataOptions, this.constructPlotInfo())
      Object.assign(this.dataOptions, this.constructYAxisInfo())

      return this.dataOptions

    } catch (err) {
      console.log('Error encountered while timeseries JSON parsing :', err)
      this.opts.onError(err)
      throw new Error('Invalid JSON received - Error on timeseries JSON parsing')
    }
  }

  constructChartData () {
    const dataOptions = this.dataOptions
    const resJson = dataOptions.data
    const seriesData = resJson.timeseries
    const columns = seriesData.columns
    const data = seriesData.values
    const userTz = this.opts.xAxis.timeZone
    const validJSONType = (columns.length && data.length)

    // Find seconds in unitArr to find the timeStampIndex
    const timeStampIndex = 0
    const firstTime = data[0][timeStampIndex]
    if (!validJSONType || !(isNumber(firstTime) || isDate(firstTime))) {
      throw new Error('Invalid Time series JSON received')
    }

    let start = 0
    data.forEach(function (d) {
      if (start > d[timeStampIndex]) {
        throw new Error('Invalid Time series JSON received: Timestamp Values must be in ascending order')
      }
      start = d[timeStampIndex]
      d[timeStampIndex] = getDateInUserTimezone(d[timeStampIndex], true, userTz) // convert EPOC to date
    })

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
        timeRange: [seriesData[0][dataIndex], seriesData[(seriesData.length - 1)][dataIndex]]
      }
    }
  }

  constructYAxisInfo () {
    const dataOptions = this.dataOptions
    const eachPlotSet = dataOptions.plotSet
    const constPlotSet = dataOptions.constantPlotSet
    const plotInfo = dataOptions.series
    const constInfo = dataOptions.constantSeries
    const data = dataOptions.chartData
    const yAxis = getObject(dataOptions, 'yAxis.left')
    const yAxis2 = getObject(dataOptions, 'yAxis.right')
    let findEachPlotRange = false
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
    if ((yAxis && !yRange) || (yAxis2 && !yRange2)) {

      for (key in eachPlotSet) {
        if (!Number.isFinite(eachPlotSet[key].minVal) || !Number.isFinite(eachPlotSet[key].maxVal)) {
          findEachPlotRange = true
          break
        }
      }

      if ((plotInfo.stack && plotInfo.stack.length) || findEachPlotRange) {

        if (findEachPlotRange) {
          // Reset range for each plot for finding min , max
          each(eachPlotSet, function (eachPlot) {
            eachPlot.minVal = Infinity
            eachPlot.maxVal = -Infinity
          })
        }

        // Reset stack range for each stack for finding min , max
        plotInfo.stack && plotInfo.stack.forEach(function (plotData) {
          plotData.valueRange = [Infinity, -Infinity]
        })

        // Calculate Max and Min for each plots series
        let valData = 0
        data.forEach(function (d) {
          if (findEachPlotRange) {
            each(eachPlotSet, function (eachPlot) {
              valData = d[eachPlot.dataIndex]
              if (valData < eachPlot.minVal) {
                eachPlot.minVal = valData
              }
              if (valData > eachPlot.maxVal) {
                eachPlot.maxVal = valData
              }
            })
          }

          plotInfo.stack && plotInfo.stack.forEach(function (plotData) {
            const memberArr = plotData.stackOrderMembers
            let sum = 0
            memberArr.forEach(function (member) {
              sum += (eachPlotSet[member.name].visible ? d[eachPlotSet[member.name].dataIndex] : 0)
            })

            if (sum < plotData.valueRange[0]) {
              plotData.valueRange[0] = sum
            }
            if (sum > plotData.valueRange[1]) {
              plotData.valueRange[1] = sum
            }
          })
        })
      }

      // Find Max value required to plot on graph based on visible plot function . i.e line or stack
      let allMax = -Infinity
      let allMax2 = -Infinity
      for (key in plotInfo) {
        if (key === 'line') {
          plotInfo[key].forEach(function (plotData) {
            if (eachPlotSet[plotData.name].visible && eachPlotSet[plotData.name].plotAxis[0] === 'left' && eachPlotSet[plotData.name].maxVal > allMax) {
              allMax = eachPlotSet[plotData.name].maxVal
            }
            if (eachPlotSet[plotData.name].visible && eachPlotSet[plotData.name].plotAxis[0] === 'right' && eachPlotSet[plotData.name].maxVal > allMax2) {
              allMax2 = eachPlotSet[plotData.name].maxVal
            }
          })
        } else if (key === 'stack') {
          plotInfo[key].forEach(function (plotData) {
            if (plotData.plotAxis[0] === 'left' && plotData.valueRange[1] > allMax) {
              allMax = plotData.valueRange[1]
            }
            if (plotData.plotAxis[0] === 'right' && plotData.valueRange[1] > allMax2) {
              allMax2 = plotData.valueRange[1]
            }
          })
        }
      }

      // Find min value just by checking min value among all series data
      let allMin = Infinity
      let allMin2 = Infinity
      for (key in eachPlotSet) {
        if (eachPlotSet[key].plotAxis[0] === 'left' && eachPlotSet[key].visible && eachPlotSet[key].minVal < allMin) {
          allMin = eachPlotSet[key].minVal
        }
        if (eachPlotSet[key].plotAxis[0] === 'right' && eachPlotSet[key].visible && eachPlotSet[key].minVal < allMin2) {
          allMin2 = eachPlotSet[key].minVal
        }
      }

      // Find max and min value for visible constant series
      for (key in constInfo) {
        if (key === 'line') {
          constInfo[key].forEach(function (plotData) {
            if (constPlotSet[plotData.name].visible && constPlotSet[plotData.name].plotAxis[0] === 'left') {
              if (constPlotSet[plotData.name].maxVal > allMax) {
                allMax = constPlotSet[plotData.name].maxVal
              }
              if (constPlotSet[plotData.name].minVal < allMin) {
                allMin = constPlotSet[plotData.name].minVal
              }
            }

            if (constPlotSet[plotData.name].visible && constPlotSet[plotData.name].plotAxis[0] === 'right') {
              if (constPlotSet[plotData.name].maxVal > allMax2) {
                allMax2 = constPlotSet[plotData.name].maxVal
              }
              if (constPlotSet[plotData.name].minVal < allMin2) {
                allMin2 = constPlotSet[plotData.name].minVal
              }
            }
          })
        }
      }


      let yMin, yMax
      // If Yaxis range is already defined in options, Override it.
      if ([allMin, allMax].reduce(function (a, b) {
        return isFinite(a) && isFinite(b)
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
        return isFinite(a) && isFinite(b)
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
    const seriesData = resJson.timeseries
    const columns = seriesData.columns
    const constantSeries = resJson.constantSeries || null
    const constantColumns = constantSeries ? constantSeries.columns : null
    let ind = 0
    // Object that contains all plot functions needed for the chart
    const eachPlotSet = {}
    // Object that contains all constant plot functions needed for the chart
    const constantPlotSet = {}
    // Set of rules that charts needs to be draw on timeSeriesChart
    const plotInfo = dataOptions.series
    const constantPlotInfo = dataOptions.constantSeries
    let key

    const timeStampIndex = dataOptions.timeInfo.dataIndex
    const dataColorArr = seriesData.color || []
    const yLeft = getObject(dataOptions, 'yAxis.left')
    const yRight = getObject(dataOptions, 'yAxis.right')

    // Generate eachPlotSet using columns
    columns.forEach(function (d) {
      if (timeStampIndex === ind) {
        ind++
        return
      }
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
      if (key === 'line') {
        plotInfo[key].forEach(function (plotData) {
          plotData.name = refineString(plotData.name)
          const color = plotData.color // Apply color for each Plot series or pick from data color Arr
          if (!color) {
            throw `Color not present for series ${plotData.name}`
          }
          color && (eachPlotSet[plotData.name].color = color)
          const plotAxis = plotData.plotAxis || ['left', 'bottom']
          eachPlotSet[plotData.name].plotAxis = plotAxis
          const unit = plotAxis[0] === 'left' ? yLeft.unit : yRight.unit
          eachPlotSet[plotData.name].unit = unit
          isBoolean(plotData.visible) && (eachPlotSet[plotData.name].visible = plotData.visible)
        })
      } else if (key === 'stack') {
        plotInfo[key].forEach(function (plotData) {
          const memberArr = plotData.stackOrderMembers
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
      } else if (key === 'bar') {
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

    // Generate constantPlotSet using Data
    if (constantColumns && constantColumns.length) {
      constantColumns.forEach(function (d) {
        const refineName = refineString(d)

        constantPlotSet[refineName] = {
          name: d,
          value: constantSeries[d].value,
          minVal: 0,
          maxVal: constantSeries[d].value,
          unit: constantSeries[d].unit,
          color: constantSeries[d].color,
          visible: false
        }
      })

      for (key in constantPlotInfo) {
        if (key === 'line') {
          constantPlotInfo[key].forEach(function (plotData) {
            plotData.name = refineString(plotData.name)
            const color = plotData.color
            if (!color) {
              throw `Color not present for series ${plotData.name}`
            }
            color && (constantPlotSet[plotData.name].color = color)
            const plotAxis = plotData.plotAxis || ['left', 'bottom']
            constantPlotSet[plotData.name].plotAxis = plotAxis
            const unit = plotAxis[0] === 'left' ? yLeft.unit : yRight.unit
            constantPlotSet[plotData.name].unit = unit
            isBoolean(plotData.visible) && (constantPlotSet[plotData.name].visible = plotData.visible)
          })
        }
      }


    }

    return {
      series: plotInfo, // newly updated series from user options having additional info of each series
      constantSeries: constantPlotInfo,
      plotSet: eachPlotSet, // Info of each plot like color, max, min etc
      constantPlotSet: constantPlotSet // Info of each constant plot like color, max, min etc
    }
  }
}

import constants from '@/constants'
import {chartCounter, getValueWithDecimals, isArray, isFunction} from '@/utils'
import {timeFormat} from '@/d3Importer'

export function addDefaultChartOptions (opts) {

  opts.chart = Object.assign({
    chartResize: false,
    isTouchScreen: false,
    className: '',
    maxWidth: Number.MAX_SAFE_INTEGER,
    minWidth: 0
  }, opts.chart)
  opts.chart.counter = chartCounter()

  opts.tooltip = Object.assign({
    visible: true,
    format: false // Use aryakaCharts internal tooltip formatter to show raw data
  }, (opts.tooltip || {}))

  opts.legend = Object.assign({
    visible: true,
    legendPrefix: '',
    position: constants.DIR_TOP
  }, (opts.legend || {}))

  if (!isFunction(opts.afterDraw)) {
    opts.afterDraw = function (c) {
      return c
    }
  }

  if (!isFunction(opts.onComplete)) {
    opts.onComplete = function (time) {
      console.log(`Chart loading of ${opts.containerName} is completed in ${time} ms`)
    }
  }

  if (!isFunction(opts.onError)) {
    opts.onError = function (error) {
      console.log(`Chart has encountered error of ${opts.containerName} `, error)
    }
  }

  return opts
}

export function defaultValueFormat (val, unit = '', decimals = 3) {
  const denominator = 1000
  if (val > denominator) {
    const kVal = getValueWithDecimals(val / denominator, decimals)
    if (kVal > denominator) {
      const mVal = getValueWithDecimals(kVal / denominator, decimals)
      return `${mVal}M ${unit}`
    }
    return `${kVal}K ${unit}`
  }
  return `${getValueWithDecimals(val, decimals)} ${unit}`
}


export function addDefaultTSOptions (opts) {
  // Add defaults to xAxis
  opts.xAxis = Object.assign({
    bottom: {
      unit: constants.UNITS_TIME,
      visible: true
    }
  }, (opts.xAxis || {}))

  if (!isFunction(opts.xAxis.bottom.tickFormatter)) {
    const timeInfo = opts.timeInfo
    // If the date range is less than 2 days, Show in hour format
    const timeLen = timeInfo.timeRange.length
    const dateDiff = timeInfo.timeRange[timeLen - 1] - timeInfo.timeRange[0]

    const xAxisFn = (dateDiff < constants.TIME_FORMAT_BUFFER) ? timeFormat('%H:%M') : timeFormat('%d %b %Y')
    opts.xAxis.bottom.tickFormatter = (xDate) => {
      return xAxisFn(xDate)
    }
  }

  // If yAxis is not specified, then default is left and its value axis with unit
  if (!opts.yAxis) {
    opts.yAxis = {
      left: {}
    }
  }

  if (opts.yAxis.left) {
    opts.yAxis.left = Object.assign({
      unit: constants.UNITS_DEF,
      min: 0, // Start plotting Y Axis from 0
      visible: true
    }, opts.yAxis.left)
  }

  if (opts.yAxis.right) {
    opts.yAxis.right = Object.assign({
      unit: constants.UNITS_DEF,
      min: 0, // Start plotting Y Axis from 0
      visible: true
    }, opts.yAxis.right)
  }

  opts.zoom = Object.assign({
    visible: false
  }, (opts.zoom || {}))

  // General Options to both chartType
  opts.tooltip = Object.assign({
    visible: true,
    format: false // Use aryakaCharts internal tooltip formatter to show raw data
  }, (opts.tooltip || {}))

  if (!isFunction(opts.tooltip.format)) {
    const formatTime = timeFormat('%d %b %Y  %H:%M:%S')
    opts.tooltip.format = function (d) {
      if (!d || !isArray(d)) {
        return ''
      }
      const plotSet = this.options.plotSet
      const timeInfo = this.options.timeInfo
      const zoneOffset = this.options.xAxis.zoneOffset || ''
      const yAxis = this.options.yAxis

      let tableStr = `<table><tbody><tr>
            <td class="value_full" colspan="2">
            ${formatTime(d[timeInfo.dataIndex])} ${zoneOffset}
            </td></tr>`

      for (const key in plotSet) {
        const val = d[plotSet[key].dataIndex]
        if (!plotSet[key].visible || isNaN(val)) {
          continue
        }

        // Find Y Axis format is preset
        const yOrient = yAxis[plotSet[key].plotAxis[0]]
        const format = yOrient.format || defaultValueFormat

        tableStr += `<tr>
        <td class='name'>
            <span style='background-color:${plotSet[key].color}'></span>${plotSet[key].name}
        </td>
        <td class='value'>
            ${format(val, plotSet[key].unit)}
        </td>
        </tr>`
      }

      tableStr += '</tbody></table>'

      return tableStr
    }
  }

  addDefaultChartOptions(opts)

  return opts
}

export function addDefaultBSOptions (opts) {
  // Add defaults to xAxis
  opts.xAxis = Object.assign({
    bottom: {
      unit: constants.UNITS_DEF,
      visible: true
    }
  }, (opts.xAxis || {}))


  // If yAxis is not specified, then default is left and its value axis with unit
  if (!opts.yAxis) {
    opts.yAxis = {
      left: {}
    }
  }

  if (opts.yAxis.left) {
    opts.yAxis.left = Object.assign({
      unit: constants.UNITS_DEF,
      min: 0, // Start plotting Y Axis from 0
      visible: true
    }, opts.yAxis.left)
  }

  if (opts.yAxis.right) {
    opts.yAxis.right = Object.assign({
      unit: constants.UNITS_DEF,
      min: 0, // Start plotting Y Axis from 0
      visible: true
    }, opts.yAxis.right)
  }

  opts.zoom = Object.assign({
    visible: false
  }, (opts.zoom || {}))


  // General Options to both chartType
  opts.tooltip = Object.assign({
    visible: true,
    format: false // Use aryakaCharts internal tooltip formatter to show raw data
  }, (opts.tooltip || {}))

  if (!isFunction(opts.tooltip.format)) {
    opts.tooltip.format = function (d) {
      let dataArr = d
      if (d && d.val) {
        dataArr = d.val
      }
      if (!isArray(dataArr)) {
        return ''
      }
      const plotSet = this.options.plotSet
      const timeInfo = this.options.timeInfo
      const yAxis = this.options.yAxis

      let tableStr = `<table><tbody><tr>
            <td class="value_full" colspan="2">
            ${dataArr[timeInfo.dataIndex]}
            </td></tr>`

      for (const key in plotSet) {
        const val = dataArr[plotSet[key].dataIndex]
        if (!plotSet[key].visible || isNaN(val)) {
          continue
        }

        // Find Y Axis format is preset
        const yOrient = yAxis[plotSet[key].plotAxis[0]]
        const format = yOrient.format || defaultValueFormat

        tableStr += `<tr>
        <td class='name'>
            <span style='background-color:${plotSet[key].color}'></span>
        </td>
        <td class='value'>
            ${format(val, plotSet[key].unit)}
        </td>
        </tr>`
      }

      tableStr += '</tbody></table>'

      return tableStr
    }
  }

  addDefaultChartOptions(opts)

  return opts
}

export function addDefaultPSOptions (opts) {

  // General Options to both chartType
  opts.tooltip = Object.assign({
    visible: true,
    format: false // Use aryakaCharts internal tooltip formatter to show raw data
  }, (opts.tooltip || {}))

  if (!isFunction(opts.tooltip.format)) {
    opts.tooltip.format = function (d) {
      if (!d || !d.value) {
        return ''
      }
      const pieObj = this.options.series.pie
      const format = pieObj.format || defaultValueFormat
      const percentage = getValueWithDecimals((d.value / pieObj.total) * 100, 1)

      return `<table style='opacity: 0.8;'>
              <tbody>
              <tr>
              <td class='name'><span style='background-color:${d.color}'></span>${d.name}</td>
              <td class='value'>${percentage} %</td>
              </tr>
              <tr>
              <td class='value' colspan='2'>${format(d.value, pieObj.unit)}</td>
              </tr>
              </tbody>
              </table>`
    }
  }

  addDefaultChartOptions(opts)

  opts.legend.position = constants.DIR_RIGHT

  return opts
}
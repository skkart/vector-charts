import constants from '@/constants'
import {isFunction} from '@/utils'
import {timeFormat} from 'd3-time-format'

export function addDefaultChartOptions (opts) {

  // General Options to both chartType
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
    visible: true
  }, (opts.zoom || {}))

  addDefaultChartOptions(opts)

  return opts
}



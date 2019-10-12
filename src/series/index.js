import ChartComponent from '@/charts/ChartComponent'
import {isArray} from '@/utils'
import Line from '@/series/Line'
import StackArea from '@/series/StackArea'
// import {findWhere} from 'lodash'

export default class Series extends ChartComponent {
  constructor (opts) {
    super()
    this.opts = opts
    this.plotSeries = []
    const data = this.opts.chart.options.chartData // Accept either timeseries or pieseries
    const plotInfo = this.opts.chart.options.series
    const eachPlotSet = this.opts.chart.options.plotSet

    // Create plot components based on input options and each plot info
    // Follow order to plot pie, stack and line
    // if (isObject(plotInfo)) {
    //   isArray(plotInfo.pie) && plotInfo.pie.forEach(function (plotData) {
    //     const pieData = findWhere(data, {
    //       name: plotData.name
    //     });
    //     this.plotSeries.push(new ac.plot.pie({
    //       chart: this.opts.chart,
    //       className: plotData.className || plotData.name,
    //       pieData: pieData,
    //       donutPercent: plotData.donutPercent,
    //       visible: plotData.visible
    //     }));
    //   }, this)

    isArray(plotInfo.stack) && plotInfo.stack.forEach((plotData) => {
      this.plotSeries.push(new StackArea({
        chart: this.opts.chart,
        className: plotData.className || plotData.name,
        plotAxis: plotData.plotAxis,
        xAxisTarget: this.opts.chart.options.timeInfo.dataIndex,
        stackData: data,
        stackOrderMembers: plotData.stackOrderMembers
      }))
    })

    isArray(plotInfo.line) && plotInfo.line.forEach((plotData) => {
      this.plotSeries.push(new Line({
        chart: this.opts.chart,
        className: plotData.className || plotData.name,
        plotAxis: plotData.plotAxis,
        yAxisTarget: eachPlotSet[plotData.name].dataIndex,
        xAxisTarget: this.opts.chart.options.timeInfo.dataIndex,
        visible: eachPlotSet[plotData.name].visible,
        lineData: {
          name: plotData.name,
          color: eachPlotSet[plotData.name].color,
          lineWidth: eachPlotSet[plotData.name].lineWidth,
          values: data
        }
      }))
    })

    // _.isArray(plotInfo.bar) && plotInfo.bar.forEach(function (plotData) {
    //   this.plotSeries.push(new ac.plot.bar({
    //     chart: this.opts.chart,
    //     className: plotData.className || plotData.name,
    //     plotAxis: plotData.plotAxis,
    //     xAxisTarget: this.opts.chart.options.timeInfo.dataIndex,
    //     barOrderMembers: plotData.barOrderMembers,
    //     barData: data
    //   }))
    // }, this)
  }

  draw () {
    this.plotSeries.forEach(function (plotFn) {
      plotFn.draw()
    })
  }

  update () {
    this.plotSeries.forEach(function (plotFn) {
      plotFn.update()
    })
  }

  showHide (showFlag) {
    this.plotSeries.forEach(function (plotFn) {
      plotFn.showHide(showFlag)
    })
  }

  // Redraw is called when series is toggled from Legends
  redraw () {
    this.plotSeries.forEach(function (plotFn) {
      plotFn.redraw()
    })
  }

  remove () {
    this.plotSeries.forEach(function (plotFn) {
      plotFn.remove()
    })
    this.plotSeries = null
    this.opts = null
  }
  
}
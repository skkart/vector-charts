import ChartComponent from '@/charts/ChartComponent'

export default class Series extends ChartComponent {
  constructor (opts) {
    super()
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
import ChartComponent from '@/charts/ChartComponent'

export default class MouseHandler extends ChartComponent {
  constructor (opts) {
    super()
    this.opts = opts
    this.opts.registerFn = []
  }

  draw () {
    this.mouseBrush = this.opts.chart.svg.append('g')
      .attr('class', 'vc-brushX')
      .attr('width', this.opts.chart.chartWidth)
      .attr('height', this.opts.chart.chartHeight)
      .attr('fill', 'none')
      .attr('pointer-events', 'all')
      .attr('style', '-webkit-tap-highlight-color: rgba(0, 0, 0, 0)')
      .attr('transform', `translate(${this.opts.chart.margin.left},${this.opts.chart.margin.top})`)

    if (this.opts.chart.options.chart.isTouchScreen) {
      this.mouseBrush.attr('cursor', 'pointer')
    }

    // if (!this.opts.chart.options.zoom.visible) {
    //
    // }
    // x-Zoom for chart doest not exist, Add rect overlay for brushXDiv
    this.mouseBrush.append('rect')
      .attr('class', 'overlay')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', this.opts.chart.chartWidth)
      .attr('height', this.opts.chart.chartHeight)
  }

  update () {
    this.mouseBrush.attr('width', this.opts.chart.chartWidth)
      .attr('height', this.opts.chart.chartHeight)
      .attr('transform', `translate(${this.opts.chart.margin.left},${this.opts.chart.margin.top})`)
    this.mouseBrush.select('rect.overlay')
      .attr('width', this.opts.chart.chartWidth)
      .attr('height', this.opts.chart.chartHeight)
  }

  showHide (showFlag) {
    showFlag = !!showFlag
    this.mouseBrush && this.mouseBrush.classed('vc-hidden', !showFlag)
  }

  register (callback) {
    this.opts.registerFn.push(callback)
  }

  triggerMouseAction () {
    this.opts.registerFn.forEach((fun) => {
      fun.call(this)
    })
  }

  remove () {
    this.mouseBrush && this.mouseBrush.remove()
    this.opts = null
  }
}
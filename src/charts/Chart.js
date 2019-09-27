import {isObject, isString, throttle} from '@/utils'
import uniqueId from 'lodash/uniqueId'
import {select} from 'd3-selection'
import ChartComponent from '@/charts/ChartComponent'

export default class Chart extends ChartComponent {
  constructor (container, opts) {
    super()
    if (isString(container) && isObject(opts) && container.length && isObject(opts.dataParser)) {
      this.$container = $(container)
      if (!this.$container.length) {
        throw new Error('The graph container spectifed in options doesnt exist inside in Document Body')
      }
      opts.containerName = container
      let takeContainerWidth = false
      if (!Number.isFinite(opts.chart.width)) {
        opts.chart.width = this.$container.width()
        takeContainerWidth = true
      }

      let takeContainerHeight = false
      if (!Number.isFinite(opts.chart.height)) {
        opts.chart.height = this.$container.height()
        takeContainerHeight = true
      }

      if (opts.chart.width > opts.chart.maxWidth) {
        opts.chart.width = opts.chart.maxWidth
      }

      if (opts.chart.width < opts.chart.minWidth) {
        opts.chart.width = opts.chart.minWidth
      }

      this.options = opts

      this.chartHeight = opts.chart.height
      this.chartWidth = opts.chart.width
      this.margin = opts.chart.margin
      this.chartType = opts.chart.chartType

      if (takeContainerWidth) {
        this.chartWidth = this.chartWidth - (this.margin.left + this.margin.right)
      }

      if (takeContainerHeight) {
        this.chartHeight = this.chartHeight - (this.margin.top + this.margin.bottom)
      }

      // Attach dataProcess to chart, which generate chartData and plot Info based on JSON and options
      this.dataParser = opts.dataParser

      // Delete dataProcess from options
      delete this.options.dataParser

      this.chartFullSpace = {
        width: this.chartWidth + this.margin.left + this.margin.right,
        height: this.chartHeight + this.margin.top + this.margin.bottom,
      }


      // Array which holds all the chartComponents required for the graph like axis, series, tooltip, legend etc
      this.chartComponentsArr = []

      this.svg = select(this.$container.get(0)).select('svg')

      if (this.svg.size() === 0) {
        // Create svg element if not exist inside chart container DIV
        this.svg = select(this.$container.get(0)).select('.vc-div-svg').append('svg')
      }

      // Clear svg if it has needless content
      $(this.svg.node()).empty()

      this.svg
        .attr('width', this.chartFullSpace.width)
        .attr('height', this.chartFullSpace.height)
        .attr('class', 'vc-svg ' + opts.chart.className)

      // Add defs to show plot series within the def specified width and height
      this.svg.append('defs')
        .append('clipPath')
        .attr('id', uniqueId('chart_clip'))
        .append('rect')
        .attr('width', this.chartWidth)
        .attr('height', this.chartHeight)

      // Add graphZone tag, so that all series and axis are grouped together
      this.graphZone = this.svg.append('g')
        .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')')
        .attr('class', 'vc-graphZone')
    }
  }

  draw () {
    console.log('Chart draw', this)
    // Draw all the chartComponents in the same order of there initilization using chartComponentsArr
    this.chartComponentsArr.forEach(function (chartCmpt) {
      if (chartCmpt instanceof ChartComponent) {
        chartCmpt.draw()
      }
    })
  }

  update () {
    this.svg.attr('width', this.chartFullSpace.width)
    this.graphZone.attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')')
    this.svg.select('clipPath').select('rect').attr('width', this.chartWidth)

    console.log('Chart update', this)
    // Update all chart component based on new width changes
    this.chartComponentsArr.forEach(function (chartCmpt) {
      if (chartCmpt instanceof ChartComponent) {
        chartCmpt.update()
      }
    })
  }

  showHide (showFlag) {
    console.log('Chart showHide', this)
    showFlag = !!showFlag // Convert any type to boolean
    this.chartComponentsArr.forEach(function (chartCmpt) {
      if (chartCmpt instanceof ChartComponent) {
        chartCmpt.showHide(showFlag)
      }
    })
  }

  remove () {
    console.log('ac.chart remove', this)
    this.chartComponentsArr.forEach(function (chartCmpt) {
      if (chartCmpt instanceof ChartComponent) {
        chartCmpt.remove()
      }
    })
  }

  // chartResponsive based on screen resize is handled
  chartResponsive () {
    if (this.options.chart.chartResize) {
      this.throttedResize = throttle((width, height) => {
        if (width === this.chartFullSpace.width) {
          return // Dont resize if graph is already adjusted
        }
        this.chartFullSpace.width = Math.floor(width)
        this.chartFullSpace.height = Math.floor(height)
        this.chartWidth = this.chartFullSpace.width - (this.margin.left + this.margin.right)
        this.chartHeight = this.chartFullSpace.height - (this.margin.top + this.margin.bottom)
        setTimeout(() => this.update(), 0)
      }, 450) // 'this' Will have reference of timeSeriesChart or pieSeriesChart

      // Add resize for each chart based on chart ID namespace
      const chartId = 'ac_' + this.options.chart.id
      $(window).on('resize.' + chartId, () => this.autoSizeChart())

    }
  }

  autoSizeChart () {
    let resizedGraphWidth = this.$container.width()

    if (resizedGraphWidth > this.options.chart.maxWidth) {
      resizedGraphWidth = this.options.chart.maxWidth
    }

    if (resizedGraphWidth < this.options.chart.minWidth) {
      resizedGraphWidth = this.options.chart.minWidth
    }

    this.throttedResize(resizedGraphWidth, this.$container.height())
  }

  // Destroy all chart properties and components
  destroy (destroyFull) {
    destroyFull = !!destroyFull
    // Remove resize hander on window for vcChart namespace
    if (this.options.chart.chartResize) {
      const chartId = 'ac_' + this.options.chart.id
      $(window).off('resize.' + chartId)
    }

    // Remove all chartComponents (timeSeriesChart or pieSeriesChart)
    this.remove()

    // Remove svg and container if destroyFull is true
    destroyFull && this.svg.remove()
    destroyFull && this.$container.remove()

    return null
  }
}

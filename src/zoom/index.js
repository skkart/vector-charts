import ChartComponent from '@/charts/ChartComponent'
import {getObject, isFunction, emptyFn} from '@/utils'
import {brushX, brushY, d3Event} from '@/d3Importer'
import constants from '@/constants'

export default class Zoom extends ChartComponent {
  constructor (opts) {
    super()
    this.opts = Object.assign({
      onZoom: emptyFn,
      onY1Zoom: emptyFn,
      onY2Zoom: emptyFn
    }, opts)
  }

  draw () {
    const self = this
    const xScale = getObject(this.opts, 'chart.xAxis.scale') || false
    const yScaleLeft = getObject(this.opts, 'chart.yAxis.scale') || false
    const yScaleRight = getObject(this.opts, 'chart.yAxis2.scale') || false
    let brushOverlay = null
    if (xScale) {
      // Create x axis brush for Zoom operation
      this.brushX = brushX()
        .extent([
          [0, 0],
          [this.opts.chart.chartWidth, this.opts.chart.chartHeight]
        ])

      // Use the same mouseBrush for both xBrush and tooltip
      this.brushXDiv = this.opts.chart.mouseHandler.mouseBrush
        .call(this.brushX)

      brushOverlay = this.brushXDiv.selectAll('rect.overlay')

      // Call this event when xAxis brush is ended
      this.brushX.on('end', function () {
        if (!d3Event.selection) {
          return
        }

        const d0 = d3Event.selection.map(xScale.invert)
        // find x1 and x2
          
        const d1 = d0 && d0.map(Math.round) // round both values

        // clear Brush
        self.brushXDiv.call(self.brushX.move, null)
        brushOverlay.style('cursor', 'auto')

        // d1 = d1
        //   .sort(function (a, b) {
        //     return (a - b)
        //   })

        self.opts.chart.xAxis.modifyAxisProps({
          domainScale: d1 // Change domain of X axis upon horizontal zoom
        })

        self.opts.chart.series.update() // Update all plotSeries for new YAxis domain change


        // Used onZoom.call(), so that external function can have access of chart Instance
        isFunction(self.opts.onZoom) && self.opts.onZoom.call(self.opts.chart, d1[0], d1[1])

      })
    }

    // Create y axis brush for vertical left scale operation
    if (yScaleLeft) {
      this.brushYLeft = brushY()

      this.brushYLeftDiv = this.opts.chart.svg.append('g')
        .attr('class', 'vc-brushY-left')

      // Call this event when yAxis brush is ended
      this.brushYLeft.on('end', function () {
        if (!d3Event.selection) {
          return
        }
        self.brushYLeftDiv.call(self.brushYLeft.move, null)

        const d0 = d3Event.selection.map(yScaleLeft.invert)

          
        const d1 = d0 && d0.map(Math.round)
          .sort(function (a, b) {
            return (a - b)
          })

        self.opts.chart.yAxis.modifyAxisProps({
          domainScale: d1 // Change domain of Y axis upon vertical zoom
        })

        self.opts.chart.series.update() // Update all plotSeries for new YAxis domain change

        // Used onZoom.call(), so that external function can have access of chart Instance
        isFunction(self.opts.onY1Zoom) && self.opts.onY1Zoom.call(self.opts.chart, d1[0], d1[1])

      })
    }

    // Create y axis brush for vertical right scale operation
    if (yScaleRight) {
      this.brushYRight = brushY()

      this.brushYRightDiv = this.opts.chart.svg.append('g')
        .attr('class', 'vc-brushY-right')

      this.brushYRight.on('end', function () {
        if (!d3Event.selection) {
          return
        }
        self.brushYRightDiv.call(self.brushYRight.move, null)

        const d0 = d3Event.selection.map(yScaleRight.invert)

          
        const d1 = d0 && d0.map(Math.round)
          .sort(function (a, b) {
            return (a - b)
          })

        self.opts.chart.yAxis2.modifyAxisProps({
          domainScale: d1 // Change domain of Y2 axis upon vertical zoom
        })

        self.opts.chart.series.update() // Update all plotSeries for new YAxis domain change

        // Used onZoom.call(), so that external function can have access of chart Instance
        isFunction(self.opts.onY2Zoom) && self.opts.onY2Zoom.call(self.opts.chart, d1[0], d1[1])

      })
    }

    brushOverlay && this.opts.chart.mouseHandler.register(function () {
      // When mouse is clicked or down, enable zoom brush and its mouse cursor
      brushOverlay
        .on('mousedown', function () {
          brushOverlay.style('cursor', 'col-resize')
        })
        .on('click', function () {
          brushOverlay.style('cursor', 'auto')
        })
    })
    this.update()

  }

  update () {
    if (this.brushX) {
      this.brushX.extent([
        [0, 0],
        [this.opts.chart.chartWidth, this.opts.chart.chartHeight]
      ])

      this.brushXDiv.call(this.brushX)
    }

    if (this.brushYLeft) {
      this.brushYLeft
        .extent([
          [0, 0],
          [(this.opts.chart.margin.left - constants.BRUSHY_BUFFER), this.opts.chart.chartHeight]
        ])

      this.brushYLeftDiv
        .attr('transform', 'translate(' + constants.BRUSHY_BUFFER + ',' + this.opts.chart.margin.top + ')')
        .call(this.brushYLeft)
    }

    if (this.brushYRight) {
      this.brushYRight
        .extent([
          [(this.opts.chart.margin.left + this.opts.chart.chartWidth - constants.BRUSHY_BUFFER), 0],
          [(this.opts.chart.margin.left + this.opts.chart.chartWidth + this.opts.chart.margin.right - constants.BRUSHY_BUFFER), this.opts.chart.chartHeight]
        ])

      this.brushYRightDiv
        .attr('transform', 'translate(' + (constants.BRUSHY_BUFFER) + ',' + this.opts.chart.margin.top + ')')
        .call(this.brushYRight)
    }
  }

  showHide (showFlag) {
    showFlag = !!showFlag
    this.brushXDiv && this.brushXDiv.classed('vc-hidden', !showFlag)
    this.brushYLeftDiv && this.brushYLeftDiv.classed('vc-hidden', !showFlag)
    this.brushYRightDiv && this.brushYRightDiv.classed('vc-hidden', !showFlag)
    this.opts.visible = showFlag
  }

  remove () {
    if (this.brushXDiv) {
      this.brushXDiv.call(this.brushX.move, null)
      this.brushXDiv && this.brushXDiv.remove()
    }
    if (this.brushYLeftDiv) {
      this.brushYLeftDiv.call(this.brushYLeft.move, null)
      this.brushYLeftDiv.remove()
    }
    if (this.brushYRightDiv) {
      this.brushYRightDiv.call(this.brushYRight.move, null)
      this.brushYRightDiv.remove()
    }
    this.opts = null
  }
}
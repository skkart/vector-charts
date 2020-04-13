import ChartComponent from '@/charts/ChartComponent'
import {getObject, isFunction, emptyFn} from '@/utils'
import {brushX, brushY, d3Event, d3Touches, zoom} from '@/d3Importer'
import constants from '@/constants'
import {bisector} from 'd3-array'

export default class Zoom extends ChartComponent {
  constructor (opts) {
    super()
    this.opts = Object.assign({
      onZoom: emptyFn,
      onY1Zoom: emptyFn,
      onY2Zoom: emptyFn,
    }, opts)
  }

  getClosestXAxisData (xVal, dataSet) {
    const dateIndex = this.opts.chart.options.timeInfo.dataIndex
    // Find nearest existing date among array of sorted date
    const bisectDate = bisector(function (d) {
      return d[dateIndex]
    }).left

    // Do binary search of data set from 2nd data set to end
    const found = bisectDate(dataSet, xVal, 1)


    const dPrev = dataSet[found - 1]
    // get before find dataSet

    const dFound = dataSet[found] || dPrev // get find dataSet

    return dFound
  }


  updatebrushXSelection (startPos, endPos) {
    this.brushXDiv
      .attr('x', startPos)
      .attr('width', (endPos - startPos))
  }

  draw () {
    const self = this
    const xScale = getObject(this.opts, 'chart.xAxis.scale') || false
    const yScaleLeft = getObject(this.opts, 'chart.yAxis.scale') || false
    const yScaleRight = getObject(this.opts, 'chart.yAxis2.scale') || false
    const dataSet = this.opts.chart.options.chartData
    const brushOverlay = null
    if (xScale) {

      // Create x axis brush for Zoom operation
      this.zoomX = zoom()
        .scaleExtent([0, dataSet.length])
        .translateExtent([
          [this.opts.chart.margin.left, this.opts.chart.margin.top],
          [this.opts.chart.chartWidth, this.opts.chart.chartHeight]])
        .extent([[this.opts.chart.margin.left, this.opts.chart.margin.top], [this.opts.chart.chartWidth, this.opts.chart.chartHeight]])
        .touchable(() => true)
        // .on('zoom', (...args) => {
        //   var transform = zoomTransform(this)
        //   // console.log('Arg', args)
        //   console.log('tran', transform.toString())
        //   const d0 = d3Touches && d3Event.transform.rescaleX(xScale).domain()
        //   const d1 = d0 && d0.map(Math.round)
        //   console.log('Zoom Transform Start', new Date(d1[0]))
        //   console.log('Zoom Transform End', new Date(d1[1]))
        //
        //   // callZoom(d1)
        // })
      // this.brushX = brushX()
      //   .extent([
      //     [0, 0],
      //     [this.opts.chart.chartWidth, this.opts.chart.chartHeight]
      //   ])
      // .touchable(true)

      this.zoomXDiv = this.opts.chart.svg
      // this.zoomXDiv = this.opts.chart.graphZone
      // this.zoomXDiv = this.opts.chart.mouseHandler.mouseBrush
        .call(this.zoomX)

      // Use the same mouseBrush for both xBrush and tooltip
      // this.brushXDiv = this.opts.chart.mouseHandler.mouseBrush
      //   .call(this.brushX)

      // brushOverlay = this.brushXDiv.selectAll('rect.overlay')

      this.brushX = brushX()
        .extent([
          [0, 0],
          [this.opts.chart.chartWidth, this.opts.chart.chartHeight]
        ])


      // Use the same mouseBrush for both xBrush and tooltip
      this.brushXDiv = this.opts.chart.mouseHandler.mouseBrush
        .append('rect')
        .attr('class', 'selection')
        .attr('cursor', 'move')
        .style('opacity', '0.3')
        .attr('x', 0)
        .attr('y', 0)
        .attr('width', 0)
        .attr('height', this.opts.chart.chartHeight)

      let isGesture = false
      let startPos = 0
      let endPos = 0
      this.zoomXDiv
        .style('touch-action', 'pan-y')
        .on('touchstart.zoom', function () {
          const th = d3Touches(this)
          isGesture = d3Event.touches && d3Event.touches.length === 2
          if (th && th.length) {
            const xPos = (th[0][0] - self.opts.chart.margin.left)
            const xval = xScale.invert(xPos)
            const time = Math.round(xval)
            startDt = time
            endDt = time
            startPos = xPos
            endPos = xPos
            console.log('start here ,', new Date(time))
            if (isGesture) {
              console.log('Start Select')
              self.updatebrushXSelection(startPos, endPos)
            }
          }
        })
        .on('touchmove.zoom', function () {
          const th = d3Touches(this)
          console.log('move', th)
          window.mv = th
          if (isGesture && th.length) {
            const xPos1 = (th[0][0] - self.opts.chart.margin.left)
            const xPos2 = (th[0][0] - self.opts.chart.margin.left)
            const xval1 = xScale.invert(xPos1)
            const xval2 = xScale.invert(xPos)
            const time = Math.round(xval)
            // timeArr.push(time)
            if (startDt > time) {
              startDt = time
              startPos = xPos
            }
            if (endDt < time) {
              endDt = time
              endPos = xPos
            }
            console.log('move here ,', new Date(time))
            if (isGesture) {
              console.log('Update Select')
              self.updatebrushXSelection(startPos, endPos)
            }
          }
        })
        .on('touchend.zoom', function () {
          const th = d3Touches(this)
          console.log('end', th)
          if (th && th.length) {
            const xPos = (th[0][0] - self.opts.chart.margin.left)
            const xval = xScale.invert(xPos)
            const time = Math.round(xval)
            if (startDt > time) {
              startDt = time
              startPos = xPos
            }
            if (endDt < time) {
              endDt = time
              endPos = xPos
            }
            console.log('end here ,', new Date(time))
          }
          // console.log('Final Time', timeArr)
          // const st = new Date(timeArr[0])
          // const ed = new Date(timeArr[timeArr.length - 1])
          // console.log('Start ', st)
          // console.log('End ', ed)
          if (isGesture) {
            console.log('Final Select')
            self.updatebrushXSelection(startPos, endPos)
            console.log(self.getClosestXAxisData(startDt, dataSet))
            console.log(self.getClosestXAxisData(endDt, dataSet))
          }
          // isGesture && console.log('Start: ' + st + '  End: ' + ed)
          // timeArr = []
          startDt = 0
          endDt = 0
          isGesture = false
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
import ChartComponent from '@/charts/ChartComponent'
import {getObject, isFunction} from '@/utils'
import {bisector} from 'd3-array'
import {mouse} from 'd3-selection'
import {each, filter} from 'lodash'
import constants from '@/constants'

export default class TimeSeriesTooltip extends ChartComponent {
  constructor (opts) {
    super()
    this.opts = Object.assign({
      crossHairs: {
        enable: true
      },
      visible: true
    }, opts)

    // Provide basic formatter to display hover data
    if (!isFunction(this.opts.format)) {
      this.opts.format = function (d) {
        return `<span> ToolTip Text : </span><br/><span>${JSON.stringify(d)}</span>`
      }
    }
  }

  draw () {
    this.crossHairs = false
    this.$toolTipDiv = $('<div></div>').addClass('vc-tooltip-display')
    this.opts.chart.$container
      .append(this.$toolTipDiv)


    if (this.opts.crossHairs.enable === true) {
      this.crossHairs = this.opts.chart.svg
        .append('g')
        .attr('class', 'vc-tooltip-line')
      this.crossHairs.append('line')
        .attr('transform', 'translate(-999,-999)')
        .attr('x1', this.opts.chart.margin.left)
        .attr('y1', this.opts.chart.margin.top - constants.TOOLTIP_TOP_BUFFER)
        .attr('x2', this.opts.chart.margin.left)
        .attr('y2', (this.opts.chart.chartHeight + this.opts.chart.margin.top))

    }

    this.opts.chart.mouseHandler.register(() => {
      // Register hover and hide/show toolip events
      const self = this
      const xScale = getObject(this.opts, 'chart.xAxis.scale') || false
      const mouseHandler = this.opts.chart.mouseHandler
      const dateIndex = this.opts.chart.options.timeInfo.dataIndex
      const dataSet = this.opts.chart.options.chartData
      // Find nearest existing date among array of sorted date
      const bisectDate = bisector(function (d) {
        return d[dateIndex]
      }).left

      const mouseEvt = function (d) {
        // On mousemove of x overlay, find x,y values and update tooltip
        const xMouse = mouse(this)[0]
        const yMouse = mouse(this)[1]
        const xVal = xScale.invert(xMouse) // find xAxis date for mouse position

        // Do binary search of data set from 2nd data set to end
        const found = bisectDate(dataSet, xVal, 1)

          
        const dBefore = dataSet[found - 2]

          
        const dPrev = dataSet[found - 1]
        // get before find dataSet
          
        const dFound = dataSet[found] || dPrev // get find dataSet

        let toolTipData = dPrev
        if (dataSet.length > self.opts.chart.chartWidth) {
          // More than one tick reside on each pixel. Hence find tick having max value among the dataset
          const dataParseLen = Math.floor(dataSet.length / self.opts.chart.chartWidth) + 1

          const visibleDataIndex = {}

          each(self.opts.chart.options.plotSet, function (plot) {
            if (plot.visible) {
              visibleDataIndex[plot.dataIndex] = true
            }
          })

          const multiArrMap = {}
          // Do Scan from range -dataParseLen to +dataParseLen between found data index
          for (let ind = (found - dataParseLen); ind < (found + dataParseLen); ind++) {
            if (dataSet[ind]) {
              const dSet = filter(dataSet[ind], function (val, index) {
                return visibleDataIndex[index]
              }).sort(function (a, b) {
                return b - a
              })
              if (dSet.length) {
                multiArrMap[ind] = dSet
              }
            }
          }
          let maxInd
          let maxVal = -Infinity
          each(multiArrMap, function (arrSet, key) {
            if (maxVal < arrSet[0]) {
              maxVal = arrSet[0]
              maxInd = key
            }
          })

          toolTipData = dataSet[maxInd] || dFound
        } else {
          // Find nearest reaching date among above two dates
          toolTipData = (xVal - dPrev[dateIndex]) > (dFound[dateIndex] - xVal) ? dFound : dPrev
        }

        let dateIntRange = dFound[dateIndex] - dPrev[dateIndex]

        if (!dateIntRange && dBefore) {
          dateIntRange = dPrev[dateIndex] - dBefore[dateIndex]
        }

        if (dateIntRange < Math.abs(dFound[dateIndex] - xVal)) {
          // If found is outside data interval range, Then data doesnt exist for that tick.
          toolTipData = []
          toolTipData[dateIndex] = xVal
        }

        self.hover(xMouse, yMouse, toolTipData)
      }

      let eventName = 'mousemove'
      if (this.opts.chart.options.chart.isTouchScreen) {
        eventName = 'click'
      }
      mouseHandler.mouseBrush
        .on(eventName, mouseEvt)
        .on('mouseout', function () {
          self.hide()
        })

      $(mouseHandler.mouseBrush.node()).find('rect.overlay')
        .on('mousedown', function () {
          self.hide()
        })

    })
  }

  hover (xPos, yPos, displayData) {
    // Update displayPanel and line based on x position
    this.crossHairs && this.crossHairs.select('line')
      .attr('transform', `translate('${xPos},0)`)
      .attr('x1', this.opts.chart.margin.left)
      .attr('y1', this.opts.chart.margin.top - constants.TOOLTIP_TOP_BUFFER * 2)
      .attr('x2', this.opts.chart.margin.left)
      .attr('y2', (this.opts.chart.chartHeight + this.opts.chart.margin.top))
    this.crossHairs.classed('vc-hidden', false)

    var percentageDiff = xPos / this.opts.chart.chartWidth

    if (percentageDiff < 0.30) {
      percentageDiff = 0.30
    }
    if (percentageDiff > 0.8) {
      percentageDiff = 1
    }
    this.$toolTipDiv
      .css({
        left: Math.round(this.opts.chart.$container.position() // left position of chart on screen
          .left + this.opts.chart.margin.left + xPos - this.$toolTipDiv.width() * percentageDiff) + 'px',
        top: Math.round(this.opts.chart.$container.position() // top position of chart on screen
          .top - this.$toolTipDiv.height() - 5 + constants.TOOLTIP_TOP_BUFFER * 2) + 'px',
        display: 'inline-block'
      })
      .html(this.opts.format.call(this.opts.chart, displayData)) // Used format.call(), so that external fun can have access of chart Instance
  }

  showHide (showFlag) {
    showFlag = !!showFlag

    if (showFlag) {
      this.$toolTipDiv && this.$toolTipDiv.show()
    } else {
      this.$toolTipDiv && this.$toolTipDiv.hide()
    }

    this.crossHairs && this.crossHairs.classed('vc-hidden', !showFlag)

    this.opts.visible = showFlag
  }

  remove () {
    this.$toolTipDiv && this.$toolTipDiv.remove()
    this.crossHairs && this.crossHairs.remove()
    this.opts = null
  }
}

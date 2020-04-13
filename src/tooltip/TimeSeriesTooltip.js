import ChartComponent from '@/charts/ChartComponent'
import {elementOffset, getObject, isFunction} from '@/utils'
import {bisector, d3Mouse} from '@/d3Importer'
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
    this.toolTipDiv = this.opts.chart.container
      .append('div')
      .attr('class', 'vc-tooltip-display ' + this.opts.className)

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
        const xMouse = d3Mouse(this)[0]
        const yMouse = d3Mouse(this)[1]
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

          for (const pl in self.opts.chart.options.plotSet) {
            const plot = self.opts.chart.options.plotSet[pl]
            if (plot.visible) {
              visibleDataIndex[plot.dataIndex] = true
            }
          }

          const multiArrMap = {}
          // Do Scan from range -dataParseLen to +dataParseLen between found data index
          for (let ind = (found - dataParseLen); ind < (found + dataParseLen); ind++) {
            if (dataSet[ind]) {
              const dSet = dataSet[ind].filter(function (val, index) {
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
          for (const mp in multiArrMap) {
            const arrSet = multiArrMap[mp]
            if (maxVal < arrSet[0]) {
              maxVal = arrSet[0]
              maxInd = mp
            }
          }

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
        eventName = 'dblclick'
      }
      mouseHandler.mouseBrush
        .on(eventName, mouseEvt)
        .on('mouseout', function () {
          self.hide()
        })
        .on('mousedown', function () {
          self.hide()
        })

      mouseHandler.mouseBrush.select('rect.overlay')
        .on('mousedown', function () {
          self.hide()
        })

    })
  }

  hover (xPos, yPos, displayData) {
    // Update displayPanel and line based on x position
    this.crossHairs && this.crossHairs.select('line')
      .attr('transform', `translate(${xPos},0)`)
      .attr('x1', this.opts.chart.margin.left)
      .attr('y1', this.opts.chart.margin.top - constants.TOOLTIP_TOP_BUFFER)
      .attr('x2', this.opts.chart.margin.left)
      .attr('y2', (this.opts.chart.chartHeight + this.opts.chart.margin.top))
    this.showHide(true)

    let percentageDiff = xPos / this.opts.chart.chartWidth

    if (percentageDiff < 0.3) {
      percentageDiff = 0.2
    }
    if (percentageDiff > 0.7) {
      percentageDiff = 0.95
    }

    const box = elementOffset(this.toolTipDiv)
    const rootPos = elementOffset(this.opts.chart.container)
    const left = Math.round(rootPos.left + this.opts.chart.margin.left + xPos - box.width * percentageDiff) + 'px'
    const top = Math.round(rootPos.top - box.height - 5 + constants.TOOLTIP_TOP_BUFFER * 2) + 'px'


    this.toolTipDiv
      .style('left', left)
      .style('top', top)
      .style('display', 'inline-block')
      .html(this.opts.format.call(this.opts.chart, displayData)) // Used format.call(), so that external fun can have access of chart Instance
  }

  showHide (showFlag) {
    showFlag = !!showFlag

    this.crossHairs && this.crossHairs.classed('vc-hidden', !showFlag)
    this.toolTipDiv && this.toolTipDiv.classed('vc-hidden', !showFlag)
    this.opts.visible = showFlag
  }

  remove () {
    this.toolTipDiv && this.toolTipDiv.remove()
    this.crossHairs && this.crossHairs.remove()
    this.opts = null
  }
}

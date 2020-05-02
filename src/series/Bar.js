import ChartComponent from '@/charts/ChartComponent'
import constants from '@/constants'
import {getObject} from '@/utils'
import {stack, range, transpose, max, select, d3Event} from '@/d3Importer'

export default class Bar extends ChartComponent {
  constructor (opts) {
    super()

    this.opts = Object.assign({
      className: '',
      plotAxis: [constants.DIR_LEFT, constants.DIR_BOTTOM],
      barData: null,
      xAxisTarget: null,
      barType: constants.GROUPED_BAR,
      barOrderMembers: {},
      visible: true,
      events: {}
    }, opts)

    const self = this

    const eachPlotSet = this.opts.chart.options.plotSet
    this.opts.barOrderIndex = this.opts.barOrderMembers.filter(function (ele) {
      return eachPlotSet[ele.name].visible || false
    })
      .map(function (ele) {
        return eachPlotSet[ele.name].dataIndex
      })

    this.opts.seriesLength = this.opts.barOrderIndex.length
    // Find x and y axis based on plotAxis
    let x = getObject(this.opts, 'chart.xAxis.scale')
    if (this.opts.plotAxis.indexOf(constants.DIR_TOP) > -1) {
      x = getObject(this.opts, 'chart.xAxis2.scale')
    }

    let y = getObject(this.opts, 'chart.yAxis.scale')
    if (this.opts.plotAxis.indexOf(constants.DIR_RIGHT) > -1) {
      y = getObject(this.opts, 'chart.yAxis2.scale')
    }

    this.xScale = x
    this.yScale = y

    const srData = this.opts.barData
    this.opts.seriesArr = []
    this.opts.xAxisArr = []
    srData.forEach((sData, ind) => {
      this.opts.xAxisArr.push(sData[this.opts.xAxisTarget])
      this.opts.barOrderIndex.forEach(function (indexVal, brInd) {
        if (!self.opts.seriesArr[brInd]) {
          self.opts.seriesArr[brInd] = []
        }
        const eachSeriesData = self.opts.seriesArr[brInd]
        eachSeriesData.push(sData[indexVal])
      })
    })
    // this.opts.barOrderIndex.forEach(function (indexVal) {
    //   self.opts.seriesArr.push(map(srData, indexVal))
    // })

    this.opts.barStack = stack().keys(range(this.opts.seriesLength))(transpose(this.opts.seriesArr))

    this.yMaxGrouped = max(this.opts.seriesArr, function (y) {
      return max(y)
    })
    this.yMaxStacked = max(this.opts.barStack, function (y) {
      return max(y, function (d) {
        return d[1]
      })
    })
  }

  draw () {
    const self = this
    const nameIndexMap = {}
    const eachPlotSet = this.opts.chart.options.plotSet
    const barVisibleOrder = this.opts.barOrderMembers.filter(function (ele) {
      return (eachPlotSet[ele.name].visible || false)
    })
    barVisibleOrder.forEach(function (plot, name) {
      const pt = eachPlotSet[plot.name]
      nameIndexMap[pt.dataIndex - 1] = plot.name
    })


    const clipElement = this.opts.chart.container.select('svg clipPath')
    this.barSeries = this.opts.chart.graphZone.selectAll('.vc-bar-series')
      .data(this.opts.barStack)
      .enter()
      .append('g')
      .attr('clip-path', 'url(#' + clipElement.attr('id') + ')') // display graphZone of same size as clip-path defined
      .attr('class', 'vc-bar-series')
      .attr('fill', function (d, i) {
        return eachPlotSet[nameIndexMap[i]].color
      })
      .attr('seriesName', function (d, i) {
        return nameIndexMap[i]
      })
      .attr('seriesIndex', function (d, i) {
        return i
      })


    this.bars = this.barSeries.selectAll('rect')
      .data(function (d) {
        return d
      })
      .enter().append('rect')
      .attr('x', function (d, i) {
        return self.xScale(self.opts.xAxisArr[i])
      })
      .attr('fill', function (d, i) {
        const srName = select(this.parentNode).attr('seriesName')
        return eachPlotSet[srName].colorArr && eachPlotSet[srName].colorArr[i]
      })
      .attr('y', this.opts.chart.chartHeight)
      .attr('width', this.xScale.bandwidth())
      .attr('height', 0)
      .on('mousemove', function (d, i) {
        self.opts.chart.tooltip && self.opts.chart.tooltip.hover(d3Event.pageX, d3Event.pageY, {
          data: {
            val: self.opts.barData[i],
            ind: i
          }
        })
      })
      .on('mouseout', function (d) {
        self.opts.chart.tooltip && self.opts.chart.tooltip.hide()
      })

    for (const name in this.opts.events) {
      const fn = this.opts.events[name]
      self.bars.on(name, function () {
        fn.apply(self.opts.chart, arguments)
      })
    }

  }

  // Update happens when the chart is resized
  update () {
    const self = this
    if (this.opts.barType === constants.STACKED_BAR) {
      this.bars
        .attr('y', function (d) {
          return self.yScale(d[1])
        })
        .attr('height', function (d) {
          return self.yScale(d[0]) - self.yScale(d[1])
        })
        .attr('x', function (d, i) {
          return self.xScale(self.opts.xAxisArr[i])
        })
        .attr('width', self.xScale.bandwidth())
    } else {
      this.bars
        .attr('x', function (d, i) {
          const xVal = self.xScale(self.opts.xAxisArr[i]) + self.xScale.bandwidth() / self.opts.seriesLength * select(this.parentNode).attr('seriesIndex')
          return xVal
        })
        .attr('width', self.xScale.bandwidth() / self.opts.seriesLength)
        .attr('y', function (d) {
          return self.yScale(d[1] - d[0])
        })
        .attr('height', function (d) {
          return self.yScale(0) - self.yScale(d[1] - d[0])
        })
    }
  }

  showHide (showFlag) {
    showFlag = !!showFlag
    this.barSeries.classed('vc-hidden', !showFlag)
    this.opts.visible = showFlag
  }

  // Redraw is called when series is toggled from Legends
  redraw () {
    const eachPlotSet = this.opts.chart.options.plotSet
    // Modify barOrder arr based on visibleSeries
    this.opts.barOrderIndex = this.opts.barOrderMembers.filter(function (ele) {
      return (eachPlotSet[ele.name].visible || false)
    })
      .map(function (ele) {
        return eachPlotSet[ele.name].dataIndex
      })

    // Remove all bar series
    this.barSeries && this.barSeries.remove()
    // draw with new barOrderMembers
    this.draw()
  }

  remove () {
    this.barSeries && this.barSeries.remove()
    this.bars = null
    this.opts = null
  }

}

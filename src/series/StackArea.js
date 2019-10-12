import ChartComponent from '@/charts/ChartComponent'
import constants from '@/constants'
import {
  area as d3Area, stack as d3Stack,
  stackOrderNone as d3StackOrderNone, stackOffsetNone as d3StackOffsetNone
} from 'd3-shape'
import {getObject} from '@/utils'

export default class StackArea extends ChartComponent {
  constructor (opts) {
    super()
    this.opts = Object.assign({
      className: '',
      plotAxis: [constants.DIR_LEFT, constants.DIR_BOTTOM],
      xAxisTarget: '',
      stackData: null,
      stackOrderMembers: {},
      visible: true
    }, opts)

    const self = this
    const eachPlotSet = this.opts.chart.options.plotSet
    // Define in what order, Stack series needs to be ploted
    this.opts.stackOrderIndex = this.opts.stackOrderMembers.filter(function (ele) {
      return eachPlotSet[ele.name].visible || false
    })
      .map(function (ele) {
        return eachPlotSet[ele.name].dataIndex
      })


    // Find x and y axis based on plotAxis
    let x = getObject(this.opts, 'chart.xAxis.scale')
    if (this.opts.plotAxis.indexOf(constants.DIR_TOP) > -1) {
      x = getObject(this.opts, 'chart.xAxis2.scale')
    }

    let y = getObject(this.opts, 'chart.yAxis.scale')
    if (this.opts.plotAxis.indexOf(constants.DIR_RIGHT) > -1) {
      y = getObject(this.opts, 'chart.yAxis2.scale')
    }

    this.opts.d3Stack = d3Stack()

    this.area = d3Area()
      .x(function (d, i) {
        return x(d.data[self.opts.xAxisTarget])
      })
      .y0(function (d) {
        return y(d[0]) // Indicates where to start along YAxis
      })
      .y1(function (d) {
        return y(d[1]) // Indicates where to end along YAxis
      })

  }

  draw () {
    const self = this
    const eachPlotSet = this.opts.chart.options.plotSet

    this.opts.d3Stack.keys(this.opts.stackOrderIndex) // specify the stack series names in array format
    this.opts.d3Stack.order(d3StackOrderNone) // use the given series order.
    this.opts.d3Stack.offset(d3StackOffsetNone) // apply a zero baseline on start

    // Show stack plot for only series which are visible
    const stackVisibleOrder = this.opts.stackOrderMembers.filter(function (ele) {
      return (eachPlotSet[ele.name].visible || false)
    })

    this.stackLayer = this.opts.chart.graphZone.selectAll('.vc-stack-' + this.opts.className)
      .data(this.opts.d3Stack(this.opts.stackData))
      .enter()
      .append('g')
      .attr('class', 'vc-stack-plot vc-stack-' + this.opts.className)

    const clipElement = this.opts.chart.$container.find('svg clipPath')

    // PLot stackLayer based on each series visiblity
    this.stackLayer.append('path')
      .attr('clip-path', 'url(#' + clipElement.attr('id') + ')') // display graphZone of same size as clip-path defined
      .attr('class', function (d) {
        const stackMember = stackVisibleOrder[self.opts.stackOrderIndex.indexOf(d.key)] || {
          name: ''
        }
        return 'vc-stack vc-stack-' + stackMember.name
      })
      .style('fill', function (d) {
        const stackMember = stackVisibleOrder[self.opts.stackOrderIndex.indexOf(d.key)] || {
          name: ''
        }
        return eachPlotSet[stackMember.name].color
      })
      .attr('d', this.area)

  }
  
  // Update stackLayer based on chart resize
  update () {
    this.stackLayer && this.stackLayer.select('path').attr('d', this.area)
  }
  
  redraw () {
    const eachPlotSet = this.opts.chart.options.plotSet
    // Modify stackOrder arr based on visibleSeries
    this.opts.stackOrderIndex = this.opts.stackOrderMembers.filter(function (ele) {
      return (eachPlotSet[ele.name].visible || false)
    })
      .map(function (ele) {
        return eachPlotSet[ele.name].dataIndex
      })

    // Remove all stack series
    this.stackLayer && this.stackLayer.remove()
    // draw with new stackOrderMembers
    this.draw()
  }
  
  showHide (showFlag) {
    showFlag = !!showFlag
    this.stackLayer.classed('vc-hidden', !showFlag)
    this.opts.visible = showFlag
  }
  
  remove () {
    //  this.stackAreaPath.remove();
    this.stackLayer && this.stackLayer.remove()
    this.opts.d3Stack = null
    this.area = null
    this.opts = null
  }
}
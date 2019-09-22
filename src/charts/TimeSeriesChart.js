import {getObject, isObject} from '@/utils'
import {Chart} from '@/charts/Chart'
import Axis from '@/axis'
import {addDefaultTSOptions} from '@/helpers'
import constants from '@/constants'

export class TimeSeriesChart extends Chart {
  constructor (container, opts) {
    super(container, opts)
    this.startTime = new Date()
    if (isObject(this.dataParser)) {
      Object.assign(this.options, this.dataParser.dataExecutor())
    }

    // Add default options to chart
    addDefaultTSOptions(this.options)

    // Initilize all chart components needed for timeSeriesChart on exact order based on each dependencies
    this.chartInitilize()

    setImmediate(() => this.draw())
  }

  chartInitilize () {
    let axisOptions
    const yRange = this.options.yRange
    const yRange2 = this.options.yRange2
    const timeInfo = this.options.timeInfo

    if (yRange) {
      axisOptions = getObject(this, 'options.yAxis.left')
      this.yAxis = new Axis({
        chart: this,
        position: 'y',
        orient: 'left',
        rangeScale: [this.chartHeight, 0],
        domainScale: yRange,
        ...axisOptions
      })
      this.chartComponentsArr.push(this.yAxis)
    }

    if (yRange2) {
      axisOptions = getObject(this, 'options.yAxis.right')
      this.yAxis2 = new Axis({
        chart: this,
        position: 'y',
        orient: 'right',
        rangeScale: [this.chartHeight, 0],
        domainScale: yRange2,
        ...axisOptions
      })
      // Register the component for draw, update, showHide and remove (chart API)
      this.chartComponentsArr.push(this.yAxis2)
    }

    if (timeInfo.timeRange) {
      axisOptions = getObject(this, 'options.xAxis.bottom')
      this.xAxis = new Axis({
        chart: this,
        position: 'x',
        orient: 'bottom',
        rangeScale: [0, this.chartWidth],
        domainScale: timeInfo.timeRange,
        ...axisOptions
      })
      this.chartComponentsArr.push(this.xAxis)
    }
  }

  draw () {
    console.log('TimeSeriesChart draw', this)
    super.draw()
    this.options.afterDraw.call(this)

    // Add Extra Buffer for max Y value and provide space to display all ticks in graphZone
    this.reScaleYAxis()

    this.chartResponsive()

    this.timeDiff = (new Date()
      .getTime() - this.startTime.getTime())
    this.options.onComplete.call(this, this.timeDiff)
  }

  // Find next possible tick to display max Y value and adjust margin to show all tick labels completely
  reScaleYAxis (axisSpecifier) {

    let tickValArr
    let diffVal
    let rangeVal
    let yMax
    let applyY1Axis = true
    let applyY2Axis = true

    if (axisSpecifier === constants.DIR_LEFT) {
      applyY2Axis = false
    }

    if (axisSpecifier === constants.DIR_RIGHT) {
      applyY1Axis = false
    }

    // If Max value is provided in options, Dont compute next possible tick.
    yMax = getObject(this.options, 'yAxis.left.max')
    if (this.options.yRange && applyY1Axis && !Number.isFinite(yMax)) {
      tickValArr = this.yAxis.tickValues
      // If tickValArr contains values
      if (tickValArr.length > 1) {
        // Find difference of last and last previous tick values of Y Axis
        diffVal = tickValArr[0] - tickValArr[1]
        // New range is increased by above difference
        rangeVal = tickValArr[0] + diffVal

        // Modify new max range for the graph
        this.options.yRange[1] = rangeVal

        // Update Y Axis with new domainScale
        this.yAxis.modifyAxisProps({
          domainScale: this.options.yRange
        })
      }
    }

    yMax = getObject(this.options, 'yAxis.right.max')
    if (this.options.yRange2 && applyY2Axis && !Number.isFinite(yMax)) {
      tickValArr = this.yAxis2.tickValues

      if (tickValArr.length > 1) {
        diffVal = tickValArr[0] - tickValArr[1]
        rangeVal = tickValArr[0] + diffVal

        this.options.yRange2[1] = rangeVal

        // Update Y Axis with new domainScale
        this.yAxis2.modifyAxisProps({
          domainScale: this.options.yRange2
        })
      }
    }

    // Adjusts Y axis width based on max text length displayed
    const reScaleAxis = {}
    let requiredWidth = 0

    if (this.options.yRange) {
      reScaleAxis[constants.DIR_LEFT] = {}
      reScaleAxis[constants.DIR_LEFT].class = '.vc-axis-left'
      reScaleAxis[constants.DIR_LEFT].maxText = ''
    }

    if (this.options.yRange2) {
      reScaleAxis[constants.DIR_RIGHT] = {}
      reScaleAxis[constants.DIR_RIGHT].class = '.vc-axis-right'
      reScaleAxis[constants.DIR_RIGHT].maxText = ''
    }

    // Creates dummy svg to add Max length tick values and check its required width in chart
    const dummyG = this.svg.append('g')
      .attr('class', 'vc-axis')

    for (const axis in reScaleAxis) {
      const ticksArr = this.$container.find('svg ' + reScaleAxis[axis].class).find('text')
      ticksArr.each(function (i) {
        const tickHtml = $(ticksArr[i])
          .text() || ''
        if (tickHtml.length > reScaleAxis[axis].maxText.length) {
          reScaleAxis[axis].maxText = tickHtml
        }
      })


      dummyG.selectAll('.dummyText')
        .data([reScaleAxis[axis].maxText])
        .enter()
        .append('text')
        .text(String)
        .each(function (d, i) {
          // Compute requiredWidth for the Max text
          requiredWidth = this.getComputedTextLength()
          $(this).remove() // remove it just after displaying
        })

      // Update respective margin to fit in ticks text
      this.margin[axis] = Math.round(requiredWidth) + constants.Y_AXIS_SPACE

    }
    dummyG.remove()

    this.chartWidth = (this.chartFullSpace.width - this.margin.left - this.margin.right)
    this.update()
  }

}

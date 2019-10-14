import ChartComponent from '@/charts/ChartComponent'
import constants from '@/constants'
import {emptyFn, isFunction, throttle} from '@/utils'
import {select} from '@/d3Importer'

export default class TimeSeriesLegend extends ChartComponent {
  constructor (opts) {
    super()
    this.opts = Object.assign({
      disableSeriesToggle: false
    }, opts)

    const self = this
    this.opts.maxWidthLegend = 0
    this.opts.spacingNames = []


    const graphOptions = this.opts.chart.options
    const eachPlotSet = graphOptions.plotSet
    const eachPlotNames = Object.keys(eachPlotSet)
    let leng = 0
    const textWidth = []
    let maxLenLegend

    const dummyG = this.opts.chart.svg.append('g')
    // Add all name on DOM to calculate how much space is needed for every names
    dummyG.selectAll('.dummyText')
      .data(eachPlotNames)
      .enter()
      .append('text')
      .attr('class', 'vc-legend-label')
      .style('font-size', '11px')
      .style('font-weight', '500')
      .text(function (d) {
        return (self.opts.legendPrefix + (eachPlotSet[d] ? eachPlotSet[d].name : ''))
      })
      .each(function (d, i) {
        // Find size required for each legend on screen
        const thisWidth = Math.round(this.getComputedTextLength())
        if (thisWidth > self.opts.maxWidthLegend) {
          self.opts.maxWidthLegend = thisWidth
          maxLenLegend = d
        }
        textWidth.push(thisWidth)
        $(this).remove() // remove them just after displaying them
      })

    // Fill the spacing Arr having position for each legends on horizontal order
    textWidth.forEach(function (ele) {
      leng += ele
      self.opts.spacingNames.push(leng)
    })

    // Make maxTextLength Higher to show full text for pie legends
    this.opts.maxTextLength = maxLenLegend.length + 100

    dummyG.remove()
  }

  draw () {

    const self = this
    const graphOptions = this.opts.chart.options
    let toggleSeries = emptyFn
    const eachPlotSet = graphOptions.plotSet
    const eachPlotNames = Object.keys(eachPlotSet)
    const maxYLen = Math.floor(this.opts.chart.chartFullSpace.height * 90 / 100)
    let fullYLen = eachPlotNames.length * constants.LEGEND_Y_SPACE
    fullYLen = fullYLen > maxYLen ? maxYLen : fullYLen
    const divWidth = this.opts.maxWidthLegend + constants.LEGEND_SHOW_WIDTH

    this.opts.legendDiv = {
      width: divWidth,
      height: fullYLen
    }


    // Perfom Series show and hide on click of each legend
    if (!this.opts.disableSeriesToggle) {

      toggleSeries = function (seriesName) {
        let visibleSeries = 0
        let plotName

        if (eachPlotSet[seriesName] && eachPlotSet[seriesName].visible) {
          // If the series is getting disabled and its only one series visible, Dont disable it.
          for (plotName in eachPlotSet) {
            eachPlotSet[plotName].visible && visibleSeries++
          }

          if (visibleSeries <= 1) {
            return
          }
        }

        let applyYAxis

        // plotSeries that is getting toggled
        let currentPlotInfo

        if (eachPlotSet && eachPlotSet[seriesName]) {
          currentPlotInfo = eachPlotSet
        }


        if (currentPlotInfo) {

          currentPlotInfo[seriesName].visible = !currentPlotInfo[seriesName].visible

          if (currentPlotInfo[seriesName].plotAxis[0] === constants.DIR_LEFT) {

            // This will compute max and min value for YAxis based on series which are visible
            Object.assign(self.opts.chart.options, self.opts.chart.dataParser.constructYAxisInfo())

            applyYAxis = constants.DIR_LEFT
            // Update Y Axis with new domainScale
            self.opts.chart.yAxis.modifyAxisProps({
              domainScale: graphOptions.yRange
            })

          } else if (currentPlotInfo[seriesName].plotAxis[0] === constants.DIR_RIGHT) {

            // This will compute max and min value for YAxis based on series which are visible
            Object.assign(self.opts.chart.options, self.opts.chart.dataParser.constructYAxisInfo())

            applyYAxis = constants.DIR_RIGHT
            // Update Y Axis with new domainScale
            self.opts.chart.yAxis2.modifyAxisProps({
              domainScale: graphOptions.yRange2
            })
          }

          // Adjust YAxis tick value display based on yAxis change
          self.opts.chart.reScaleYAxis(applyYAxis)

          // Redraw all plot components based on yAxis change
          self.opts.chart.series.redraw()

          const sFlag = currentPlotInfo[seriesName].visible

          select(this)
            .classed('vc-fill-hidden', !sFlag)

          isFunction(self.opts.onLegendChange) && self.opts.onLegendChange.call(self.opts.chart, currentPlotInfo[seriesName], sFlag)
        }

      }
    }

    this.legendDisplay = this.opts.chart.svg.append('g')
      .attr('class', 'vc-legend-group')
      .attr('transform', 'translate(15, 5)')

    this.legendBlock = this.legendDisplay
      .selectAll('g')
      .data(eachPlotNames)
      .enter()
      .append('g')
      .attr('transform', function (d, i) {
        // Provide horizontal position based on order
        if (self.opts.position === constants.DIR_TOP) {
          const x = self.opts.spacingNames[i - 1] ? (self.opts.spacingNames[i - 1] + constants.LEGEND_SPACE * i) : 0
          return 'translate(' + x + ', 0)'
        } else if (self.opts.position === constants.DIR_RIGHT) {
          // Provide vertical position based on order
          const y = i * constants.LEGEND_Y_SPACE
          return 'translate(0 ,' + y + ')'
        }
      })
      .attr('class', function (d) {
        return 'vc-legend vc-legend-' + d
      })
      .classed('vc-fill-hidden', function (d, i) {
        return (eachPlotSet[d] ? !eachPlotSet[d].visible : false)
      })

    // Listen to click event only for timeseries legends
    this.legendBlock
      .on('click', throttle(toggleSeries, 300, { // Sometimes toggle event is called multiple times, hence block by adding throttle
        trailing: false
      }))


    this.legendBlock.append('text')
      .attr('class', 'vc-legend-label')
      .attr('x', constants.LEGEND_TEXT_X)
      .attr('y', constants.LEGEND_TEXT_Y)
      .style('font-size', '11px')
      .style('font-weight', '500')
      .text(function (d) {
        let legName = (self.opts.legendPrefix + (eachPlotSet[d] ? eachPlotSet[d].name : ''))
        if (self.opts.isPieLegend && self.opts.maxTextLength < legName.length) {
          legName = legName.substring(0, self.opts.maxTextLength) + '...'
        }
        return legName
      })


    this.legendBlock.append('rect')
      .attr('class', 'vc-legend-box')
      .attr('x', 0)
      .attr('width', constants.LEGEND_RECT_SIZE)
      .attr('height', constants.LEGEND_RECT_SIZE)
      .style('stroke', function (d) {
        return eachPlotSet[d] ? eachPlotSet[d].color : ''
      })
      .style('stroke-width', '2px')
      .style('fill', function (d) {
        return eachPlotSet[d] ? eachPlotSet[d].color : ''
      })

    this.opts.horizontalLegendWidth = Math.round(this.legendDisplay.node()
      .getBBox()
      .width)

    this.update()

  }

  update () {
    // Display in vertical order
    const self = this
    const $legendText = this.opts.chart.$container.find('svg .vc-legend-label')
    let basicWidth = this.opts.maxWidthLegend + this.opts.chart.margin.left + this.opts.chart.margin.right

    if (this.opts.position === constants.DIR_RIGHT) {
      // Display legends vertically on right side
      basicWidth += constants.LEGEND_SHOW_WIDTH
      let legendPos = constants.VERT_POS_LEGEND
      if (this.opts.maxWidthLegend === constants.LEGEND_MAX_WIDTH) {
        legendPos = constants.VERT_POS_LEGEND + 10
      }
      let legendXPos = Math.floor(this.opts.chart.chartWidth * legendPos / 100)
      let xBuff = this.opts.chart.chartWidth - legendXPos
      xBuff = Math.floor((xBuff - this.opts.legendDiv.width) / 2)
      legendXPos += xBuff

      const legendYPos = Math.floor((this.opts.chart.chartFullSpace.height - this.opts.legendDiv.height) / 2)

      this.legendDisplay
        .attr('transform', 'translate(' + legendXPos + ',' + legendYPos + ')')

    }

    const d3Svg = this.opts.chart.svg

    if (this.opts.position === constants.DIR_TOP) {
      basicWidth = constants.LEGEND_SPACE * self.opts.spacingNames.length + constants.DATA_INTERVAL_BUFFER_X

      if ((this.opts.horizontalLegendWidth + constants.LEGEND_RIGHT_BUFFER) > self.opts.chart.chartWidth) {
        // Hide only text and display Color box with tooltip
        d3Svg.selectAll('.vc-legend')
          .each(function () {
            const seriesName = select(this).select('text').html()
            select(this).select('rect')
              .html('')
              .append('svg:title')
              .text(seriesName)
          })
        $legendText.hide()

        if (self.opts.chart.chartWidth < basicWidth) {
          // display box vertically
          this.legendBlock
            .attr('transform', function (d, i) {
              const y = i * constants.LEGEND_Y_SPACE
              return 'translate(0,' + y + ')'
            })
        } else {
          // Display only box on top
          this.legendBlock
            .attr('transform', function (d, i) {
              const x = constants.LEGEND_SPACE * i
              return 'translate(' + x + ', 0)'
            })
        }
      } else {
        // Display legend on top with both text, box and remove tooltip
        this.legendBlock
          .attr('transform', function (d, i) {
            const x = self.opts.spacingNames[i - 1] ? (self.opts.spacingNames[i - 1] + constants.LEGEND_SPACE * i) : 0
            return 'translate(' + x + ', 0)'
          })

        if (!this.opts.isPieLegend) {
          d3Svg.selectAll('.vc-legend')
            .each(function () {
              select(this).select('rect')
                .html('')
            })
          $legendText.show()
        }
      }
    }

  }

  showHide (showFlag) {
    showFlag = !!showFlag
    this.opts.visible = showFlag
    this.legendDisplay && this.legendDisplay.classed('vc-hidden', !showFlag)
  }

  remove () {
    this.legendBlock && this.legendBlock.remove()
    this.legendDisplay && this.legendDisplay.remove()
    this.opts = null
  }
}
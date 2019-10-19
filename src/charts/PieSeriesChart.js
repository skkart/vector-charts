import {getObject, isObject} from '@/utils'
import Chart from '@/charts/Chart'
import {addDefaultPSOptions} from '@/helpers'
import Tooltip from '@/tooltip/BasicTooltip'
import BasicPSParser from '@/data-parser/BasicPSParser'
import ChartDataParser from '@/data-parser/ChartDataParser'
import PieSeries from '@/series/PieSeries'
import PieSeriesLegend from '@/legend/PieSeriesLegend'
import TimeSeriesLegend from '@/legend/TimeSeriesLegend'

export default class PieSeriesChart extends Chart {
  constructor (container, opts) {
    opts.startTime = new Date()

    // Create the dataParser is not passed
    if (!opts.dataParser) {
      opts.dataParser = new BasicPSParser(opts)
    }
    // Check the dataParser exists and its instanceof ChartDataParser
    if (!(opts.dataParser instanceof ChartDataParser)) {
      throw new Error("DataParser in options dosen't have implementation of ChartDataParser")
    }

    // Call Parent Impl
    super(container, opts)

    // Add default options to chart
    addDefaultPSOptions(this.options)

    // Run the dataParser for given JSON data
    if (isObject(this.dataParser)) {
      Object.assign(this.options, this.dataParser.dataExecutor())
    }

    // Initilize all chart components needed for timeSeriesChart on exact order based on each dependencies
    this.chartInitilize()

    setImmediate(() => this.draw())
  }

  chartInitilize () {

    const tooltipOpts = getObject(this, 'options.tooltip')
    if (tooltipOpts.visible) {
      this.tooltip = new Tooltip({
        chart: this,
        ...tooltipOpts
      })
      this.chartComponentsArr.push(this.tooltip)
    }

    if (this.options.series) {
      this.series = new PieSeries({
        chart: this
      })
      // Register the component for draw, update, showHide and remove
      this.chartComponentsArr.push(this.series)
    }

    if (this.options.legend.visible) {
      // IF browser supports foreignObject use pieLegends API
      if (document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#Extensibility', '1.1')) {
        this.legends = new PieSeriesLegend({
          chart: this,
          legendPrefix: this.options.legend.legendPrefix,
          position: this.options.legend.position
        })
      } else {
        this.legends = new TimeSeriesLegend({
          chart: this,
          legendPrefix: this.options.legend.legendPrefix,
          position: this.options.legend.position
        })
      }

      this.chartComponentsArr.push(this.legends)
    }
  }

  draw () {
    console.log('PieSeriesChart draw', this)
    super.draw()
    this.options.afterDraw.call(this)

    this.chartResponsive()

    this.timeDiff = (new Date()
      .getTime() - this.options.startTime.getTime())
    this.options.onComplete.call(this, this.timeDiff)
  }

}

import ChartDataParser from '@/data-parser/ChartDataParser'
import {hierarchy, partition} from '@/d3Importer'
import {getObject} from '@/utils'
import constants from '@/constants'


export default class BasicSBParser extends ChartDataParser {
  constructor (opts) {
    super(opts)
    this.opts = opts
  }

  dataExecutor () {
    // Order in which the DataProcessor APIs needs to be executed
    try {

      this.dataOptions = {}
      this.opts.data && (this.dataOptions.data = this.opts.data)
      this.opts.series && (this.dataOptions.series = this.opts.series)

      Object.assign(this.dataOptions, this.constructPlotInfo())

      return this.dataOptions

    } catch (err) {
      console.log('Error encountered while sunburst JSON parsing :', err)
      this.opts.onError(err)
      throw new Error('Invalid JSON received - Error on sunburst JSON parsing')
    }
  }


  constructPlotInfo () {

    // take the root hierarchy and form the sum based on size/value
    const jsonData = this.opts.data
    if (Object.keys(jsonData).length) {
      const root = hierarchy(jsonData)
      const partitionData = partition()

      const dataParserApproach = getObject(this.opts, 'series.sunburst.dataApproach', constants.DATA_PARSE_DEFAULT_TYPE)
      const valueModel = getObject(this.opts, 'series.sunburst.dataValueAttr', 'value')

      // Check if it is top to bottom or bottom to top approach
      if (dataParserApproach === constants.DATA_PARSE_DEFAULT_TYPE) {
        root.sum(d => {
          return parseFloat(d.data[valueModel])
        })
      } else {
        root.each(d => {
          // for first depth attach the value to the main object after hirarchy
          // parse data
          const eachObjValue = parseFloat(d.data[valueModel])
          if (d.depth === 0) {
            d.value = eachObjValue // calculated based on parent value is  assigned to value key
          }
          let leafSum = 0
          if (d.children) {
            d.children.forEach(chData => {
              leafSum += parseFloat(chData.data[valueModel]) || 0
            })
          }
          d.leafSum = leafSum
          // Calculate child nodes value by formula (parentValue/ sum of all leafs value attached on parent) * current value
          if (d.parent) {
            d.value = d.parent.leafSum ? (d.parent.value / d.parent.leafSum) * eachObjValue : 0// EX: in ex data 10/7 * 3 for bangalur
          }
        })
      }
      partitionData(root)
      return {
        plotSet: [],
        chartData: root,
      }
    } else {
      throw new Error('Invalid JSON received - Error on sunburst JSON parsing')
    }

  }
}

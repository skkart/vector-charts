import { line } from 'd3-shape'
import { scaleTime, scaleLinear } from 'd3-scale'
import { axisBottom, axisLeft } from 'd3-axis'
import { timeParse, isoFormat } from 'd3-time-format'
import { select } from 'd3-selection'
import { extent, max, min } from 'd3-array'

export default {
  line: line,
  scaleTime: scaleTime,
  scaleLinear: scaleLinear,
  axisBottom: axisBottom,
  axisLeft: axisLeft,
  timeParse: timeParse,
  isoFormat: isoFormat,
  select: select,
  extent: extent,
  min: min,
  max: max,
}

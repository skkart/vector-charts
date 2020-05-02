import ChartComponent from '@/charts/ChartComponent'
import {elementOffset, isFunction} from '@/utils'

export default class BasicTooltip extends ChartComponent {
  constructor (opts) {
    super()
    this.opts = Object.assign({
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
    this.toolTipDiv = this.opts && this.opts.chart.container
      .append('div')
      .attr('class', 'vc-tooltip-display ' + this.opts.className)
  }

  hover (x, y, displayData, excludeToolTipDiv) {
    this.showHide(true)
    // This will be called by series -- bar / pie
    const box = elementOffset(this.toolTipDiv)
    const rootPos = elementOffset(this.opts.chart.container)
    let xpos = Math.round(x - rootPos.left)
    let ypos = Math.round(y - rootPos.top)

    if (!excludeToolTipDiv) {
      // Consider toolTip offset for position
      xpos = Math.round(xpos - (box.width / 2))
      ypos = Math.round(ypos - (box.height / 2))
    }


    this.toolTipDiv
      .style('left', xpos + 'px')
      .style('top', ypos + 'px')
      .style('display', 'inline-block')
      .html(this.opts.format.call(this.opts.chart, displayData.data)) // Used format.call(), so that external fun can have access of chart Instance
  }

  showHide (showFlag) {
    showFlag = !!showFlag
    this.toolTipDiv && this.toolTipDiv.classed('vc-hidden', !showFlag)
  }

  remove () {
    this.$toolTipDiv && this.$toolTipDiv.remove()
    this.opts = null
  }
}

import ChartComponent from '@/charts/ChartComponent'
import {isFunction} from '@/utils'

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
    this.$toolTipDiv = $('<div></div>').addClass('ac-tooltip-display ' + this.opts.className)
    this.opts.chart.$container
      .append(this.$toolTipDiv)
  }

  hover (x, y, displayData, excludeToolTipDiv) {
    // This will be called by series -- bar / pie
    var rootPos = this.opts.chart.$container.offset()
    var xpos = Math.round(x - rootPos.left)
    var ypos = Math.round(y - rootPos.top)

    if (!excludeToolTipDiv) {
      // Consider toolTip offset for position
      xpos = Math.round(xpos - (this.$toolTipDiv.width() / 2))
      ypos = Math.round(ypos - (this.$toolTipDiv.height() / 2))
    }

    this.$toolTipDiv
      .css({
        left: xpos + 'px',
        top: ypos + 'px',
        display: 'inline-block'
      })
      .html(this.opts.format.call(this.opts.chart, displayData.data)) // Used format.call(), so that external fun can have access of chart Instance
  }

  showHide (showFlag) {
    showFlag = !!showFlag

    if (showFlag) {
      this.$toolTipDiv && this.$toolTipDiv.show()
    } else {
      this.$toolTipDiv && this.$toolTipDiv.hide()
    }
  }

  remove () {
    this.$toolTipDiv && this.$toolTipDiv.remove()
    this.opts = null
  }
}

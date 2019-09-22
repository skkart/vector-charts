export default class ChartComponent {
  constructor (opts) {
    // All the chart components needs to implement chart APIs - draw, update, showHide, remove
  }

  draw () {
    // All the chart components needs to implement method 'draw' to plot it on svg
    console.log('ChartComponent draw defaults ', this)
  }

  update () {
    // All the chart components needs to implement method 'update' to scale upon width/height on chart resize
    console.log('ChartComponent update defaults ', this)
  }

  showHide (showFlag) {
    // All the chart components needs to implement method 'showHide' to show/hide the components based on input flag
    console.log('ChartComponent showHide defaults ', this)
  }

  remove () {
    // All the chart components needs to implement method 'remove' to delete the components from svg and clear its instance
    console.log('ChartComponent remove defaults ', this)
  }

  show () {
    // Added show feature to all the chartComponent bypassing showHide(true)
    this.showHide(true)
  }

  hide () {
    // Adding hide feature to all the chartComponent
    this.showHide(false)
  }
}

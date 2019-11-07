const config = require('./webpack.config')
const path = require('path')

module.exports = {
  ...config,
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'), // `/dist` is the destination
    filename: '[name].js',
    library: 'vc',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    libraryExport: 'default'
  }
}


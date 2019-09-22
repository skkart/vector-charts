const path = require('path')
// const webpack = require('webpack')

const SRC_DIR = path.resolve(__dirname, './src/')
var config = {
  mode: 'production',
  context: SRC_DIR, // `__dirname` is root of project and `/src` is source
  entry: {
    'vector-charts': path.resolve(SRC_DIR, 'index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'), // `/dist` is the destination
    filename: '[name].min.js',
    library: 'vc',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    libraryExport: 'default'
  },
  module: {
    rules: [
      {
        test: /\.js$/, // rule for .js files
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'] // apply this loader for js files
      }
    ]
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': path.join(__dirname, 'src'),
    }
  },
  stats: {
    colors: true
  },
  devtool: '#source-map'
}

module.exports = config

const path = require('path')
const SRC_DIR = path.resolve(__dirname, './src/')
const DIST_DIR = path.resolve(__dirname, './dist/')
const EX_DIR = path.resolve(__dirname, './examples/')
const CopyPlugin = require('copy-webpack-plugin')


var config = {
  mode: 'production',
  context: SRC_DIR, // `__dirname` is root of project and `/src` is source
  entry: {
    'vector-charts': path.resolve(SRC_DIR, 'index.js'),
    'vector-charts-lazy': path.resolve(SRC_DIR, 'indexLazy.js'),
  },
  output: {
    path: DIST_DIR, // `/dist` is the destination
    filename: '[name].min.js',
    library: 'vc',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    libraryExport: 'default'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/, // rule for .js files
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'] // apply this loader for js files
      }
    ]
  },
  plugins: [
    new CopyPlugin([
      { from: path.resolve(SRC_DIR, 'vector-charts.css'), to: DIST_DIR },
      { from: DIST_DIR, to: EX_DIR}
    ]),
  ],
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': path.join(__dirname, 'src'),
    }
  },
  stats: {
    colors: true
  }
}

module.exports = config

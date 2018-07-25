const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const webpackbaseConf = require('./webpack.base.conf.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const devConfig = {
  entry: {
    main: './views/main.js',
    vendors: ['vue', 'vue-router']
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js',
    publicPath: '',
    chunkFilename: '[name].chunk.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './views/index.html'
    }),
    new ExtractTextPlugin('style.css')
  ],
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    public: 'localhost:8020'
  }
}

module.exports = webpackMerge(webpackbaseConf, devConfig)

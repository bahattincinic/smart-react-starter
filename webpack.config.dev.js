var path = require('path');
var webpack = require('webpack');

var commonConfig = require('./webpack.config.common');


const mainPath = path.join(__dirname, './src');


module.exports = {
  devtool: "#inline-source-map",

  entry: {
    app: [
      'webpack-hot-middleware/client',
      'babel-polyfill',
      './src/index'
    ]
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },

  plugins: commonConfig.plugins.concat([
    new webpack.HotModuleReplacementPlugin()
  ]),

  resolve: commonConfig.resolve,

  module: {
    rules: commonConfig.module.rules
  }
};

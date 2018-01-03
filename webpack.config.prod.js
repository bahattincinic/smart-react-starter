var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var commonConfig = require('./webpack.config.common');


const srcPath = path.join(__dirname, './src');


module.exports = {
  devtool: 'source-map',
  entry: [
    'babel-polyfill',
    './src/index'
  ],

  output: {
    path: path.join(__dirname, 'dist/public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },

  plugins: commonConfig.plugins.concat([
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
        'API_DOMAIN': JSON.stringify(
          process.env.API_DOMAIN || '//aut-api.smarteducation.net/api/v1'
        ),
        'SCORE_API_DOMAIN': JSON.stringify(
          process.env.SCORE_API_DOMAIN || '//score.smarteducation.net/api/v1'
        )
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ]),

  resolve: commonConfig.resolve,

  module: {
    rules: commonConfig.module.rules
  }
};

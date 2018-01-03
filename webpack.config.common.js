var path = require('path');
var webpack = require('webpack');


const mainPath = path.join(__dirname, './src');
const testPath = path.join(__dirname, './test');


module.exports = {
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      src: mainPath,
      test: testPath,
      ui: path.resolve(mainPath, 'ui'),
      apps: path.resolve(mainPath, 'ui/apps'),
      modules: path.resolve(mainPath, 'ui/modules'),
      data: path.resolve(mainPath, 'data')
    },
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        use: 'eslint-loader',
        enforce: "pre",
        exclude: /node_modules/
      },
      {
        test: /\.js?/,
        use: 'babel-loader?cacheDirectory=true',
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'less-loader'
        ]
      },
      {
        test: /\.json(\?v=\d+\.\d+\.\d+)?$/,
        use: 'file-loader'
      },
      {
        test: /\.mp3$/,
        use: 'file-loader'
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: "file-loader"
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$/i,
        use: "file-loader"
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },

  plugins: []
};

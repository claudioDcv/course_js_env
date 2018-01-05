const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appPath = './src';

module.exports = {
  entry: `${appPath}/app.js`,
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },

  module: {
    rules: [{
      test: /\.scss$/,
      use: [{
        loader: "style-loader" // creates style nodes from JS strings
      }, {
        loader: "css-loader" // translates CSS into CommonJS
      }, {
        loader: "sass-loader" // compiles Sass to CSS
      }]
    }]
  },

  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    port: 3000
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Dev',
      filename: 'index.html',
      template: './template/index.html',
      cache: false
    })
  ]

};

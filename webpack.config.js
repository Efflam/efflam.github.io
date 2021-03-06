
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
var postcssImport = require('postcss-import')
var customMedia = require('postcss-custom-media')
var customProperties = require('postcss-custom-properties')
var calc = require('postcss-calc')
var webpack = require('webpack')
var paths = [ '/' ]
var data = require('./src/data')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname,
    libraryTarget: 'umd'
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new StaticSiteGeneratorPlugin('bundle.js', paths, data)
  ],
}


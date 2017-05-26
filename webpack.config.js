'use strict'

const HTMLPlugin = require('html-webpack-plugin')
const ExtractPlugin = require('extract-text-webpack-plugin')

const plugins = [
  new HTMLPlugin({template: `${__dirname}/app/index.html`}),
  new ExtractPlugin('bundle.css')
]

module.exports = {
  entry: `${__dirname}/app/entry.js`,
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/build`
  },
  plugins,
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node-modules/,
        use: 'babel-loader'
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.(eot|woff|ttf|svg).*/,
        use: 'url?limit=10000&name=font/[hash].[ext]'
      },
      {
        test: /\.scss$/,
        use: ExtractPlugin(
          {
            use: [
              {
                loader: 'css-loader',
                options: {sourceMap: true}
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true,
                  includePaths:[`${__dirname}/app/scss`]
                }
              }
            ]
          }
        )
      }
    ]
  }
}

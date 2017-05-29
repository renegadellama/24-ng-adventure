// 'use strict';
// 
// const HTMLPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// 
// const plugins = [
//   new HTMLPlugin({ template: `${__dirname}/app/index.html` }),
//   new ExtractTextPlugin('bundle.css'),
// ];
// 
// module.exports = {
//   entry: `${__dirname}/app/entry.js`,
//   output: {
//     filename: 'bundle.js',
//     path: `${__dirname}/build`,
//   },
//   plugins,
//   devtool: 'source-map',
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: 'babel-loader',
//       },
//       {
//         test: /\.html$/,
//         use: 'html-loader',
//       },
//       {
//         test: /\.(eot|woff|ttf|svg).*/,
//         use: 'url?limit=10000&name=font/[hash].[ext]',
//       },
//       {
//         test: /\.scss$/,
//         use: ExtractTextPlugin.extract(
//           {
//             use: [
//               {
//                 loader: 'css-loader',
//                 options: { sourceMap: true },
//               },
//               {
//                 loader: 'sass-loader',
//                 options: {
//                   sourceMap: true,
//                   includePaths: [`${__dirname}/app/scss/`],
//                 },
//               },
//             ],
//           }
//         ),
//       },
//     ],
//   },
// };


'use strict';

const ExtractText = require('extract-text-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');

module.exports = {
  entry: `${__dirname}/app/entry.js`,
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js',
  },
  plugins: [
    new HTMLPlugin({template: `${__dirname}/app/index.html`}),
    new ExtractText('bundle.css'),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: ExtractText.extract(['css-loader', 'sass-loader']),
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
};
// 
// 'use strict';
// 
// const HTMLPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// 
// const plugins = [
//   new HTMLPlugin({ template: `${__dirname}/app/index.html` }),
//   new ExtractTextPlugin('bundle.css'),
// ];
// 
// module.exports = {
//   entry: `${__dirname}/app/entry.js`,
//   output: {
//     filename: 'bundle.js',
//     path: `${__dirname}/build`,
//   },
//   plugins,
//   devtool: 'source-map',
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         loader: 'babel-loader',
//       },
//       {
//         test: /\.scss$/,
//         loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
//       },
//     ],
//   },
//   // module: {
//   //   rules: [
//   //     {
//   //       test: /\.js$/,
//   //       exclude: /node_modules/,
//   //       loader: 'babel-loader',
//   //     },
//   //     {
//   //       test: /\.html$/,
//   //       loader: 'html-loader',
//   //     },
//   //     {
//   //       test: /\.(eot|woff|ttf|svg).*/,
//   //       loader: 'url?limit=10000&name=font/[hash].[ext]',
//   //     },
//   //     {
//   //       test: /\.scss$/,
//   //       loader: ExtractTextPlugin.extract(
//   //         {
//   //           use: [
//   //             {
//   //               loader: 'css-loader',
//   //               options: { sourceMap: true },
//   //             },
//   //             {
//   //               loader: 'sass-loader',
//   //               options: {
//   //                 sourceMap: true,
//   //                 includePaths: [`${__dirname}/app/scss/`],
//   //               },
//   //             },
//   //           ],
//   //         }
//   //       ),
//   //     },
//   //   ],
//   // },
// };
const path = require('path');

var webpack = require('webpack');

module.exports = {
  entry: './public/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devtool: false,
  plugins: [new webpack.SourceMapDevToolPlugin({
    filename: "[file].map"
  })],
  mode: "development",
};
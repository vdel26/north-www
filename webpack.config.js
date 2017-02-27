var webpack = require('webpack')

module.exports = {
  entry: './scripts/_source/main.js',
  output: {
      path: './scripts/',
      filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        exclude: /node_modules\/(?!(autotrack|dom-utils))/,
        loader: 'babel-loader',
        query: { presets: ['es2015'] }
      }
    ]
  }
}
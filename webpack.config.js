const webpack = require('webpack')

module.exports = {
  entry: './dist/app.js',
  output: {
    path: __dirname + '/build',
    filename: './bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: './build',
    port: 3000
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['stage-0','es2015', 'react'],
          plugins: ["transform-class-properties"]
        }
      },
      {
        test: /\.json$/,
        exclude: /(node_modules)/,
        loader: 'json-loader'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=20000'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  }
}

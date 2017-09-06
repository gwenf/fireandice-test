var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-maps',
  context: __dirname + '/app',
  entry: [
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      include: path.join(__dirname, 'app')
    },

    {
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader' ]
    },

    {
      test: /\.scss$|\.sass$/,
      exclude: [/node_modules/],
      loader: ['css-loader?sourceMap','sass-loader?sourceMap']
    },

    { test: /\.png|jpg$/, loader: 'url-loader?name=images/[name].[ext]' },
    { test: /\.(svg|ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader: 'url-loader?name=fonts/[name].[ext]' }]
  }
};

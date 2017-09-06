var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-maps',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:4040',
    'webpack/hot/only-dev-server',
    './app/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  devServer: {
    // contentBase: path.join(__dirname, "dist"),
    historyApiFallback: true,
    hot: true,
    port: 4040
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
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
      test: /\.sass$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        },
        {
          loader: "sass-loader",
          options: {
            sourceMap: true,
            indentedSyntax: true
          }
        }
      ]
    },

    {
        test: /\.scss$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "sass-loader" // compiles Sass to CSS
        }]
    },


    { test: /\.png|jpg$/, loader: 'url-loader?name=images/[name].[ext]' },
    { test: /\.(svg|ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader: 'url-loader?name=fonts/[name].[ext]' }]
  }
};

var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './web/index.js',
  context: path.join(__dirname, '../src'),
  output: {
    filename: 'index.bundle.js',
    path: path.join(__dirname, '../bundles'),
    publicPath: '/'
  },
  resolve: {
    modules: [
      'node_modules',
      path.join(__dirname, '../src')
    ]
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'eslint-loader'
      }]
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader'
      }]
    }, {
      test: /\.scss$/,
      loader: 'style-loader!css-loader?modules!sass-loader?includePaths[]=' +
        path.join(__dirname, '../src')
    }]
  },
  node: {
    fs: 'empty'
  },
  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    isDevelopment
      ? new webpack.HotModuleReplacementPlugin() // enable HMR globally
      : null,
    isDevelopment
      ? new webpack.NamedModulesPlugin() // prints more readable module names in the browser console on HMR updates
      : null,
    isDevelopment
      ? new webpack.NoEmitOnErrorsPlugin() // do not emit compiled assets that include errors
      : null
  ],
  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: {
      index: '/src/public/index.html'
    },
    stats: "minimal",
    hot: true
  }
};

const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: [
    './main.js',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/assets/",
    filename: 'bundle.js',
  },
  devServer: {
    proxy: 
      {
        context: ['/**', '/blog/api/**'],
        target: 'https://leonardoballand.com',
        secure: false,
      }
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'eslint-loader',
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: 
        {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
};
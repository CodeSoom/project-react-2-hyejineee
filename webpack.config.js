const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.jsx'),
  mode: 'development',
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: './build/',
              name: 'images/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(gpx)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: './build/',
              name: 'data/gpx/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      presentational: path.resolve(__dirname, 'src/presentational/'),
      container: path.resolve(__dirname, 'src/container/'),
      _redux: path.resolve(__dirname, 'src/redux/'),
      data: path.resolve(__dirname, 'src/data/'),
      service: path.resolve(__dirname, 'src/service/'),
    },
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    publicPath: '/build/',
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new Dotenv(),
  ],
};

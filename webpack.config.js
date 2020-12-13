const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.jsx'),
  mode: 'development',
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js',
    publicPath: '/project-react-2-hyejineee/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/',
              name: 'assets/images/[name].[ext]',
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
              publicPath: '/',
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
      utils: path.resolve(__dirname, 'src/utils/'),
      service: path.resolve(__dirname, 'src/service/'),
      page: path.resolve(__dirname, 'src/page/'),
      asset: path.resolve(__dirname, 'src/asset/'),
      style: path.resolve(__dirname, 'src/style/'),
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

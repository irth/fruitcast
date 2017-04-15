const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
  entry: './app/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'front'),
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        include: [path.resolve(__dirname, 'app')],
        exclude: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, 'bower_components'),
        ],
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react', 'es2015'],
          plugins: ['transform-object-rest-spread'],
        },
      },
    ],
  },
  devServer: {
    proxy: {
      '/api': 'http://localhost:3000',
      '/socket.io': 'http://localhost:3000',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'FruitCast',
      template: path.resolve(__dirname, 'app', 'index.html'),
    }),
  ],
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css'],
  },
  devtool: 'source-map',
};

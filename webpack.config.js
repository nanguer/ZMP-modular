const path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: devMode ? 'development' : 'production',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'public', 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: './views/template.ejs'
    }),
    new MiniCssExtractPlugin({
      filename: './styles/style.css'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.ejs$/,
        use: [
          {
            loader: 'ejs-webpack-loader',
            options: {
              htmlmin: true
            }
          }
        ]
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },

          { loader: 'css-loader', options: { url: false, sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      },

      {
        test: /\.(png|jpg|gif|woff)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100000
            }
          }
        ]
      }
    ]
  },

  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    watchContentBase: true
  }
};

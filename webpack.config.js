const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'public', 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: './views/template.ejs'
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
              data: { title: 'New Title', someVar: 'hello world' },
              htmlmin: true
            }
          }
        ]
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
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
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    watchContentBase: true
  }
};

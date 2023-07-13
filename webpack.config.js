const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const sassLoader = require('sass')
// const CopyWebpackPlugin = require('copy-webpack-plugin');

const IS_DEV = process.env.NODE_ENV === 'development'
// const IS_ANALYZE = typeof process.env.BUNDLE_ANALYZE !== 'undefined';

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    // port: 8080,
    historyApiFallback: true
    // contentBase: path.join(__dirname, "public"),
    // hot: true
    // proxy: {}
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.js', '.jsx']
        },
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react']
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              injectType: 'styleTag'
            }
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: sassLoader
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        use: {
          loader: 'url-loader'
        }
      },
      {
        test: /\.(png|svg|jpg)$/,
        type: 'asset'
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser'
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: IS_DEV,
      ...(IS_DEV && { 'process.env.NODE_ENV': JSON.stringify('development') })
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      filename: 'index.html'
    })
    // new CopyWebpackPlugin({
    //   patterns: [{ from: 'public/json' }],
    // }),

    // new CopyWebpackPlugin({
    //   patterns: [{ from: 'public/mock', to: 'mock' }],
    // }),
  ]
}

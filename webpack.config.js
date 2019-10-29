const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  mode: process.env.NODE_ENV == 'production' ? 'production' : 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.APP_ENV': JSON.stringify(process.env.APP_ENV)
    }),
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
    port: process.env.PORT || 4000,
    host: '0.0.0.0',
  }
};
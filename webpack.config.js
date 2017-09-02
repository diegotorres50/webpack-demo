const path = require('path');
// Recrea el index.html
const HtmlWebpackPlugin = require('html-webpack-plugin');
// Hace un clean al directorio del output
const CleanWebpackPlugin = require('clean-webpack-plugin');

const webpack = require('webpack')

module.exports = {
  entry: {
    app: './src/index.js'
  },
  // Para mapear los archivos que arrojen errores
  devtool: 'inline-source-map',
  // The webpack-dev-server provides you with a simple web server and the ability to use live reloading.
  // This tells webpack-dev-server to serve the files from the dist directory on localhost:8080.
  devServer: {
    contentBase: './dist',
    // Habilitara Hot Module Replacement
    hot: true
  },
  // HMR with Stylesheets
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  }
};
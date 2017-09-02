const path = require('path');
// Recrea el index.html
const HtmlWebpackPlugin = require('html-webpack-plugin');
// Hace un clean al directorio del output
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  // Para mapear los archivos que arrojen errores
  devtool: 'inline-source-map',
  // The webpack-dev-server provides you with a simple web server and the ability to use live reloading.
  // This tells webpack-dev-server to serve the files from the dist directory on localhost:8080.
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  }
};
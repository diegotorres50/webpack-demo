const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // Para convertir archivos css a la grafica de dependencias usando un cargador.
  // npm install --save-dev style-loader css-loader
  // ver: https://webpack.js.org/guides/asset-management/
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};

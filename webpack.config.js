const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'main.js'
  },
  mode: 'development',
  target:'node',
  plugins: [
    new HtmlWebpackPlugin({
      title: '动态生成HTML',
      filename: 'index.html',
      template: './src/index.html'
    })
  ]
}
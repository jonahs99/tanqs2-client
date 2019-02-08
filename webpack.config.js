const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlPlugin({
      template: "src/index.html"
    })
  ]
};

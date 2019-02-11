const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: './src/main.js',
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
	rules: [
	  { test: /\.vue$/, use: 'vue-loader' },
	  { test: /\.css$/, use: ['vue-style-loader', 'css-loader']},
	]
  },
  plugins: [
    new HtmlPlugin({
      template: "src/index.html"
    }),
	new VueLoaderPlugin(),
  ]
};

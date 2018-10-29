const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
	entry: {
		reset: path.resolve(__dirname, '../src/public/js/reset.js'),
		main: path.resolve(__dirname, '../src/main.js')
	},
	resolve: {
		alias: {
			vue: 'vue/dist/vue.esm.js'
		}
	},
	plugins: [
		new CleanWebpackPlugin(
				['dist'],
				{
					root: path.resolve(__dirname, '../') // 设置根目录
				}
			),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../index.html'),
			filename: 'index.html'
		}),
		new VueLoaderPlugin()
	],
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: ['vue-loader'],
				include: path.resolve(__dirname, '../src')
			},
			{
				test: /\.js$/,
				use: ['babel-loader'],
				include: path.resolve(__dirname, '../src')
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 1024
						}
					}
				],
				include: path.resolve(__dirname, '../src')
			}
		]
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'js/[name].js'
	}
}
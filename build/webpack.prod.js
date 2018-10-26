const merge = require('webpack-merge')
const path = require('path')

const baseConfig = require('./webpack.base.js')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(baseConfig, {
	mode: 'production',
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader'
					},
					{
						loader: 'px2rem-loader',
						options: {
							remUnit: 40,
							remPrecision: 8
						}
					}
				],
				include: path.resolve(__dirname, '../src')
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							modules: true,
							localIdentName: '[local][hash:5]'
						}
					},
					{
						loader: 'px2rem-loader',
						options: {
							remUnit: 40,
							remPrecision: 8
						}
					},
					'sass-loader'
				],
				include: path.resolve(__dirname, '../src')
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "css/[name].css",
      		chunkFilename: "[id].css"
		})
	]
})
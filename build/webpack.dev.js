const merge = require('webpack-merge')
const path = require('path')

const baseConfig = require('./webpack.base.js')


module.exports = merge(baseConfig, {
	devtool: 'inline-source-map',
	mode: 'development',
	devServer: {
		contentBase: '../src',
		proxy: {
		  "/api": {
		  	target:"https://easy-mock.com/mock/5b5fb5fd9f3d1d7bfe3a6fb8",
		  	changeOrigin: true,
		  	pathRewrite: {"^/api" : ""}
		  }
		}
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: true,
							localIdentName: '[local]'
						}
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
					'style-loader',
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
	}
})
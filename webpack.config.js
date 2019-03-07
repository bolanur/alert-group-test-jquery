const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const $ = require("jquery")
const webpack = require('webpack')
module.exports = {
	entry: {
		app: './src/index',
		global: './src/global'
	},

	output: {
		path: path.resolve(__dirname, 'public'),
		filename: '[name].js',
		publicPath: '/js'
	},
	module: {
		rules: [
			{test: /\.handlebars$/, loader: "handlebars-loader"},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [
					'style-loader',
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {sourceMap: true},

					},
					{
						loader: 'sass-loader',
						options: {sourceMap: true},

					}
				]
			}
		]
	},

	devServer: {
		contentBase: path.join(__dirname, 'public'),
	},

	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery'
		}),
		new MiniCssExtractPlugin({
			filename: "style.css",
			publicPath: "/"
		})
	]
};

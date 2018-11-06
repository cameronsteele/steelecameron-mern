const path = require('path');

module.exports = {
	mode: 'development',
	entry: './server.jsx',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'serverBuild.js', /// change
		// publicPath /// ?
	},
	target: "node",
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: path.resolve(__dirname, 'node_modules')
				// include: [
				// 	path.resolve(__dirname, '')
				// ]
			},
			{
				test: /\.html$/,
				use: [
					'htmllint-loader'
				]
			}
		]
	}
}
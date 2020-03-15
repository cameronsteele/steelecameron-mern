const path = require('path');

module.exports = [
{
	name: 'client',
	mode: 'development',
	entry: './client.jsx',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'clientBuild.js', /// change
		// publicPath /// ?
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env', '@babel/preset-react']
				},
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
},

{
	name: 'server',
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
}];
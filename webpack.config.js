const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [
{
	name: 'client',
	mode: 'development',
	entry: 'src/client.jsx',
	output: {
		path: path.resolve(__dirname, 'build/client'),
		filename: 'clientBuild.js', /// change
		// publicPath /// ?
	},
	plugins: [new MiniCssExtractPlugin()],
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
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					// {
					// 	loader: 'style-loader'
					// },
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	}
},

{
	name: 'server',
	mode: 'development',
	entry: 'src/server.jsx',
	output: {
		path: path.resolve(__dirname, 'build/server'),
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
			},
			// { ///TODO does this need to be on the server? if so, probably consolidate duplicate code
			// 	test: /\.s[ac]ss$/i,
			// 	use: [
			// 		'style-loader',
			// 		'css-loader',
			// 		'sass-loader'
			// 	]
			// }
		]
	}
}];
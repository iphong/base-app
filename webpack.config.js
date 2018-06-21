const path = require('path')

module.exports = {
	mode: 'development',
	entry: './src/entry.js',
	devtool: 'source-map',

	output: {
		filename: 'bundle.js',
		library: 'WebBuilder',
		libraryTarget: 'umd',
		path: path.resolve(__dirname, './dist')
	},

	resolve: {

		
		extensions: ['.ts', '.tsx', '.js', 'jsx', '.json'],
		modules: [
			path.resolve(__dirname, './src'),
			path.resolve(__dirname, './node_modules')
		]
	},

	module: {
		rules: [
			{ test: /\.tsx?|\.jsx?$/, loader: ['babel-loader?cacheDirectory'] },
			{ enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
		]
	}
}

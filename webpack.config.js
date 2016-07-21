const path = require('path');
const webpack = require('webpack');
const commonsPlugin = new webpack.optimize.CommonsChunkPlugin({
	name: "common",
	minChunks: 3	//被共同Chunks N次打包到commonsPlugin
});

module.exports = {
	entry: {
		'unit': './src/js/dialog.js'
	},

	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: '/dist/',
		filename: "[name].js"
	},

	resolveLoader: {
		root: path.join(__dirname, 'node_modules'),
	},

	module: {
		loaders: [
			{
				test: /\.vue$/,
				loader: 'vue'
			},
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel?presets[]=react,presets[]=es2015'
			}
		]
	},

	plugins: [commonsPlugin]

};

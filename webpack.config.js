const path = require('path');
var version = require('./package.json').version;

module.exports = {
	entry: {
		'donate-plugin':'./src/donate-plugin.js'
	},

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name]-'+version+'.min.js',
		library: 'donate-plugin',
		libraryTarget: 'umd'
	},

	externals: {
		jquery: 'jQuery'
	},

	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{
                test:/\.(png)|(jpg)|(gif)$/,
                loader: "url-loader"
            }
		]
	}
};

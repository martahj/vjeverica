const Path = require('path');
const fs = require('fs');
const webpack = require('webpack');

const nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
	entry: [
	    './app_ssr.js',
	],
	target: 'node',
	output: {
		filename: 'compiledServer.js',
		path: Path.resolve(__dirname, 'dist')
	},
	module: {
		loaders: [
			{
				test: [/\.(js|jsx)$/],
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
		       }
			},
		    {
		       test: /\.html/,
		       loader: 'html-loader'
		    },
		    {
		       test: /\.css$/, 
		       loader: "style-loader!css-loader"
		    },
		    {
		       test   : /\.(png|jpg)$/,
		       loader : 'url-loader'
		    },
		    {
		       test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
		       loader : 'file-loader'
		    }
		]
	},
	externals: nodeModules,
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	devtool: 'sourcemap',
	plugins: [
	  // new webpack.IgnorePlugin(/\.(css|less)$/),
	  new webpack.BannerPlugin('require("source-map-support").install();',
	                           { raw: true, entryOnly: false })
	],
}
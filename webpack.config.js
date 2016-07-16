const Path = require('path');

module.exports = {
	entry: [
	    // 'whatwg-fetch',
	    './client/rootApp.jsx',
	],
	output: {
		filename: 'bundle.js',
		path: Path.resolve(__dirname, 'dist')
	},
	externals: {
		'cheerio': 'window',
		'react/lib/ExecutionEnvironment': true,
		'react/lib/ReactContext': true
	},
	module: {
		loaders: [
			{
				test: [/\.(js|jsx)$/],
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					// plugins: ['transform-runtime'],
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
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
}
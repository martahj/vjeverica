"use strict"
const Path = require('path');
const Fs = require('fs');

const baseConfig = require('./webpack.config.js');


//
// var nodeModules = {};

// Fs.readdirSync('node_modules')
//   .filter( (x) => {
//   	return ['.bin'].indexOf(x) === -1;
//   })
//   .forEach( (mod) => {
//   	nodeModules[mod] = 'commonjs' + mod;
//   })

//
baseConfig.entry = Path.resolve(__dirname, 'components', 'appRoot.jsx');

baseConfig.output = {
	path: Path.join(__dirname, 'dist'),
	filename: 'serverBundle.js'
}

// baseConfig.externals = nodeModules;

module.exports = baseConfig;
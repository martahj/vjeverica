const Path = require('path');

const baseConfig = require('./webpack.config.js');
baseConfig.entry = Path.resolve(__dirname, 'dist', 'client-bundle.js');

module.exports = baseConfig;
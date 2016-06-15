"use strict"
require("babel-register");

const Express = require('express');
const BodyParser = require('body-parser');
const Path = require('path');
const Fs = require('fs');
const Url = require('url');
const ReactRouter = require('react-router');
const React = require('react');
const ReactDOMServer = require('react-dom/server');



/*
  Folder paths
*/

const distFolder = Path.resolve(__dirname, 'dist');
const clientFolder = Path.resolve(__dirname, 'client');



/*
  Express Configuration
*/

const appRoutes = Express();
// appRoutes.set('view engine', 'ejs');



/*
  Static files
*/

appRoutes.use(Express.static(clientFolder));



/*
  Middleware
*/

appRoutes.use( (req, res, next) => {
	console.log('testing', req.url)
	next();
})



/*
  Routes
*/

appRoutes.get('/bundle.js', (req, res) => {
	console.log('looking for bundle');
	res.sendFile(Path.resolve(distFolder, 'bundle.js'));
})


appRoutes.get('*', (req, res) => {
	res.sendFile(Path.resolve(clientFolder, 'index.html'))
})




if (process.env.NODE_ENV !== 'test') {

	let app = Express();
	app.use(BodyParser.json())
	app.use('/', appRoutes);

	let port = process.env.port || 4000;
	app.listen(port);
	console.log('Listening on port', port);
	
} else {
	module.exports = appRoutes;
}
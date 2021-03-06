"use strict"
require("babel-register");

const Express = require('express');
const BodyParser = require('body-parser');
const Path = require('path');
const Fs = require('fs');
const Url = require('url');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const match = ReactRouter.match;
const RouterContext = ReactRouter.RouterContext;
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const db = require('./server/db');


/*
  Folder paths
*/
const distFolder = Path.resolve(__dirname, 'dist');
const clientFolder = Path.resolve(__dirname, 'client');



/*
  Express Configuration
*/
const appRoutes = Express.Router();
console.log('app routes', appRoutes);
// appRoutes.set('view engine', 'ejs');


/*
  React Router Configuration
*/
// const routes = require('./routing/serverRoutes.jsx').default;
const routes = require('./routing/serverRoutes.jsx').default;
let routerContextFactory = React.createFactory(RouterContext);



/*
  Middleware
*/

// appRoutes.use( (req, res, next) => {
// 	// console.log('testing', req.url)
// 	next();
// })



/*
  Static files
*/


appRoutes.get('/bundle.js', (req, res) => {
	// console.log('looking for bundle');
	res.sendFile(Path.resolve(distFolder, 'bundle.js'));
})

appRoutes.get('/styles.css', (req, res) => {
	// console.log('looking for styles');
	res.sendFile(Path.resolve(clientFolder, 'styles', 'css', 'styles.css'));
})

appRoutes.get('/img/:img', (req, res) => {
	// console.log('looking for image', req.url);
	res.sendFile(Path.resolve(clientFolder, 'styles', 'img', req.params.img));
})



/*
  appRoutes
*/
appRoutes.get('*', (req, res) => {

	match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
		console.log('in ssr route')

		if (error) {
			res.status(500).send(error.message)
		} else if (redirectLocation) {
			res.redirect(302, redirectLocation.pathname + redirectLocation.search)
		} else if (renderProps) {
			console.log('got renderprops');

			// let routerContextFactory = React.createFactory(RouterContext);
			let reactOutput = ReactDOMServer.renderToString(routerContextFactory(renderProps));
			res.render('index.ejs', {reactOutput});

			// res.status(200).send(renderToString(<RouterContext {...renderProps} />))
		} else {
			res.status(404).send('Not found')
		}
	})

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
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
// const Babel = require('babel-core');
// const Browserify = require('browserify');
// const Babelify = require('babelify');

// require("node-jsx").install({
//   harmony: true,
//   extension: ".jsx"
// });


/*
  Paths
*/
const distFolder = Path.resolve(__dirname, 'dist');
const clientFolder = Path.resolve(__dirname, 'client');

/*
  Express Configuration
*/
const app = Express();
app.set('view engine', 'ejs');



/* 
  React Components
*/
// // let rootApp = React.createFactory(require('./components/appRoot.jsx'));
// // let RootApp = ReactDOMServer.renderToString(require('./components/appRoot.jsx')
// let RootApp = require('./components/app.jsx');
// // console.log('root app', RootApp);
// let rootAppFactory = React.createFactory(RootApp);
// // let appGet = new RootApp.default();
// // console.log('appGet', appGet);
// // let reactHtml = ReactDOMServer.renderToString(<RootApp />);
// let reactHtml = ReactDOMServer.renderToString(rootAppFactory({}));

// console.log('app factory', appFactory);
// let rootApp = require('./di')

// let RootApp = Babel.transform( require( ReactDOMServer.renderToString(require('./components/appRoot.jsx')) ), {
//   plugins: ["transform-react-jsx"]
// });
// Browserify('components/appRoot.jsx')
//                 .transform('babelify', {presets: ["es2015", "react"]})
//                 .bundle()
//                 .pipe(Fs.createWriteStream('sbundle.js'))

  // .on('transform', (tr) => {
  // 	console.log('tr', tr);
  // 	if (tr instanceof babelify) {
  // 		tr.once('babelify', (result, filename) => {
  // 			console.log('result', result);
  // 			console.log('filename', filename);
  // 		})
  // 	}
  // })

// console.log('root app', rootApp);

// let bundle = require('./dist/serverBundle');
// console.log('server bundle', bundle.appRoot);


/*
  Static files
*/
app.use(Express.static(clientFolder));



/*
  Middleware
*/

app.use( (req, res, next) => {
	console.log('testing', req.url)
	next();
})



/*
  Routes
*/
// app.get('/', (req, res) => {

// })


app.get('/bundle.js', (req, res) => {
	console.log('looking for bundle');
	res.sendFile(Path.resolve(distFolder, 'bundle.js'));
})


app.get('*', (req, res) => {
	res.sendFile(Path.resolve(clientFolder, 'index.html'))
})







//please
// app.get('*', (req, res) => {
// 	let fakeReactHtml = ("<div>I am a fake react element</div>");

// 	// let rootApp = React.createFactory(require('./components/appRoot.jsx'));
// 	// let RootApp = ReactDOMServer.renderToString(require('./components/appRoot.jsx')
// 	let RootApp = require('./components/app.jsx');
// 	// console.log('root app', RootApp);
// 	let rootAppFactory = React.createFactory(RootApp);
// 	// let appGet = new RootApp.default();
// 	// console.log('appGet', appGet);
// 	// let reactHtml = ReactDOMServer.renderToString(<RootApp />);
// 	let reactHtml = ReactDOMServer.renderToString(rootAppFactory({}));

// 	// let appFactory = React.createFactory(RootApp);
// 	// console.log('app factory', appFactory);
// 	// let reactHtml = ReactDOMServer.renderToString(appFactory);
// 	// let reactHtml = React.createReactDOMServer.renderToString(RootApp);
// 	res.render('test', {reactOutput: fakeReactHtml});
// })

/*
app.get('*', (req, res) => {
	let test = require('./sbundle.js');
	// console.log('test', test.AppRoot);
	let fakeReactHtml = ("<div>I am a fake react element</div>");
	// res.render('test');
	res.render('test', {reactOutput: fakeReactHtml});


	// let reactHtml = ReactDOMServer.renderToString(RootApp());
	// res.render
	// ReactDOMServer.renderToString('./views/index', {reactOutput: reactHtml});
})
*/



if (process.env.NODE_ENV !== 'test') {
	let port = process.env.port || 4000;
	app.listen(port);
	console.log('Listening on port', port);
} else {
	module.exports = app;
}
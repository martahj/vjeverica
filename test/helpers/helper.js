"use strict"

process.env.NODE_ENV = 'test';

const helper = {};

helper.db = require('../../server/db.js');
helper.request = require('supertest-as-promised');
helper.expect = require('chai').expect;

helper.ssrRoutes = require('../../app_ssr.js');
helper.clientRoutes = require('../../app_client.js');

let express = require('express');
let bodyParser = require('body-parser');

helper.createApp = (loader) => {
	let app = express();
	app.use(bodyParser.json());

	app.testReady = () => {
		app.use( (err, req, res, next) => {
			console.error('==Error==');
			console.error(' ' + err.stack);
			next(err);
		})
	}

	return app;
}

module.exports = helper;
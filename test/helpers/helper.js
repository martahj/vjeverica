"use strict"

process.env.NODE_ENV = 'test';
const Promise = require('bluebird');

const helper = {};

helper.db = require('../../server/db.js');
helper.request = require('supertest-as-promised');
helper.expect = require('chai').expect;

helper.ssrRoutes = require('../../app_ssr.js');
helper.clientRoutes = require('../../app_client.js');

helper.User = require('../../server/models/user.js');
helper.UserHelpers = require('../../server/models/modelHelpers/userHelpers.js');
helper.Token = require('../../server/models/token.js');

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
};


helper.allPropertiesMatch = (original, stored) => {
	// console.log('all properties match?', original, stored);
	return Object.keys(original).reduce( (allMatching, key) => {
		return allMatching && helper.propertyMatches(original[key], stored[key]);
	}, true)
}

helper.propertyMatches = (originalProperty, storedProperty) => {
	// console.log('comparing', originalProperty, 'to', storedProperty)
	return originalProperty === undefined ? storedProperty === null : originalProperty === storedProperty;
}

helper.noDifference = (obj1, obj2) => {
	// console.log('helper no difference', obj1, obj2);
	return helper.allPropertiesMatch(obj1, obj2) && Object.keys(obj1).length === Object.keys(obj2).length;
}

helper.promisedWait = (milliseconds) => {
	return new Promise( (resolve, reject) => {
		setTimeout( () => { resolve(); }, milliseconds);
	})
}

// helper.populateDb = require('./populateDb');

module.exports = helper;
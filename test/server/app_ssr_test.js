"use strict"

const helper = require('../helpers/helper.js');
const request = helper.request;
const db = helper.db;
const expect = helper.expect;

const ssrRoutes = require('../../app_ssr.js');
// const clientRoutes = require('../../app_client.js');

describe("The ssr server", function() {

	let app = helper.createApp();
	app.use('/', ssrRoutes);
	app.testReady();

	it('returns true', () => {
		expect(true).to.be.true;
	})

	// it('serves an example endpoint', (done) => {
	// 	return request(app)
	// 	  .get('/hello')
	// 	  .expect(200, done);
	// })

})
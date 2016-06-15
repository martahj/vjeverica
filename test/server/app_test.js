"use strict"

const helper = require('../helpers/helper.js');
const request = helper.request;
const db = helper.db;
const expect = helper.expect;

module.exports = function(routes, routesName) {
	describe('the server using ' + routesName, () => {

		let app = helper.createApp();
		app.use('/', routes);
		app.testReady();

		it('returns true', () => {
			expect(true).to.be.true;
		})

	})
}

// module.exports = appTest;
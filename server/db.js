"use strict"

const config = require('../knexfile.js')
const env = process.env.NODE_ENV || 'development'

console.log('Current node environment is', env)

var db = require('knex')(config[env])
var Promise = require('bluebird')

module.exports = db
db.migrate.latest([config])

db.deleteEverything = () => {

	if (env !== 'test') {
		return Promise.reject()
	}

	//delete everything
}
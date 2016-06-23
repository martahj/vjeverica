"use strict"

const config = require('../knexfile.js')
const env = process.env.NODE_ENV || 'development'

console.log('Current node environment is', env)

const db = require('knex')(config[env])
const Promise = require('bluebird')

module.exports = db
db.migrate.latest([config])

db.deleteEverything = () => {

	if (env !== 'test') {
		return Promise.reject()
	}

	return deleteTable('contactInfo')
	  .then( () => deleteTable('lessons') )
	  .then( () => deleteTable('lessonsText') )
	  .then( () => deleteTable('cds_artists') )
	  .then( () => deleteTable('artists') )
	  .then( () => deleteTable('cds_songs') )
	  .then( () => deleteTable('songs') )
	  .then( () => deleteTable('cds') )
	  .then( () => deleteTable('bio') )
	  .then( () => deleteTable('eventNotes') )
	  .then( () => deleteTable('events') )
	  .then( () => deleteTable('tokens') )
	  .then( () => deleteTable('users') )	  
}

function deleteTable(tablename) {
	return db(tablename).delete()
	  .then( (numberDeleted) => {
	  	console.log('deleted', numberDeleted, 'records from', tablename);
	  	return;
	  })
}
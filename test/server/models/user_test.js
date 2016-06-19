"use strict"

const helper = require('../../helpers/helper.js');
const db = helper.db;
const User = helper.User;

xdescribe('******* User model ******* ', function() {

	before(function() {
	  return db.deleteEverything()
	})

	let user1 = {
		admin: true,
		email: 'test1@testing.com',
		password: 'shittytestpassword'
	}

	let user2 = {
		admin: false,
		email: 'test2@testing.com',
		password: 'shittytestpassword2'
	}


	it('creates users and searches for all of them', function() {
		return User.createUser(user1)
		  .then( () => User.createUser(user2) )
		  .then( () => User.findAll() )
		  .then( users => {
		  	expect(users).to.be.an('array');
		  	expect(users).to.have.length(2);
		  	expect(users[0]).to.be.an('object');
		  })
	})

	it('creates the right users and encrypts passwords', function() {
		return User.findById(1)
		  .then( dbUser1 => {
		  	expect(dbUser1).to.be.an('object');
		  	expect(allPropertiesMatch(user1, dbUser1)).to.be(false);
		  	expect(propertyMatches(user1.email, dbUser1.email)).to.be(true);
		  	expect(propertyMatches(user1.admin, dbUser1.admin)).to.be(true);
		  })
	})

})
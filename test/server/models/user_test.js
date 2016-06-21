"use strict"

const helper = require('../../helpers/helper.js');
const db = helper.db;
const expect = helper.expect;
const User = helper.User;

describe('******* User model ******* ', function() {

	before(function() {
	  return db.deleteEverything()
	})

	let user1 = {
		admin: true,
		email: '  test1@testing.com',
		password: 'shittytestpassword'
	}

	let user2 = {
		email: 'test2@testing.com',
		password: 'shittytestpassword2'
	}


	it('creates users with encrypted passwords', function() {
		return User.createUser(user1)
		  .then( () => User.getAll() )
		  .then( allUsers => {
		  	expect(allUsers).to.be.an('array');
		  	expect(allUsers).to.have.length(1);

		  	let dbUser1 = allUsers[0];

		  	expect(dbUser1).to.be.an('object');

		  	let adminMatches = helper.propertyMatches(user1.admin, dbUser1.admin);
		  	expect(adminMatches).to.be.true;

		  	let emailMatches = helper.propertyMatches(user1.email, dbUser1.email);
		  	expect(emailMatches).to.be.false;
		  	expect(user1.email.length - 2).to.equal(dbUser1.email.length);
		  	expect(user1.email.substring(2)).to.equal(dbUser1.email);

		  	let passwordsMatch = helper.propertyMatches(user1.password, dbUser1.password);
		  	expect(passwordsMatch).to.be.false;
		  })
	})

	it('grabs all users',function() {
		return User.createUser(user2)
		  .then( () => User.getAll() )
		  .then( users => {
		  	expect(users).to.be.an('array');
		  	expect(users).to.have.length(2);
		  	expect(users[0]).to.be.an('object');
		  })
		  .catch( err => {
		  	console.log('err');
		  	expect(false).to.be.true;
		  })
	})

	it('searches for users by email address', function() {
		return User.findByEmail(user2.email)
		  .then( (user) => {
		  	expect(user).to.be.an('object');
		  	expect(user.email).to.equal(user2.email);
		  	expect(user.password).to.be.a('string');
		  	expect(user.admin).to.be.false;
		  })
	})

	it('errors if you try to null something non-nullable', function() {

		let user3 = {
			email: 'ihaveanemail@nyaaaah.org',
		}

		let user4 = {
			password: 'isuckatpasswords'
		}

		let expectedPasswordError = 'password is a required field'
		let expectedEmailError = 'email is a required field';

		return User.createUser(user3)
		  // .then( () => {expect(true).to.be.false})
		  .catch( (err) => {
		  	expect(err).to.be.an.instanceof(Error);
		  	expect(err.message).to.equal(expectedPasswordError);

		  	return User.createUser(user4);
		  })
		  .catch( (err) => {
		  	expect(err).to.be.an.instanceof(Error);
		  	expect(err.message).to.equal(expectedEmailError);
		  })
	})

	// it('defaults to non-admin if no admin is given and fixes extra spaces in emails', function() {
	// 	let user4 = {
	// 		email: 'idontcare@this.com ',
	// 		password: 'blurgeddy'
	// 	}

	// 	return User.createUser(user4)
	// 	  .then( (newUser) => {
	// 	  	expect(newUser).to.be.an('object');
	// 	  	expect(user4.email.length - newUser.email.length).to.equal(1);
	// 	  	expect(newUser.admin).to.be.false;
	// 	  })
	// })

})
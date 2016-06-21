"use strict"

const helper = require('../../../helpers/helper.js');
const expect = helper.expect;
const UserHelpers = helper.UserHelpers;


describe('******* User model helpers ******* ', function() {

	it('encrypts a password', function() {
		let originalPw = 'passwordd';

		return UserHelpers.getHashedPassword(originalPw)
		  .then( hashed => {
		  	expect(hashed).to.be.a('string');
		  	expect(originalPw === hashed).to.be.false;
		  	expect(helper.propertyMatches(originalPw, originalPw)).to.be.true;
		  	expect(helper.propertyMatches(originalPw, hashed)).to.be.false;
		  })
	})

	it('can tell an incorrect password from a correct one', function() {
		let correctPw = 'password1';
		let incorrectPw = 'password2';
		let hashedPw;

		return UserHelpers.getHashedPassword(correctPw)
		  .then( hashed => {
		  	hashedPw = hashed;

		  	return UserHelpers.passwordMatches(correctPw, hashedPw)
		  })
		  .then( matches => {
		  	expect(matches).to.be.true;

		  	return UserHelpers.passwordMatches(incorrectPw, hashedPw)
		  })
		  .then( matches => {
		  	expect(matches).to.be.false;
		  })
	})

	it('replaces an unhashed password with a hashed one', function() {
		let user1 = {
			admin: true,
			email: 'test1@testing.com',
			password: 'shittytestpassword'
		}

		return UserHelpers.encryptPassword(user1)
		  .then( hashedUser1 => {
		  	expect(hashedUser1).to.be.an('object');
		  	expect(hashedUser1).to.have.all.keys('admin', 'email', 'password');

		  	let objectDidNotChange = helper.noDifference(user1, hashedUser1);
		  	expect(objectDidNotChange).to.be.false;

		  	let passwordsMatch = (user1.password === hashedUser1.password);
		  	expect(passwordsMatch).to.be.false;

		  	let adminMatches = (user1.admin === hashedUser1.admin);
		  	expect(adminMatches).to.be.true;

		  	let emailMatches = (user1.email === hashedUser1.email);
		  	expect(emailMatches).to.be.true;
		  })
	})

	it('identifies email addresses without an @ sign', function() {
		let goodEmail = 'test1@test.come';
		let badEmail1 = 'testtesting.com';
		let badEmail2 = '@test.com';
		let badEmail3 = 'test@';

		expect(UserHelpers.okAt(goodEmail)).to.be.true;
		expect(UserHelpers.okAt(badEmail1)).to.be.false;
		expect(UserHelpers.okAt(badEmail2)).to.be.false;
		expect(UserHelpers.okAt(badEmail3)).to.be.false;
	})

	it('trims strings', function() {
		let trimmed = 'emailAddress'
		let notTrimmed = ' emailAddress ';

		expect( UserHelpers.getTrimmedEmail(trimmed) ).to.have.length(trimmed.length);
		expect( UserHelpers.getTrimmedEmail(notTrimmed) ).to.have.length(trimmed.length);
	})

	it('replaces untrimmed email addresses with trimmed ones', function() {

		let user1 = {
			admin: true,
			email: ' test1@testing.com ',
			password: 'shittytestpassword'
		}

		return UserHelpers.trimEmail(user1)
		  .then( newEmailUser1 => {
		  	expect(newEmailUser1).to.be.an('object');
		  	expect(newEmailUser1).to.have.all.keys('admin', 'email', 'password');

		  	let objectDidNotChange = helper.noDifference(user1, newEmailUser1);
		  	expect(objectDidNotChange).to.be.false;

		  	let passwordsMatch = (user1.password === newEmailUser1.password);
		  	expect(passwordsMatch).to.be.true;

		  	let adminMatches = (user1.admin === newEmailUser1.admin);
		  	expect(adminMatches).to.be.true;

		  	let emailMatches = (user1.email === newEmailUser1.email);
		  	expect(emailMatches).to.be.false;
		  	expect(user1.email.length - newEmailUser1.email.length).to.equal(2);
		  })
	})

	it('identifies email addresses not at a website', function() {
		let goodEmail = 'test1@testing.com';
		let goodEmail2 = 'test1.2@testing.com';
		let badEmail1 = 'test2@testingcom';
		let badEmail2 = 'test.2@';

		expect(UserHelpers.isAtWebsite(goodEmail)).to.be.true;
		expect(UserHelpers.isAtWebsite(goodEmail2)).to.be.true;
		expect(UserHelpers.isAtWebsite(badEmail1)).to.be.false;
		expect(UserHelpers.isAtWebsite(badEmail2)).to.be.false;

	})

	it('throws an error on invalid email addresses', function() {
		let goodEmail = 'test1@testing.com';
		let badEmail = 'test2@testingcom';

		return UserHelpers.validateEmail({email: goodEmail})
		  .then( () => {
		  	expect(true).to.be.true;
		  })
		  .catch( (err) => {
		  	console.log('error on what should be a good email address', err);
		  	expect(true).to.be.false;
		  })

		  return UserHelpers.validateEmail({email: badEmail})
		    .then( () => {
		    	expect(true).to.be.false;
		    })
		    .catch( (err) => {
		    	console.log('got error', err);
		    	expect(err).to.be.an.instanceof(Error);
		    })
	})

	it('replaces non-trimmed emails with trimmed ones', function() {
		let user1 = {
			admin: true,
			email: ' test1@testing.com ',
			password: 'shittytestpassword'
		}

		return UserHelpers.trimEmailAndValidate(user1)
		  .then( (trimmedUser1) => {
		  	expect(trimmedUser1).to.be.an('object');

		  	let objectDidNotChange = helper.noDifference(user1, trimmedUser1);
		  	expect(objectDidNotChange).to.be.false;

		  	let passwordsMatch = helper.propertyMatches(user1.password, trimmedUser1.password);
		  	expect(passwordsMatch).to.be.true;

		  	let adminMatches = helper.propertyMatches(user1.admin, trimmedUser1.admin);
		  	expect(adminMatches).to.be.true;

		  	let emailMatches = helper.propertyMatches(user1.email, trimmedUser1.email);
		  	expect(emailMatches).to.be.false;
		  	expect( trimmedUser1.email.length - user1.email.length ).to.equal(-2);
		  	expect( trimmedUser1.email).to.equal(user1.email.trim() )
		  })
	})

	it('sets admin to false if no admin is given', function() {
		let user = {
			email: 'blurgeddy',
			password: 'idontmatter'
		}

		return UserHelpers.ensureAdmin(user)
		  .then( (userObj) => {
		  	expect(userObj.admin === false).to.be.true;
		  })
	})
})

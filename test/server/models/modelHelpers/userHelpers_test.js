"use strict"

const helper = require('../../../helpers/helper.js');
const UserHelpers = helper.UserHelpers;

describe('******* User model ******* ', function() {

	it('encrypts a password', function() {
		let originalPw = 'passwordd';

		return UserHelpers.getHashedPassword(originalPw)
		  .then( hashed => {
		  	expect(hashed).to.be.a('string');
		  	expect(originalPw === hashed).to.be(false);
		  	expect(helper.propertyMatches(originalPw, originalPw)).to.be(true);
		  	expect(helper.propertyMatches(originalPw, hashed)).to.be(false);
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
		  	expect(matches).to.be(true);

		  	return UserHelpers.passwordMatches(incorrect, hashedPw)
		  })
		  .then( matches => {
		  	expect(matches).to.be(false);
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
		  	expect(objectDidNotChange).to.be(false);

		  	let passwordsMatch = (user1.password === hashedUser1.password);
		  	expect(passwordsMatch).to.be(false);

		  	let adminMatches = (user1.admin === hashedUser1.admin);
		  	expect(adminMatches).to.be(true);

		  	let emailMatches = (user1.email === hashedUser1.email);
		  	expect(emailMatches).to.be(true);
		  })
	})

	it('identifies email addresses without an @ sign', function() {
		let goodEmail = 'test1@test.come';
		let badEmail1 = 'testtesting.com';
		let badEmail2 = '@test.com';
		let badEmail3 = 'test@';

		expect(UserHelpers.okAt(goodEmail)).to.be(true);
		expec(UserHelpers.okAt(badEmail1)).to.be(false);
		expect(UserHelpers.okAt(badEmail2)).to.be(false);
		expect(UserHelpers.okAt(badEmail3)).to.be(false);
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
		  	expect(objectDidNotChange).to.be(false);

		  	let passwordsMatch = (user1.password === newEmailUser1.password);
		  	expect(passwordsMatch).to.be(true);

		  	let adminMatches = (user1.admin === newEmailUser1.admin);
		  	expect(adminMatches).to.be(true);

		  	let emailMatches = (user1.email === newEmailUser1.email);
		  	expect(emailMatches).to.be(false);
		  	expect(user1.email.length - newEmailUser1.email.length).to.equal(2);
		  })
	})

	it('identifies email addresses not at a website', function() {
		let goodEmail = 'test1@testing.com';
		let badEmail1 = 'test1.2@testing.com';
		let badEmail2 = 'test2@testingcom';

		expect(UserHelpers.isAtWebsite(goodEmail)).to.be(true);
		expect(UserHelpers.isAtWebsite(badEmail1)).to.be(false);
		expect(UserHelpers.isAtWebsite(badEmail2)).to.be(false);
	})
}

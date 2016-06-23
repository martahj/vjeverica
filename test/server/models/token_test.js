"use strict"

const helper = require('../../helpers/helper.js');
const db = helper.db;
const expect = helper.expect;
const Token = helper.Token;

describe('******* Token model ******* ', function() {

	let user1 = {
		email: 'mycoolemailaddress'
	}
	let token1;
	let token1Id;

	it('generates a token', function() {
		return Token.generateToken(user1.email)
		  .then( token => {
		  	token1 = token;
		  	expect(token).to.be.a('string');
		  	expect(token.length > user1.email.length).to.be.true;
		  })
	})

	it('decodes a token or returns false if token is expired', function() {
		return Token.decodeToken(token1)
		  .then( tokenData => {
		  	expect(tokenData).to.have.all.keys(['email', 'iat', 'exp'])
		  	expect(tokenData.email).to.equal(user1.email);

		  	return
		  })
		  .then( () => helper.promisedWait(1000) )
		  .then( () => Token.decodeToken(token1) )
		  .then( (tokenData) => {
		  	console.log('token data should be null', tokenData);
		  	expect(tokenData).to.equal(null);
		  })
	})

	it('stores the token in the database', function() {
		return Token.createToken(user1.email)
		  .then( () => Token.getAll() )
		  .then( allTokens => {
		  	expect(allTokens).to.be.an('array');
		  	expect(allTokens).to.have.length(1);

		  	let theToken = allTokens[0];
		  	token1Id = theToken.id;
		  	expect(theToken).to.be.an('object');
		  	expect(theToken).to.have.any.keys(['id', 'token']);
		  })
	})

	it('deletes a token by id', function() {
		return Token.delete(token1Id)
		  .then( () => Token.getAll() )
		  .then( allTokens => {
		  	expect(allTokens).to.have.length(0);
		  })
	})

	xit('cleans expired tokens from the database', function() {
		//
	})
})
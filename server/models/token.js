const Promise = require('bluebird');
const jwt = require('jsonwebtoken');
const jwtPromised = Promise.promisifyAll(jwt);

const db = require('../db.js');
const ModelHelper = require('./modelHelper');

let tokenAttributes = [
  ModelHelper.makeAttr('token', true)
];

const code = "jafoi2j89jj";
const expiration = {
	development: '5h', //production or development: tokens expire after 5 hours
	production: '5h',
	test: '1s' //testing: tokens expire after 1 second
}

const Token = ModelHelper.createModel('tokens', tokenAttributes);
module.exports = Token;

Token.generateToken = function(email) {
	return new Promise( (resolve, reject) => {
		let data = {email};

		let options = {
			expiresIn: expiration[process.env.NODE_ENV]
		};

		let token = jwt.sign(data, code, options);
		resolve(token);
	})
}


/*
If token is valid, returns the decoded token, which looks like:
    {
     email: email corresponding to token,
     iat: I'M NOT SURE WHAT THIS MEANS BUT I THINK IT IS WHEN THE TOKEN WAS ISSUED,
     exp: WHEN TOKEN EXPIRES
     }
If token is invalid, returns false
*/
Token.decodeToken = function(token) {
	return jwtPromised.verifyAsync(token, code)
	.catch( (err) => {
		console.log('error decoding token', err)
		if (err.name === 'TokenExpiredError') {
			console.log('it is an expired error')
			return null;
		} else {
			throw err
		}
	})
}





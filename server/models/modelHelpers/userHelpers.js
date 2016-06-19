"use strict"

const Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

const UserHelpers = {};
module.exports = UserHelpers;

UserHelpers.encryptPassword = (userAttrs) => {
	return UserHelpers.getHashedPassword(userAttrs.password)
	  .then( hash => {
	  	userAttrs.password = hash;
	  	return userAttrs;
	  })
}

UserHelpers.getHashedPassword = (password) => {
	return bcrypt.genSaltAsync(10)
	.then( (salt) => bcrypt.hashAsync(password, salt, null) )
};

UserHelpers.trimEmail = (userAttrs) => {
	return new Promise( (resolve, reject) => {
		let trimmed = UserHelpers.getTrimmedEmail(userAttrs.email);
		resolve(trimmed);
	})
	.then( trimmed => {
		userAttrs.email = trimmed;
		return userAttrs;
	})
}

UserHelpers.getTrimmedEmail = (email) => {
	return email.trim();
}


// function checkForValidEmail(userAttrs) {
// 	return new Promise( (resolve, reject) => {
// 		if (isValidEmail(userAttrs.email)) {
// 			resolve()
// 		} else {
// 			reject()
// 		}
// 	})
// 	.then( () => {console.log('valid email address!'); return;})
// 	.catch( (err) => {
// 		throw new Error(userAttrs.email + ' is an invalid email address');
// 	})
// }


// UserHelpers.isValidEmail(emailAddress) {
// 	console.log('ehcking if', emailAddress, 'is a valid email address');
// 	return containsOneAt(emailAddress) && isAtWebsite(emailAddress);
// }

UserHelpers.okAt(emailAddress) {
	let parts = emailAddress.split('@');
	return parts.length === 2 && parts[0].length && parts[1].length;
}

// UserHelpers.isAtWebsite(emailAddress) {
// 	let website = emailAddress.split('@')[1];
// 	let websiteParts = website.split('.');
// 	return websiteParts.length === 2 && parts[0].length && parts[1].length;
// }

UserHelpers.passwordMatches(enteredPw, storedHash) {
	return bcrypt.compareAsync(enteredPw, storedHash)
}

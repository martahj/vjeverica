"use strict"

const Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

const UserHelpers = {};
module.exports = UserHelpers;

/*
  Methods called in User model
*/

//changes the password to an encrypted passw
UserHelpers.encryptPassword = (userAttrs) => {
	return UserHelpers.getHashedPassword(userAttrs.password)
	  .then( hash => Object.assign({}, userAttrs, {password: hash}) )
}

//just returns the encrypted password
UserHelpers.getHashedPassword = (password) => {
	return bcrypt.genSaltAsync(10)
	.then( (salt) => bcrypt.hashAsync(password, salt, null) )
};

//returns a boolean representing whether or not the password matches the stored one
UserHelpers.passwordMatches = (enteredPw, storedHash) => {
	return bcrypt.compareAsync(enteredPw, storedHash)
}

//trims the email and then validates it
//if no problems, returns the updated object
UserHelpers.trimEmailAndValidate = (userAttrs) => {
	return UserHelpers.trimEmail(userAttrs)
	  .then( userAttrs => UserHelpers.validateEmail(userAttrs) )
}

//sets admin to false if no admin attribute is provided
UserHelpers.ensureAdmin = (userAttrs) => {
	return new Promise( (resolve, reject) => {
		let withAdmin = Object.assign({}, {admin: false}, userAttrs);
		resolve(withAdmin)
	})
}



/*
  no need to use these directly
*/


UserHelpers.trimEmail = (userAttrs) => {
	return new Promise( (resolve, reject) => {
		let trimmed = UserHelpers.getTrimmedEmail(userAttrs.email);
		resolve(trimmed);
	})
	.then( trimmed => Object.assign({}, userAttrs, {email: trimmed}) )
}


UserHelpers.validateEmail = (userAttrs) => {
	return new Promise( (resolve, reject) => {
		if (UserHelpers.isValidEmail(userAttrs.email)) {
			resolve()
		} else {
			reject()
		}
	})
	.then( () => userAttrs )
	.catch( (err) => {
		console.log('error in validateEmail', err);
		throw new Error(userAttrs.email + ' is an invalid email address');
	})
}


UserHelpers.getTrimmedEmail = (email) => {
	return email.trim();
}

UserHelpers.isValidEmail = (emailAddress) => {
	return UserHelpers.okAt(emailAddress) && UserHelpers.isAtWebsite(emailAddress);
}

UserHelpers.okAt = (emailAddress) => {
	let parts = emailAddress.split('@');
	return parts.length === 2 && parts[0].length > 0 && parts[1].length > 0;
}

UserHelpers.isAtWebsite = (emailAddress) => {
	let website = emailAddress.split('@')[1];
	let websiteParts = website.split('.');
	return websiteParts.length === 2 && websiteParts[0].length > 0 && websiteParts[1].length > 0;
}



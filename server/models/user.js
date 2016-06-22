const Promise = require('bluebird');

const db = require('../db.js');
const ModelHelper = require('./modelHelper');
const UserHelpers = require('./modelHelpers/userHelpers');

let userAttributs = [
  ModelHelper.makeAttr('admin', true),
  ModelHelper.makeAttr('email', true),
  ModelHelper.makeAttr('password', true)
];

const User = ModelHelper.createModel('users', userAttributs);
module.exports = User;


/*
  Public functions
*/

/* Creates a user
  Will error if:
  - no email or password provided
  - trying to create a user with an email already in the database
*/
User.createUser = function(userAttrs) {
	return new Promise( (resolve, reject) => {
		if (!userAttrs.email) {
			reject('email');
		} else if (!userAttrs.password) {
			reject('password')
		} else {
			resolve(userAttrs);
		}
	})
	  .then( (userAttrs) => UserHelpers.trimEmailAndValidate(userAttrs) )
	  .catch( (problem) => User.throwRequiredError(problem) )
	  .then( (userAttrs) => User.checkIfDuplicateEmail(userAttrs) )
	  .catch( (err) => User.reportError('Cannot create an account for a duplicate email', err) )
	  .then( (userAttrs) => UserHelpers.ensureAdmin(userAttrs) )
	  .then( (userAttrs) => UserHelpers.encryptPassword(userAttrs) )
	  .then( (userAttrs) => User.create(userAttrs) )
}

//returns null if the user is not in the database
User.findByEmail = function(emailAddress) {
	return User.findByAttribute(UserHelpers.getTrimmedEmail(emailAddress), 'email')
	  .then( users => users[0] || null);
}

User.updatePassword = function(id, newPassword) {
	return UserHelpers.getHashedPassword(newPassword)
	  .then( hash => User.update({id}, {password: hash}) )
}


User.checkIfDuplicateEmail = function(userAttrs) {
	return User.findByEmail(userAttrs.email)
	  .then( found => {
	  	if (!found) {
	  		return userAttrs
	  	} else {
	  		let errMsg = 'An account already exists for email address ' + userAttrs.email;
	  		throw new Error(errMsg);
	  	}
	  })
}



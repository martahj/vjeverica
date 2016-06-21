const Promise = require('bluebird');
// const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

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
User.createUser = (userAttrs) => {
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
	  .then( (userAttrs) => UserHelpers.ensureAdmin(userAttrs) )
	  .then( (userAttrs) => UserHelpers.encryptPassword(userAttrs) )
	  .then( (userAttrs) => User.create(userAttrs) )
	  // .then( (created) => {
	  // 	console.log('created', created);
	  // })
}

User.findByEmail = (emailAddress) => {
	return User.findByAttribute(UserHelpers.getTrimmedEmail(emailAddress), 'email')
	  .then( users => users[0] )
}



/*
  Helper functions
*/


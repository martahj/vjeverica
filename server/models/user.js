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
	return checkForValidEmail(userAttrs)
	  .then( () => encryptPassword(userAttrs) )
	  .then( userAttrs => User.create(userAttrs));
}




/*
  Helper functions
*/


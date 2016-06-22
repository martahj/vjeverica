const Promise = require('bluebird');
const jwt = require('jsonwebtoken');
const jwtPromised = Promise.promisifyAll(jwt);

const db = require('../db.js');
const ModelHelper = require('./modelHelper');

let tokenAttributes = [
  ModelHelper.makeAttr('token', true)
];

const Token = ModelHelper.createModel('tokens', tokenAttributes);
module.exports = Token;

Token.createToken = function(email) {

}
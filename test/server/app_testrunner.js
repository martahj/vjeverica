"use strict"

const SSR = require('../helpers/helper.js').ssrRoutes;
const CLIENT = require('../helpers/helper.js').clientRoutes;

/*
  Test server
*/
const appTest = require('./app_test.js');

appTest(SSR, 'serverside rendering');
appTest(CLIENT, 'client-side rendering');
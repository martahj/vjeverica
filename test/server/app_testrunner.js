"use strict"

const ssrRoutes = require('../helpers/helper.js').ssrRoutes;
const clientRoutes = require('../helpers/helper.js').clientRoutes;
const appTest = require('./app_test.js');

appTest(ssrRoutes, 'serverside rendering');
appTest(clientRoutes, 'client-side rendering');
require('babel-register')();

var jsdom = require('jsdom').jsdom;

// var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('<body><div id="root"></div></body>');
global.window = document.defaultView;
global.navigator = window.navigator;
// Object.keys(document.defaultView).forEach((property) => {
//   if (typeof global[property] === 'undefined') {
//     exposedProperties.push(property);
//     global[property] = document.defaultView[property];
//   }
// });

global.navigator = {
  userAgent: 'node.js'
};

// documentRef = document;
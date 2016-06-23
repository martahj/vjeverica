"use strict"

const Promise = require('bluebird');

const db = require('../db.js');
const ModelHelper = require('./modelHelper');

let bioAttributes = [
  ModelHelper.makeAttr('text', true),
  ModelHelper.makeAttr('order', true)
];

const Bio= ModelHelper.createModel('bio', bioAttributes);
module.exports = Bio;

Bio.addBio = function(bioAttrs) {
	return Bio.checkForOrder(bioAttrs)
	  .then( bioAttrs => Bio.orderConflicts(bioAttrs) )
	  .then( hasConflict => {
	  	if (hasConflict) {
	  		return Bio.reorder(bioAttrs.order)
	  	} else {
	  		return
	  	}
	  })
	  .then( () => Bio.create(bioAttrs) )
}

Bio.getAllBios = function() {
	let successDescription = 'Success retrieving all entries from ' + this.table;
	let failureDescripion = 'Failure retrieving all entries from ' + this.table;

	return db.select('*').from(this.table).orderBy('order', 'asc')
	.then( result => this.reportSuccess(successDescription, result) )
	.catch( err => this.reportError(failureDescripion, result) )
}

Bio.updateBio = function(id, updateAttrs) {
	return new Promise( (resolve, reject) => {
		if (updateAttrs.order) {
			return Bio.orderConflicts(updateAttrs)
			  .then( conflicts => {
			  	if (conflicts) {
			  		return Bio.reorder(updateAttrs.order)
			  	} else {
			  		return;
			  	}
			  })
			  .then( () => resolve() )
		} else {
			resolve();
		}
	})
	.then( () => Bio.update({id}, updateAttrs))
}

Bio.checkForOrder = function(bioAttrs) {
	return new Promise( (resolve, reject) => {
		if (bioAttrs.order) {
			resolve(bioAttrs);
		} else {
			reject('order')
		}
	})
	.catch( err => Bio.throwRequiredError('order') )
}

Bio.orderConflicts = function(bioAttrs) {
	return Bio.orderInDb(bioAttrs.order);
}

Bio.orderInDb = function(order) {
	return Bio.findByAttribute(order, 'order')
	  .then( bios => bios.length > 0 )
}

//returns all bio paragraphs that come at order or later
Bio.getAllAfter = function(start) {
	return db.select('*').from(this.table).orderBy('order', 'asc').where( function() {
		this.where('order', start).orWhere('order', '>', start);
	})
}

//shifts all starting at start by offset (which defaults to 1)
Bio.reorder = function(start, offset = 1) {
	let description = 'updating all bios starting with ' + start + ' with offset of ' + offset;
	let successDescription = 'Success ' + description;
	let failureDescripion = 'Failure ' + description;

	return Bio.getAllAfter(start)
	  .then( paragraphs => Promise.all(paragraphs.map( paragraph => {
	  	let selector = {id: paragraph.id};
	  	let change = {order: paragraph.order + offset}; 
	  	return Bio.update(selector, change);
	  })))
	  .then( result => this.reportSuccess(successDescription, result) )
	  .catch( err => this.reportError(failureDescripion, err) )
}



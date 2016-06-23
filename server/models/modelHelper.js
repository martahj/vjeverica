const db = require('../db.js');

const modelHelper = {};
module.exports = modelHelper;

modelHelper.makeAttr = (name, required) => {
	let Attr = {};
	Attr.name = name;
	Attr.required = required;
	return Attr;
}

modelHelper.createModel = (tableName, attrs) => {
	let Model = {};

	Model.table = tableName;
	Model.attrs = attrs.map( attr => attr.name);
	Model.required = attrs.map( attr => attr.required ? attr.name : null)
	                      .filter( attr => !!attr );


	Model.getTable = () => tableName;
	Model.getAttrs = () => attrs;

	Model.reportError = (description, error) => {
		console.log('***', description, '***');
		console.log(error);
		if (error instanceof Error) {
			throw error;
		}
	};

	Model.reportSuccess = (description, result) => {
		console.log('***', description, '***');
		return result;
	};

	//newItemAttrs should be an object with keys corresponding to the attributes
	Model.create = function(newItemAttrs) {
		// console.log('this', this);
		let stillNeedAttr = this.lacksRequired(newItemAttrs)
		if (stillNeedAttr !== undefined) {
			this.throwRequiredError(stillNeedAttr)
		} else {
			return db(this.table).insert(newItemAttrs)
			  .then( (result) => this.reportSuccess('Success inserting into ' + this.table, result))
		}
	};

	Model.throwRequiredError = function(absentProperty) {
		let description = 'Error inserting into table ' + this.table;
		let err = new Error(absentProperty + ' is a required field');
		this.reportError(description, err);
	}

	//returns undefined or the name of the required but lacking attribute
	Model.lacksRequired = function(newItemAttrs) {
		let needsThis = (attr) => newItemAttrs[attr] === undefined || newItemAttrs[attr] === null;

		return this.required.reduce( (lacks, current) => {
			return lacks === undefined ? (needsThis(current) ? current : undefined) : lacks;
		}, undefined);
	};

	Model.getAll = function() {
		let successDescription = 'Success retrieving all entries from ' + this.table;
		let failureDescripion = 'Failure retrieving all entries from ' + this.table;
		return db.select('*').from(this.table)
		  .then( result => this.reportSuccess(successDescription, result) )
		  .catch( err => this.reportError(failureDescripion, result) )
	};

	//returns the element searched for, or else an empty array
	Model.findById = function(id) {
		return this.findByAttribute(id, 'id')
		  .then( matching => {
		  	if (matching.length > 1) {
		  		throw new Error('multiple entries in ' + this.table + ' with id ' + id)
		  	} else {
		  		return matching[0] || matching;
		  	}
		  })
	};

	//returns an array of elements matching the search
	Model.findByAttribute = function(searchTerm, attribute) {
		let successDescription = 'Success searching for entries in ' + this.table + ' where ' + searchTerm + '=' + attribute;
		let failureDescripion = 'Error searching for entries in ' + this.table + ' where ' + searchTerm + '=' + attribute;

		let searchObject = {};
		searchObject[attribute] = searchTerm;

		return db.select('*').from(this.table).where(searchObject)
		  .then( result => this.reportSuccess(successDescription, result) )
		  .catch( err => this.reportError(failureDescripion, err) )
	};

	Model.update = function(selectorAttributes, updateAttributes) {
		let successDescription = 'Success updating entries in ' + this.table + ' where ' + selectorAttributes;
		let failureDescripion = 'Failure updating entries in ' + this.table + ' where ' + selectorAttributes;

		return db(this.table).where(selectorAttributes).update(updateAttributes)
		  .then( result => this.reportSuccess(successDescription, result) )
		  .catch( err => this.reportError(failureDescripion, err) )
	};

	Model.delete = function(id) {
		let successDescription = 'Success deleting entry with id ' + id + ' from ' + this.table;
		let failureDescripion = 'Failure deleting entry with id ' + id + ' from ' + this.table;
		
		return db(this.table).where({id}).del()
		  .then( result => this.reportSuccess(successDescription, result) )
		  .catch( err => this.reportError(failureDescripion, err) )
	}



	return Model;
}
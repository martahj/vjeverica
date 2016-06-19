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
	Model.create = (newItemAttrs) => {
		let stillNeedAttr = lacksRequired(newItemAttrs)
		if (stillNeedAttr !== undefined) {
			let description = 'Error inserting into table ' + this.table;
			let err = new Error('Attribute', stillNeedAttr, 'is required');
			this.reportError(description, err);
		} else {
			return db(this.table).insert(newItemAttrs)
			  .then( (result) => this.reportSuccess('Success inserting into ' + this.table, result))
		}
	};

	//returns undefined or the name of the required but lacking attribute
	Model.lacksRequired = (newItemAttrs) => {
		let needsThis = (attr) => newItemAttrs[attr] === undefined || newItemAttrs[attr] === null;

		return this.required.reduce( (lacks, current) => {
			return lacks === undefined ? (needsThis(current) ? current : undefined) : lacks;
		}, undefined);
	};

	Model.getAll = () => {
		let successDescription = 'Success retrieving all entries from ' + this.table;
		let failureDescripion = 'Failure retrieving all entries from ' + this.table;
		return db.select('*').from(this.table)
		  .then( result => this.reportSuccess(successDescription, result) )
		  .catch( err => this.reportFailure(failureDescripion, result) )
	};

	Model.findById = (id) => {
		return this.findByAttribute(id, 'id')
		  .then( matching => {
		  	if (matching.length > 1) {
		  		throw new Error('')
		  	} else {
		  		return matching[0] || matching;
		  	}
		  })
	};

	Model.findByAttribute = (searchTerm, attribute) => {
		let successDescription = 'Success searching for entries in ' + this.table + ' where ' + searchTerm + '=' + attribute;
		let failureDescripion = 'Error searching for entries in ' + this.table + ' where ' + searchTerm + '=' + attribute;

		let searchObject = {};
		searchObject[attribute] = searchTerm;

		return db.select('*').from(this.table).where(searchObject)
		  .then( result => this.reportSuccess(successDescription, result) )
		  .catch( err => this.reportFailure(failureDescripion, err) )
	};



	return Model;
}
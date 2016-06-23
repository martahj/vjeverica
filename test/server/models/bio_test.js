"use strict"

const helper = require('../../helpers/helper.js');
const db = helper.db;
const expect = helper.expect;
const Bio = helper.Bio;

describe('******* Bio model ******* ', function() {

	let missingOrderMsg = 'order is a required field';
	let missingTextMsg = 'text is a required field';

	let bio1 = {
		text: 'first added',
		order: 1
	}
	let bio1Id;
	let newBio1Text = 'changed!'
	// let newBio1Order = 5;

	let bio2 = {
		text: 'second added',
		order: 2
	}
	let bio2Id;
	let newBio2Order = 7;

	let bio3 = {
		text: 'third added',
		order: 3
	}
	let bio3Id;
	let newBio3Text = 'changed this';
	let newBio3Order = 3;

	let bio4 = {
		text: 'fourth added',
		order: 4
	}

	let bio5 = {
		text: 'fifth added',
		order: 3
	}

	let bio6 = {
		text: 'sixth added',
		order: 3
	}

	let noOrder = {
		text: 'should not be added'
	}

	let noText = {
		order: 7
	}

	it('given an order, it returns whether there is a paragraph with an order in the database', function() {
		return Bio.create(bio1)
		  .then( () => Bio.orderInDb(bio1.order) )
		  .then( bio1OrderInDb => {
		  	expect(bio1OrderInDb).to.be.true;

		  	return Bio.orderInDb(bio2.order)
		  })
		  .then( bio2OrderInDb => {
		  	expect(bio2OrderInDb).to.be.false;
		  })
	})

	it('given a prospective bio, it returns whether there is a conflicting order', function() {
		return Bio.orderConflicts(bio1)
		  .then( orderConflict => {
		  	expect(orderConflict).to.be.true;

		  	return Bio.orderConflicts(bio2)
		  })
		  .then( orderConflict => {
		  	expect(orderConflict).to.be.false;
		  })
	})

	it('accepts elements with order fields and rejects those without', function() {
		return Bio.checkForOrder(noOrder)
		  .then( () => {
		  	expect(false).to.be.true;
		  	return;
		  })
		  .catch( err => {
		  	expect(err).to.be.an.instanceof(Error);
		  	expect(err.message).to.equal(missingOrderMsg);
		  	return;
		  })
		  .then( () => Bio.checkForOrder(bio1) )
		  .then( attrs => {
		  	expect(attrs).to.be.an.object;
		  	expect(helper.noDifference(bio1, attrs));
		  })
	})

	it('returns all bios starting with a given order, in ascending order', function() {
		return Bio.create(bio2)
		  .then( () => Bio.create(bio3) )
		  .then( () => Bio.create(bio4) )
		  .then( () => Bio.getAllAfter(3) )
		  .then( allAfter => {
		  	expect(allAfter).to.be.an('array');
		  	expect(allAfter).to.have.length(2);
		  	expect(helper.allPropertiesMatch(bio3, allAfter[0])).to.be.true;
		  	expect(helper.allPropertiesMatch(bio4, allAfter[1])).to.be.true;
		  })
	})

	it('increases the order of all bios starting at a given order', function() {
		return Bio.reorder(3)
		  .then( () => Bio.getAllAfter(3) )
		  .then( all => {
		  	expect(all).to.be.an('array');
		  	expect(all).to.have.length(2);

		  	expect(helper.propertyMatches(bio3.text, all[0].text)).to.be.true;
		  	expect(all[0].order).to.equal(4);

		  	expect(helper.propertyMatches(bio4.text, all[1].text)).to.be.true;
		  	expect(all[1].order).to.equal(5);
		  })
	})

	it('errors if you try to add a bio leaving out a required field', function() {
		return Bio.addBio(noText)
		  .catch( err => {
		  	expect(err).to.be.an.instanceof(Error);
		  	expect(err.message).to.equal(missingTextMsg);

		  	return Bio.addBio(noOrder)
		  })
		  .catch( err => {
		  	expect(err).to.be.an.instanceof(Error);
		  	expect(err.message).to.equal(missingOrderMsg);
		  })
	})

	it('adds paragraphs and returns them in order', function() {
		return Bio.addBio(bio5)
		  .then( () => Bio.getAllBios() )
		  .then( bios => {
		  	expect(bios).to.be.an('array');
		  	expect(bios).to.have.length(5);

		  	console.log('bios so far', bios);

		  	expect(helper.propertyMatches(bio1.text, bios[0].text)).to.be.true;
		  	expect(helper.propertyMatches(bio2.text, bios[1].text)).to.be.true;
		  	expect(helper.propertyMatches(bio5.text, bios[2].text)).to.be.true;
		  	expect(helper.propertyMatches(bio3.text, bios[3].text)).to.be.true;
		  	expect(helper.propertyMatches(bio4.text, bios[4].text)).to.be.true;

		  	bio1Id = bios[0].id;
		  	bio2Id = bios[1].id;
		  	bio3Id = bios[3].id;
		  })
	})

	it('bumps the others down if you add a conflicting order', function() {
		return Bio.addBio(bio6)
		  .then( () => Bio.getAllBios() )
		  .then( bios => {
		  	expect(bios).to.be.an('array');
		  	expect(bios).to.have.length(6);

		  	expect(helper.propertyMatches(bio1.text, bios[0].text)).to.be.true;
		  	expect(helper.propertyMatches(bio2.text, bios[1].text)).to.be.true;
		  	expect(helper.propertyMatches(bio6.text, bios[2].text)).to.be.true;
		  	expect(helper.propertyMatches(bio5.text, bios[3].text)).to.be.true;
		  	expect(helper.propertyMatches(bio3.text, bios[4].text)).to.be.true;
		  	expect(helper.propertyMatches(bio4.text, bios[5].text)).to.be.true;
		  })
	})

	it('updates only the text', function() {
		return Bio.updateBio(bio1Id, {text: newBio1Text})
		  .then( () => Bio.findById(bio1Id) )
		  .then( bio => {
		  	expect(bio).to.be.an('object');
		  	expect(bio.text).to.equal(newBio1Text);
		  })
	})

	it('updates only the order', function() {
		return Bio.updateBio(bio2Id, {order: newBio2Order})
		  .then( () => Bio.findById(bio2Id) )
		  .then( bio => {
		  	expect(bio).to.be.an('object');
		  	expect(bio.order).to.equal(newBio2Order);
		  })
	})

	it('updates the text and order simultantiously', function() {
		return Bio.updateBio(bio3Id, {text: newBio3Text, order: newBio3Order})
		  .then( () => Bio.findById(bio3Id) )
		  .then( bio => {
		  	expect(bio).to.be.an('object');
		  	expect(bio.text).to.equal(newBio3Text);
		  	expect(bio.order).to.equal(newBio3Order);
		  })
	})

	it('reorders other bios on order change', function() {
		return Bio.getAllBios()
		  .then( bios => {
		  	expect(bios).to.be.an('array');
		  	expect(bios).to.have.length(6);

		  	expect(helper.propertyMatches(bio1.text, bios[0].text)).to.be.true;
		  	expect(helper.propertyMatches(bio6.text, bios[1].text)).to.be.true;
		  	expect(helper.propertyMatches(bio3.text, bios[2].text)).to.be.true;
		  	expect(helper.propertyMatches(bio5.text, bios[3].text)).to.be.true;
		  	expect(helper.propertyMatches(bio4.text, bios[4].text)).to.be.true;
		  	expect(helper.propertyMatches(bio3.text, bios[5].text)).to.be.true;

		  })
	})

	it('deletes a bio by id', function() {
		return Bio.delete(bio3Id)
		  .then( () => Bio.findById(bio3Id) )
		  .then( empty => {
		  	expect(empty).to.be.an('array');
		  	expect(empty).to.have.length(0);
		  })
	})
})
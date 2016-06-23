"use strict"

const helper = require('../../helpers/helper.js');
const db = helper.db;
const expect = helper.expect;
const Bio = helper.Bio;

describe('******* Bio model ******* ', function() {

	let bio1 = {
		text: 'first added',
		order: 3
	}
	let bio1Id;
	let newBio1Text = 'changed!'
	let newBio1Order = 2;

	let bio2 = {
		text: 'second added',
		order: 1
	}

	let bio3 = {
		text: 'third added',
		order: 1
	}

	let bio4 = {
		text: 'fourth added',
		order: 3
	}

	it('adds paragraphs and returns them in order', function() {
		return Bio.addBio(bio1)
		  .then( () => Bio.addBio(bio2) )
		  .then( () => Bio.getAllBios() )
		  .then( bios => {
		  	expect(bios).to.be.an('array');
		  	expect(bios).to.have.length(2);
		  	expect(helper.allPropertiesMatch(bio1, bios[0])).to.be.true;
		  	expect(helper.allPropertiesMatch(bio2, bios[1])).to.be.true;
		  	bio1Id = bio[0].id;
		  })
	})

	it('lets you update the text and order', function() {
		return Bio.updateBio(bio1Id, {text: newBio1Text, order: newBio1Order})
		  .then( () => Bio.findById(bio1Id) )
		  .then( bio => {
		  	expect(bio).to.be.an('object');
		  	expect(bio.text).to.equal(newBio1Text);
		  	expect(bio.order).to.equal(newBio1Order);
		  })
	})

	it('checks if the order conflicts', function() {
		return Bio.orderConflicts(bio3)
		  .then( conflicts => {
		  	expect(conflicts).to.be.true;

		  	return Bio.orderConflicts(bio4)
		  })
		  .then( conflicts => {
		  	expect(conflicts).to.be.false;
		  })
	})

	it('bumps the others down if you add a conflicting order', function() {
		return Bio.addBio(bio3)
		  .then( () => Bio.getAllBios() )
		  .then( bios => {
		  	expect(bios).to.be.an('array');
		  	expect(bios).to.have.length(3);
		  	expect(helper.allPropertiesMatch(bio3, bios[0])).to.be.true;
		  	expect(helper.allPropertiesMatch(bio2, bios[1])).to.be.true;
		  	expect(bios[2].id).to.equal(bio1Id);
		  })
	})

	it('bumps the others down if you try to change to a conflicitng order', function() {
		return Bios.updateBio(bio1Id, {order: 1})
		  .then( () => Bio.getAllBios() )
		  .then( bios => {
		  	expect(bios).to.be.an('array');
		  	expect(bios).to.have.length(3);
		  	expect(bios[0].id).to.equal(bio1Id);
		  	expect(helper.allPropertiesMatch(bio3, bios[1])).to.be.true;
		  	expect(helper.allPropertiesMatch(bio2, bios[2])).to.be.true;
		  })
	})

})
"use strict"

const Contact = {};
module.exports = Contact

let contact = {
	email: 'example@hi.com',
	phone: '412-not-anum',
	message: 'Hi! Please contact me via email or phone - email better for x, phone for y'
}

Contact.get = () => contact;


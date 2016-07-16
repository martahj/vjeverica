"use strict"
// import rootActions from '../actions/rootActions';

const defaultState = {
	user: {
		isFetching: false,
		username: null,
		recievedAt: null
	},
	bio: {
		isFetching: false,
		bios: ['test bio'],
		recievedAt: null
	},
	intro: {
		isFetching: false,
		text: [{id: 90, text:'One'}, {id: 91, text: 'two'}],
		recievedAt: null
	}
}

export default defaultState;
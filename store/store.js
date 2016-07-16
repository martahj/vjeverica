import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
// import createLogger from 'redux-logger'
// const loggerMiddleware = createLogger();
import defaultState from './defaultState';
import root from '../reducers/root';


console.log('default state in store', defaultState);

let reducer = (state, action) => {
	return state;
}

// let store = () => {
// 	return createStore(reducer, defaultState, applyMiddleware(thunk));
// }
let store = createStore(root, defaultState, applyMiddleware(thunk));

export default store;

/* 
action
*/
//example
// {
// 	type: 'ADD_BIO',
// 	data: {
// 		text: 'blah!'
// 	}
// }

//action creator
// function addBio(text) {
// 	return {
// 		type: 'ADD_BIO',
// 		text: text
// 	}
// }

// function deleteBio(id) {
// 	return {
// 		type: 'REMOVE_BIO',
// 		id: id
// 	}
// }

// function bioReducer(state, action) {
// 	switch (action.type) {
// 		case 'ADD_BIO':
// 		  let newState = Object.assign({}, state);
// 		  newState.bio.bios = [...state.bio.bios, action.text ]
// 		  return newState;
// 		default: 
// 		  return state;
// 	}
// }
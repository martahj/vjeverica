"use strict"

// import {combineReducers} from 'redux';

import defaultState from '../store/defaultState.js';

function root (state=defaultState, action) {
	switch (action.type) {

		case 'CHANGE_INTRO':
		  console.log('inside change intro reducer');
		  let newState = Object.assign({}, state);
		  newState.intro.text = [...state.intro.text.slice(0, action.id), 
		                         {text: action.text},
		                         ...state.intro.text.slice(action.id + 1, state.intro.text.length)
		                        ];
		  console.log('old state', state);
		  console.log('new state', newState);
		  return newState;

		case 'FETCH_DATA':
		  console.log('inside fetch data reducer');
		  // return fetch('/data')
		  //   .then( data => {
		  //   	console.log('got data from ')
		  //   })
		  return state;

		default:
		  return state;
	}
}

export default root;
"use strict"
// import {combineReducers} from 'redux';

import defaultState from '../store/defaultState.js';

function root (state=defaultState, action) {
	switch (action.type) {

		case 'CHANGE_INTRO':
		  let newState = Object.assign({}, state);
		  newState.intro.text = [...state.intro.text.slice(0, action.id), 
		                         {text: action.text},
		                         ...state.intro.text.slice(action.id + 1, state.intro.text.length)
		                        ];
		  return newState;

		default:
		  return state;
	}
}

export default root;
"use strict"

// import {combineReducers} from 'redux';

//Default application state
import defaultState from '../store/defaultState.js';

import getInitialState from '../client/api/getInitialState';

function root (state=defaultState, action) {
	switch (action.type) {

		case 'CHANGE_INTRO':
		  console.log('inside change intro reducer');
		  // let newState = Object.assign({}, state);
		  // newState.intro.text = [...state.intro.text.slice(0, action.id), 
		  //                        {text: action.text},
		  //                        ...state.intro.text.slice(action.id + 1, state.intro.text.length)
		  //                       ];
		  // console.log('old state', state);
		  // console.log('new state', newState);
		  return Object.assign(
		  	{}, 
		  	state,
		  	{intro: {
		  		      text: [...state.intro.text,
		                    {id: action.id + 4, text: action.text, receivedAt: null}
		                   ]
		            }
		    }
		  )

		case 'GET_DATA':
		  console.log('inside get data reducer, state is', state);
		  // let newState = Object.assign({}, state, {bio: {isFetching: true}}, {intro: {isFetching: true}});
		  return Object.assign(
		  	{},
		  	state,
		  	{bio: {isFetching: true, bios: state.bio.bios, receivedAt: state.bio.receivedAt}},
		  	{intro: {isFetching: true, text: state.intro.text, receivedAt: state.intro.receivedAt}}
		  )

		case 'RECEIVE_DATA':
		  console.log('inside recieve data reducer, state is', state);
		  let {data, receivedAt} = action;
		  console.log('data', data, 'receivedAt', receivedAt);
		  return Object.assign(
		  	 {}, 
		  	 state, 
		  	 {bio: {bios: data.bio, receivedAt, isFetching: false}}, 
		  	 {intro: {text: data.intro, receivedAt, isFetching: false}}
		  )

		default:
		  return state;
	}
}

export default root;

export default root;
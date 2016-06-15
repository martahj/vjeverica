import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import defaultState from './defaultState';
import rootReducer from './rootReducer';

console.log('default state in store', defaultState);

let reducer = (state, action) => {
	return state;
}

let store = () => {
	return createStore(reducer, defaultState, applyMiddleware(thunk));
}

export default store;
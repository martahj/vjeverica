import fetch from 'isomorphic-fetch';

const getInitialState = () => {
	fetch('/initialState')
	  .then( resp => resp.json() )
	  .then( data => {
	  	console.log('GOT DATA!', data);
	  	return data;
	  })
}

export default getInitialState;
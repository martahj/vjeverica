import fetch from 'isomorphic-fetch';
import Promise from 'bluebird';

const getInitialState = () => {
	return new Promise( (resolve, reject) => {
		fetch('/initialState')
		  .then( resp => resp.json() )
		  .then( data => {
		  	console.log('GOT DATA!', data);
		  	resolve(data);
		  })
	})
	// fetch('/initialState')
	//   .then( resp => resp.json() )
	//   .then( data => {
	//   	console.log('GOT DATA!', data);
	//   	return data;
	//   })
}

export default getInitialState;
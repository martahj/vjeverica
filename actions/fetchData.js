// import getInitialState from '../client/api/getInitialState';

export const GET_DATA = 'GET_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';

export const getData = () => {
	return {
		type: GET_DATA
	}
}

export const receiveData = (json) => {
	return {
		type: RECEIVE_DATA,
		data: json,
		receivedAt: Date.now()
	}
}

// export const fetchData = () => {
// 	dispatch(getData())

// 	return getInitialState()
// 	  .then( data => {
// 	  	dispatch(receiveData(data));
// 	  })
// }
// const store = require('../store/store.js');

const FETCH_DATA = 'FETCH_DATA';

/* Template
{type: FETCH_DATA}
*/

let fetchData = () => {
	return {
		type: FETCH_DATA
	}
}

let dispatch_fetchData = () => dispatch(fetchData())

export default dispatch_fetchData
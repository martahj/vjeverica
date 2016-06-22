/*
action
*/
const ADD_TODO = 'ADD_TODO'

{
  type: ADD_TODO,
  text: 'Build my first Redux app'
}


/*
action creator
*/

function addToDo(text) {
	return {
		type: ADD_TODO,
		text: text
	}
}

store.dispatch(addToDo(text))
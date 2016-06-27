const CHANGE_INTRO = 'CHANGE_INTRO';

let changeIntro = (id, newText) => {
	console.log('inside changeIntro', id, newText)
	return {
		id: id,
		type: CHANGE_INTRO,
		text: newText
	}
}

// let dispatch_changeIntro = (id, newText) => dispatch(changeIntro(id, newText))

export default changeIntro;
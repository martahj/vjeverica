const pmongo = require('promised-mongo');

if ( process.env.NODE_ENV === 'test' ) {
  var db = pmongo('vjev-test');
}
else {
  var db = pmongo('vjev-dev');
}

const collections = [
  // 'users',
  // 'biotext',
  // 'images',
  // 'sessions',
  // 'lessonsText',
  // 'cds',
  'calendarEvents'
  // 'majorEvents',
];

const deleteTable = (tablename) => {
	return db(tablename).delete()
	  .then( (numberDeleted) => {
	  	console.log('deleted', numberDeleted, 'records from', tablename);
	  	return;
	  })
}

db.deleteEverything = () => {
	return Promise.all(collections.map( coll => deleteTable(coll) )
	.then( () => {
		console.log('Dropped all collections');
		return;
	})
}

export default db;

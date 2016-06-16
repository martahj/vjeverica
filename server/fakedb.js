"use strict"

const fakeDb = {

	events: [
	  { id: 1,
	  	title: "Blue Dahlia Bistro",
	  	startDate: '2016-06-19',
	  	image: null,
	  	price: null,
	  	endDate: '2016-06-19',
	  	startTime: 1200,
	  	endTime: 1400,
	  	allDay: false,
	  	featured: false,
	  	location: '1115 East 11th St., Austin',
	  	description: 'Enjoy romantic and fun European favorites from Italy, France, and other Mediterranean lands at this organic, trendy, and very delicious Bistro.'
	  },
	  { id: 2,
	  	title: "Longhorn Village",
	  	image: null,
	  	price: null,
	  	startDate: '2016-06-19',
	  	endDate: '2016-06-19',
	  	startTime: 1500,
	  	endTime: 1600,
	  	allDay: false,
	  	featured: false,
	  	location: 'Steiner Ranch',
	  	description: "Celebrating Father's Day at Longhorn Village!"
	  },
	  { id: 3,
	  	title: "Spain Tour",
	  	image: null,
	  	price: null,
	  	startDate: '2016-08-03',
	  	startTime: null,
	  	endTime: null,
	  	endDate: '2016-08-03'
	  	allDay: true,
	  	featured: false,
	  	location: null,
	  	description: 'In SPain, soaking up the culture, music, food!'
	  },
	  { id: 4,
	  	title: "Intensive Accordion Workshop with Shirley Johnson",
	  	image: 'ihaveanimage.jpg',
	  	registrationForm: 'blah.doc',
	  	registrationInstructions: 'download this and send to me'
	  	price: '$ 625 Includes Workshop - Food – Lodging !!! Only $ 575 if You make a One - Time Payment by August 1! ',
	  	startDate: '2016-08-03',
	  	startTime: null,
	  	endTime: null,
	  	endDate: '2016-08-03'
	  	allDay: true,
	  	featured: false,
	  	location: null,
	  	description: 'In SPain, soaking up the culture, music, food!'
	  },
	 ],
	repeatEvents: [
	  { id: 1,
	  	title: "Blue Dahlia Bistro",
	  	image: null,
	  	startDate: '2016-06-06',
	  	startTime: 1200,
	  	endTime: 1400,
	  	endDate: null,
	  	active: true,
	  	allDay: false,
	  	featured: false,
	  	location: '1115 East 11th St., Austin',
	  	description: 'Enjoy romantic and fun European favorites from Italy, France, and other Mediterranean lands at this organic, trendy, and very delicious Bistro.'
	  },
	  // { id: 2,
	  // 	title: "Spain Tour",
	  // 	startDate: '2016-08-03',
	  // 	startTime: null,
	  // 	endTime: null,
	  // 	endDate: null,
	  // 	active: true,
	  // 	allDay: true,
	  // 	featured: false,
	  // 	location: null,
	  // 	description: 'In SPain, soaking up the culture, music, food!'
	  // },
	],
	repeat_event: [
	  {repeatEvent: 1, day: 7},
	],
	featuredEvents: [
	  {eventId: 4}
	],
	bio: {
		sagas : [
		  "Shirley Johnson grew up in Pittsburgh, PA. immersed in her Croatian heritage. At the age of ten she began her accordion studies. Throughout her childhood she performed music and dances as a member of various Tamburitza groups. Shirley played prim on the album \"Croatians, Dances They Dance,\" produced by the Duquesne Tamburitzans Institute of Folk Arts. (DU-TAM EH-101.)",
		  "College took her to North Carolina. As a member of the Duke University Chorale she had the opportunity to sing at Carnegie Hall and Disney World.",
		  "In 1979 Shirley traveled to Czechoslovakia with the Pittsburgh Area Slovaks. There she accompanied them on accordion at folk festivals in Detva and Senec as well as on Czechoslovak TV and radio.",
		  "After college she began dancing international folk-dances and became acquainted with the music of other European cultures. Thanks to the East European Folklife Center, which sponsors workshops devoted to Balkan music, Shirley learned techniques specific to those countries from expert accorionists and singers.",
		  "While living in Durham, North Carolina, Shirley directed the women's folk group \"Djevojke,\" was a member of the German Oktoberfest band \"Holzhackern\", and sang in seven productions produced by the Triangle Open Theatre. She also played accordion for the North Carolina Theatre's production of \"Fiddler on the Roof.\" She studied voice with Professor Martha Flowers.",
		  "In 1995 she was awarded an Emerging Artist grant from the Durham Arts Council and recorded her first solo CD, \"Blood Red Rose- Transcending Boundaries: Songs from the Heart of Bosnia, Croatia, and Serbia.\" (VJP036.)",
		  'From 1992 to 1994, living in Rome, Italy, Shirley sang with the "Coro Misto" of "L\'Accademia della Filarmonica," performing throughout Rome, including St. Peter\'s Basilica, Italian radio and TV, and at the Vatican for Pope John Paul II\'s "Papal Concert to Commemorate the Holocaust."',
		  'Since moving to Austin, Texas in 1996 she has performed in concerts, on radio and TV, in clubs, restaurants, festivals, and private parties. For a brief period, Shirley played accordion with the Indie rock band, \"The Invincible Czars\", including a showcase at the 2004 South by Southwest Music Festival. Shirley is the accordionist on \"The Happytones Play Politics\" CD and for Scott Morgan Biggs\'s 2005 short film \"Hills Like White Elephants.\"',
		  'In the summer of 2005, Shirley produced her second CD:"Where to Now? Folk Music from Many European Lands." (VJP046)',
		  'In March, 2006 Shirley presented a workshop on “Balkan Accordion Styles” at the National Accordion Association Convention in Dallas, TX and again in September of that year at the Wilmington Accordion Festival in Delaware. Later that year she performed music from her Croatian heritage at the San Antonio International Accordion Festival. She has performed for various folk dance clubs in Texas, North Carolina, and Pittsburgh, PA. In spring of 2009 Shirley was the accordionist for the Austin Lyric Opera and University of Texas Butler School of Music production of “ La Curandera.”',
		  'While maintaining a regular performance schedule, in July, 2009 Shirley began teaching accordion, hoping to pass on her knowledge and love of her instrument and music to the next generation.'
		]
	},
	buyCds: {
		cds: [
		  {
		  	id: 1,
		  	name: 'Where to Now? Folk Music from Many European Lands',
		  	image: 'url/wheretonow',
		  	price: '$15 plus shipping and handling',
		  	link: 'paypal.com/wheretonow',
		  	available: false,
		  	featured: true
		  },
		  {
		  	id: 2,
		  	name: 'Blood Red Rose',
		  	image: 'url/brr',
		  	price: '$10 plus shipping and handling',
		  	link: 'paypal.com/bloodredrose',
		  	available: true,
		  	featured: false
		  },
		]
		songs: [
		  { id: 1,
		  	name: "Con Te Partiro (\"Time to Say Goodbye\")",
		  	origin: "Italy"
		  	artist: "F. Sartori/ L. Quarantotto/ F. Peterson",
		  	production: "EMI Music Inc. OBO Sugar Melodi Inc./S.I.A.R. Direzioni Generale"
		  },
		  { id: 2,
		  	name: "Diachovo Horo",
		  	origin: "Bulgaria"
		  	artist: "Ivan Milev",
		  	production: null
		  },
		  { id: 3,
		  	name: "Hora din Goicesti",
		  	origin: "Romania"
		  	artist: "Trad",
		  	production: null
		  },
		  { id: 4,
		  	name: "Govori Se Da Me Varas",
		  	origin: null,
		  	artist: "Zvonko Bogdan",
		  	production: null
		  }
		],
		cd_songs: [
			{cd: 1, song: 1},
			{cd: 1, song: 2},
			{cd: 1, song: 3},
			{cd: 2, song: 4},
		],
		artists: [
			{id: 1, name: 'Shirley Johnson'}, 
			{id: 2, name: "Kruno Spisic"},
			{id: 3, name: "Tony Dren"},
		],
		cd_artists: [
		  {artist: 1, cd: 1, role: "vocals, accordion, prim"},
		  {artist: 2, cd: 1, role: "vocals, brac, bass, bugarija"},
		  {artist: 1, cd: 2, role: "vocals, accordion, prim"},
		  {artist: 3, cd: 2, role: "vocals"}, 
		]
	},
	lessons: {
		intro: 'blah',
		pricingNotes: 'It is recommended that elementary through high school children take weekly lessons that are 25 minutes in length.' 
	},
	lessonPricing: [
	  {time: 55, price: 35.00, }
	]
	contact: {
		email: 'hi',
		phone: '43-232'
		notes: 'Please contact me by email'
	}

}
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Box from '../formatting/box.jsx';

class History extends Component {
	render () {

		let sagas = [
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

		let paragraphs = sagas.map( saga => <p>{saga}</p>);

		return (
			<Box>
			  {paragraphs}
			</Box>
		)
	}
}

export default History;

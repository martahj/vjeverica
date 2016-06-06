import React, {Component} from 'react';
import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';

import App from '../components/app.jsx';
import Main from '../components/main.jsx';
import Bio from '../components/bio.jsx';
import UpcomingPerformances from '../components/upcomingPerformances.jsx';
import AccordionLessons from '../components/accordionLessons.jsx';
import BuyCds from '../components/buyCds.jsx';
import Contact from '../components/contact.jsx';

export default (
	<Router >
	  <Route path="/" component={App}>
	    <IndexRoute component={Main} />
	    <Route path="bio" component={Bio} />
	    <Route path="/performances" component={UpcomingPerformances} />
	    <Route path="lessons" component={AccordionLessons} />
	    <Route path="cds" component={BuyCds} />
	    <Route path="contact" component={Contact} />
	  </Route>
	</Router>
)
import React from 'react';
import {mount, shallow} from 'enzyme';
import {expect} from 'chai';

import App from '../../components/app.jsx';

describe('<App />', function() {

	it('should return true', function() {

		// const wrapper = shallow(<App />);
		// console.log('wrapper in shallow app', wrapper);
		// console.log('wrapper props', wrapper.props);

		// const mounted = mount(<App />);
		// console.log('mounted app', mounted);
		// console.log('mounted app props', mounted.props);

		expect(true).to.be.true;
	})
})
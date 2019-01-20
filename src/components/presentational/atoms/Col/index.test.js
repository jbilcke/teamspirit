import React from 'react';
import { shallow } from 'enzyme';
import Col from './index';

it('renders without crashing', () => {
  shallow(<Col />);
});
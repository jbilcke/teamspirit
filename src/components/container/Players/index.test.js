import React from 'react';
import { shallow } from 'enzyme';
import Players from './index';

it('renders without crashing', () => {
  shallow(<Players />);
});
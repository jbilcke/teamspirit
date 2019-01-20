import React from 'react';
import { shallow } from 'enzyme';
import Teams from './index';

it('renders without crashing', () => {
  shallow(<Teams />);
});
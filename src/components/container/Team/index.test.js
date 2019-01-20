import React from 'react';
import { shallow } from 'enzyme';
import Team from './index';

// yeah, don't mock history..
const mockHistory = {
  action: 'PUSH',
  block: () => {},
  createHref: () => {},
  go: () => {},
  goBack: () => {},
  goForward: () => {},
  listen: () => {},
  location: {
    hash: '',
    pathname: '',
    search: '',
  },
  push: () => {},
  replace: () => {},
};

it('renders without crashing', () => {
  shallow(<Team
    history={mockHistory} />);
});
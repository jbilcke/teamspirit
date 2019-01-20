import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

it('renders without crashing', () => {
  shallow(
    <Header
      title='Title'
    />
  );
  shallow(
    <Header
      title='Title'
      subtitle='Subtitle'
    />
  );
});
import React from 'react';
import { shallow } from 'enzyme';
import Row from './index';

it('renders without crashing', () => {
  shallow(
    <Row />
  );
});
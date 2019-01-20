import React from 'react';
import { shallow } from 'enzyme';
import Card from './index';

it('renders without crashing', () => {
  shallow(
    <Card
      className='test'
      front={() => <p>Front Only</p>}
      onClick={() => {}}
    />
  );
  shallow(
    <Card
      className='test'
      front={() => <p>Front</p>}
      back={() => <p>Back</p>}
      onClick={() => {}}
    />
  );
});
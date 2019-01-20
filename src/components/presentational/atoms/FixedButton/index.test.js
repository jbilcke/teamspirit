import React from 'react';
import { shallow } from 'enzyme';
import FixedButton from './index';

it('renders without crashing', () => {
  shallow(<FixedButton />);
  shallow(
    <FixedButton
      onClick={() => {}}
    />
  );
});
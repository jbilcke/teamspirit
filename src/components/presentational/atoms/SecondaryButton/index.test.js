import React from 'react';
import { shallow } from 'enzyme';
import SecondaryButton from './index';

it('renders without crashing', () => {
  shallow(
    <SecondaryButton />
  );
  shallow(
    <SecondaryButton
      onClick={() => {}}
    />
  );
});
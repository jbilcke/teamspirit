import React from 'react';
import { shallow } from 'enzyme';
import PrimaryButton from './index';

it('renders without crashing', () => {
  shallow(
    <PrimaryButton />
  );
  shallow(
    <PrimaryButton
      onClick={() => {}}
    />
  );
});
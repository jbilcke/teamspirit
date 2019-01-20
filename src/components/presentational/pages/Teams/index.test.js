import React from 'react';
import { shallow } from 'enzyme';
import Teams from './index';
import { teams } from '../../../../fixtures';

it('renders without crashing', () => {
  shallow(
    <Teams
      team={teams[0]}
      onOpen={() => {}}
    />
  );
});
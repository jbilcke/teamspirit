import React from 'react';
import { shallow } from 'enzyme';
import TeamCards from './index';
import { teams } from '../../../../fixtures';

it('renders without crashing', () => {
  shallow(
    <TeamCards
      teams={teams}
      onOpen={() => {}}
    />
  );
});
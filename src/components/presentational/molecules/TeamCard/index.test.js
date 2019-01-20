import React from 'react';
import { shallow } from 'enzyme';
import TeamCard from './index';
import { teams } from '../../../../fixtures';

it('renders without crashing', () => {
  shallow(
    <TeamCard
      team={teams[0]}
      onOpen={() => {}}
    />
  );
});
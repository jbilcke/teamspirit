import React from 'react';
import { shallow } from 'enzyme';
import PlayerCards from './index';
import { players } from '../../../../fixtures';

it('renders without crashing', () => {
  shallow(
    <PlayerCards
      players={players}
    />
  );
  shallow(
    <PlayerCards
      players={players}
      onOpen={() => {}}
      onRemove={() => {}}
    />
  );
});
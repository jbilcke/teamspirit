import React from 'react';
import { shallow } from 'enzyme';
import PlayerCard from './index';
import { players } from '../../../../fixtures';

it('renders without crashing', () => {
  shallow(
    <PlayerCard
      player={players[0]}
    />
  );
  shallow(
    <PlayerCard
      player={players[1]}
      onEdit={() => {}}
      onRemove={null}
    />
  );
  shallow(
    <PlayerCard
      player={players[2]}
      onEdit={() => {}}
      onRemove={() => {}}
    />
  );
  shallow(
    <PlayerCard
      player={{...players[0], strThumb: null}}
      onEdit={() => {}}
      onRemove={() => {}}
    />
  );
});
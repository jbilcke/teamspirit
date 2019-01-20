import React from 'react';
import { shallow } from 'enzyme';
import PlayerForm from './index';
import { players } from '../../../../fixtures';

it('renders without crashing', () => {
  shallow(
    <PlayerForm
      player={null}
      onSubmit={() => {}}
      onCancel={() => {}}
    />
  );
  shallow(
    <PlayerForm
      player={players[0]}
      onSubmit={() => {}}
      onCancel={() => {}}
    />
  );
});
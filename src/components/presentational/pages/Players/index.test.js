import React from 'react';
import { shallow } from 'enzyme';
import Players from './index';
import { players } from '../../../../fixtures';

it('renders without crashing', () => {
  shallow(
    <Players
      players={players}
      onEdit={() => {}}
      onRemove={() => {}}
      onFormSubmit={() => {}}
      onFormCancel={() => {}}
      canShowForm={false}
      editPlayer={null}
    />
  );
  shallow(
    <Players
      players={players}
      onEdit={() => {}}
      onRemove={() => {}}
      onFormSubmit={() => {}}
      onFormCancel={() => {}}
      canShowForm={true}
      editPlayer={null}
    />
  );
  shallow(
    <Players
      players={players}
      onEdit={() => {}}
      onRemove={() => {}}
      onFormSubmit={() => {}}
      onFormCancel={() => {}}
      canShowForm={true}
      editPlayer={players[0]}
    />
  );
});
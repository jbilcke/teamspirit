import React from 'react';
import { shallow } from 'enzyme';
import Team from './index';
import { teams, players } from '../../../../fixtures';

it('renders without crashing', () => {
  shallow(
    <Team
      team={teams[0]}
      onEdit={() => {}}
      onRemove={() => {}}
      onFormSubmit={() => {}}
      onFormCancel={() => {}}
      canShowForm={false}
      editPlayer={null}
    />
  );
  shallow(
    <Team
      team={teams[0]}
      onEdit={() => {}}
      onRemove={() => {}}
      onFormSubmit={() => {}}
      onFormCancel={() => {}}
      canShowForm={true}
      editPlayer={null}
    />
  );
  shallow(
    <Team
      team={teams[0]}
      onEdit={() => {}}
      onRemove={() => {}}
      onFormSubmit={() => {}}
      onFormCancel={() => {}}
      canShowForm={true}
      editPlayer={players[0]}
    />
  );
});
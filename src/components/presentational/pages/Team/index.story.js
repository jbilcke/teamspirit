import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Team from './index';
import { teams, players } from '../../../../fixtures';

storiesOf('Team', module)
  .add('default', () => (
    <Team
      team={teams[0]}
      onEdit={action('onEdit')}
      onRemove={action('onRemove')}
      onFormSubmit={action('onFormSubmit')}
      onFormCancel={action('onFormCancel')}
      canShowForm={false}
      editPlayer={null}
    />
  ))
  .add('add player', () => (
    <Team
      team={teams[0]}
      onEdit={action('onEdit')}
      onRemove={action('onRemove')}
      onFormSubmit={action('onFormSubmit')}
      onFormCancel={action('onFormCancel')}
      canShowForm={true}
      editPlayer={null}
    />
  ))
  .add('edit player', () => (
    <Team
      team={teams[0]}
      onEdit={action('onEdit')}
      onRemove={action('onRemove')}
      onFormSubmit={action('onFormSubmit')}
      onFormCancel={action('onFormCancel')}
      canShowForm={true}
      editPlayer={players[0]}
    />
  ));

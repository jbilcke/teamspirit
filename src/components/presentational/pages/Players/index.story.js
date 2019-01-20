import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Players from './index';
import { players } from '../../../../fixtures';

storiesOf('Players', module)
  .add('default', () => (
    <Players
      players={players}
      onEdit={action('onEdit')}
      onRemove={action('onRemove')}
      onFormSubmit={action('onFormSubmit')}
      onFormCancel={action('onFormCancel')}
      canShowForm={false}
      editPlayer={null}
    />
  ))
  .add('add player', () => (
    <Players
      players={players}
      onEdit={action('onEdit')}
      onRemove={action('onRemove')}
      onFormSubmit={action('onFormSubmit')}
      onFormCancel={action('onFormCancel')}
      canShowForm={true}
      editPlayer={null}
    />
  ))
  .add('edit player', () => (
    <Players
      players={players}
      onEdit={action('onEdit')}
      onRemove={action('onRemove')}
      onFormSubmit={action('onFormSubmit')}
      onFormCancel={action('onFormCancel')}
      canShowForm={true}
      editPlayer={players[0]}
    />
  ));

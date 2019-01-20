import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import PlayerForm from './index';
import { players } from '../../../../fixtures';

storiesOf('PlayerForm', module)
  .add('add player', () => (
    <PlayerForm
      player={null}
      onSubmit={action('onSubmit')}
      onCancel={action('onCancel')}
    />
  ))
  .add('edit player', () => (
    <PlayerForm
      player={players[0]}
      onSubmit={action('onSubmit')}
      onCancel={action('onCancel')}
    />
  ));

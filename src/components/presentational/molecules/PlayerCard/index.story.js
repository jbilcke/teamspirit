import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import PlayerCard from './index';
import { players } from '../../../../fixtures';

storiesOf('PlayerCard', module)
  .add('default', () => (
    <PlayerCard
      player={players[0]}
    />
  ))
  .add('with action buttons', () => (
    <PlayerCard
      player={players[0]}
      onEdit={action('onEdit')}
      onRemove={action('onRemove')}
    />
  ));
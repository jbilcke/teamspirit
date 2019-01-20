import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import PlayerCards from './index';
import { players } from '../../../../fixtures';

storiesOf('PlayerCards', module)
  .add('default', () => (
    <PlayerCards
      players={players}
    />
  ))
  .add('with action buttons', () => (
    <PlayerCards
      players={players}
      onEdit={action('onEdit')}
      onRemove={action('onRemove')}
    />
  ));
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TeamCards from './index';
import { teams } from '../../../../fixtures';

storiesOf('TeamCards', module)
  .add('default', () => (
    <TeamCards
      teams={teams}
      onOpen={action('onOpen')}
    />
  ));
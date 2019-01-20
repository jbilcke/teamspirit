import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TeamCard from './index';
import { teams } from '../../../../fixtures';

storiesOf('TeamCard', module)
  .add('default', () => (
    <TeamCard
      team={teams[0]}
      onOpen={action('onOpen')}
    />
  ));
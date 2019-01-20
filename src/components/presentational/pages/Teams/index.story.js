import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Teams from './index';
import { teams } from '../../../../fixtures';

storiesOf('Teams', module)
.add('default', () => (
    <Teams
      teams={teams}
      onOpen={action('onOpen')}
    />
  ));

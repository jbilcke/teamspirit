import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import FixedButton from './index';

storiesOf('FixedButton', module)
  .add('default', () => (
    <FixedButton onClick={action('onClick')}>🍪</FixedButton>
  ));
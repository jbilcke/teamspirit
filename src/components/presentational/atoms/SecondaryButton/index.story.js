import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SecondaryButton from './index';

storiesOf('SecondaryButton', module)
  .add('default', () => (
    <SecondaryButton />
  ))
  .add('with text', () => (
    <SecondaryButton onClick={action('clicked')}>
      Hello SecondaryButton
    </SecondaryButton>
  ))
  .add('with some emoji', () => (
    <SecondaryButton onClick={action('clicked')}>😀 😎 👍 💯</SecondaryButton>
  ));
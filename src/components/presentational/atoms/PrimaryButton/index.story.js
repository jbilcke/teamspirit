import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import PrimaryButton from './index';

storiesOf('PrimaryButton', module)
  .add('with text', () => (
    <PrimaryButton onClick={action('clicked')}>
      Hello PrimaryButton
    </PrimaryButton>
  ))
  .add('with some emoji', () => (
    <PrimaryButton onClick={action('clicked')}>😀 😎 👍 💯</PrimaryButton>
  ));
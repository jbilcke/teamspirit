import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import FlatButton from './index';

storiesOf('FlatButton', module)
  .add('default', () => (
    <FlatButton />
  ))
  .add('with text', () => (
    <FlatButton onClick={action('clicked')}>
      Hello FlatButton
    </FlatButton>
  ))
  .add('with some emoji', () => (
    <FlatButton onClick={action('clicked')}>😀 😎 👍 💯</FlatButton>
  ));
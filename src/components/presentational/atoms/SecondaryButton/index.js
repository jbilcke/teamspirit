import React from 'react';
import PrimaryButton from '../PrimaryButton';
import styles from './styles.module.scss';

const SecondaryButton = (props) =>
  <PrimaryButton {...props} className={styles.button} />

export default SecondaryButton;
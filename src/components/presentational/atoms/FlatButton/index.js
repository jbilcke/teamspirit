import React from 'react';
import Button from '../Button';
import styles from './styles.module.scss';

const FlatButton = (props) =>
  <Button {...props} className={styles.button} />

export default FlatButton;
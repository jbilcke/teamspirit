import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export default () =>
  <ul className={styles.list}>
    <li className={styles.li}>
      <Link to='/teams' className={styles.link}>Teams</Link>
    </li>
    <li className={styles.li}>
      <Link to='/players' className={styles.link}>Players</Link>
    </li>
  </ul>;

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Header = ({ title, subtitle }) =>
  <Fragment>
    <h2 className={styles.title}>{title}</h2>
    {title ? <div className={styles.subtitle}>{subtitle}</div> : null}
  </Fragment>;

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default Header;
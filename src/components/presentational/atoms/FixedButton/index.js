import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const FixedButton = ({ onClick, className, children }) =>
  <button
    className={[styles.button].concat(className || '').join(' ')}
    onClick={onClick}><div className={styles.icon}>{
      children
    }</div></button>;

FixedButton.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default FixedButton;
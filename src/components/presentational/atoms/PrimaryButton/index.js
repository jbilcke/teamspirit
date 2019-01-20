import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const PrimaryButton = ({ onClick, className, children, ...props }) =>
  <button
    onClick={onClick}
    className={[styles.button].concat(className || '').join(' ')}
    {...props}
    >{
      children
    }</button>;

PrimaryButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
}

export default PrimaryButton;
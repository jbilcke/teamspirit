import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Button = ({ onClick, className, children, ...props }) =>
  <button
    onClick={onClick}
    className={[styles.button].concat(className || '').join(' ')}
    {...props}
    >{
      children
    }</button>;

Button.PropTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
}

export default Button;
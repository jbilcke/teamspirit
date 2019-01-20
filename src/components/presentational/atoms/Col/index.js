import React from 'react';
import PropTypes from 'prop-types';

const Col = ({ className, children, ...props }) =>
  <div
    className={['col'].concat(className || '').join(' ')}
    {...props}>{
      children
    }</div>;

Col.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Col;


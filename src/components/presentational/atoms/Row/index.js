import React from 'react';
import PropTypes from 'prop-types';

const Row = ({ className, children, ...props }) =>
  <div
    className={['row'].concat(className || '').join(' ')}
    {...props}>{
      children
    }</div>;

Row.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Row;
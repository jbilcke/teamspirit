import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Card = ({ className, front, back, onClick }) =>
  <article
    className={[
      styles.card,
      className || '',
    ].join(' ')}
    onClick={onClick}>
    {back
    ? <div className={styles.flipper}>
      <div className={styles.front}>{
        front()
      }</div>
      {back ? <div className={styles.back}>{
        back()
      }</div> : null}
    </div>
    : <div>{
      front()
    }</div>}
  </article>;

Card.propTypes = {
  className: PropTypes.string,
  front: PropTypes.func.isRequired,
  back: PropTypes.func,
  onClick: PropTypes.func,
};

export default Card;
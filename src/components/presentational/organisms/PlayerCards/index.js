import React from 'react';
import PropTypes from 'prop-types';
import PlayerCard from '../../molecules/PlayerCard';
import types from '../../../../core/types';
import styles from './styles.module.scss';

const PlayerCards = ({ players, onEdit, onRemove }) =>
  <section className={styles.playerCards}>
    {Array.isArray(players)
      ? players.map(player =>
        <PlayerCard
          key={player.id}
          player={player}
          onEdit={onEdit}
          onRemove={onRemove}
        />) 
      : <div>Loading player cards..</div>}
  </section>;

PlayerCards.propTypes = {
  players: PropTypes.arrayOf(types.Player),
  onEdit: PropTypes.func,
  onRemove: PropTypes.func,
};

export default PlayerCards;
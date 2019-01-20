import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import FixedButton from '../../atoms/FixedButton';
import Header from '../../molecules/Header';
import PlayerCards from '../../organisms/PlayerCards';
import PlayerForm from '../../organisms/PlayerForm';
import types from '../../../../core/types';
import styles from './styles.module.scss';

const Players = ({
  // props for player cards
  players, onEdit, onRemove,

  // props for player edition or creation
  onFormSubmit, onFormCancel, canShowForm, editPlayer,
}) =>
<Fragment>
  {/* fixed elements need to be out of a div affected by a `transform` */}
  <FixedButton onClick={() => onEdit()}>+</FixedButton>
  <div className={[styles.players, 'appear'].join(' ')}>
    <Header
      title='Player database'
    />
    <PlayerCards
      players={players}
      onEdit={onEdit}
      onRemove={onRemove}
    />
    <ReactModal 
      isOpen={canShowForm}
      contentLabel="Edit Player"
      ariaHideApp={false /* our project is just a demo */}
      >
      <PlayerForm
        onSubmit={onFormSubmit}
        onCancel={onFormCancel}
        player={editPlayer}
      />
    </ReactModal>
  </div>
</Fragment>;

Players.propTypes = {
  players: PropTypes.arrayOf(types.Player),
  onEdit: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  onFormCancel: PropTypes.func.isRequired,
  canShowForm: PropTypes.bool.isRequired,
  editPlayer: types.Player,
};

export default Players;

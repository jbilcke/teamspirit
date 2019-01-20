import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import FixedButton from '../../atoms/FixedButton';
import Header from '../../molecules/Header';
import PlayerCards from '../../organisms/PlayerCards';
import PlayerForm from '../../organisms/PlayerForm';
import types from '../../../../core/types';
import styles from './styles.module.scss';

// fields visibles under the header
const fields = {
  strCountry: 'Country',
  // strSport: 'Sport',
  // strLeague: 'League',
  strGender: 'Gender',
  strAlternate: 'Alternate',
  strManager: 'Manager',
  strStadium: 'Stadium',
  strStadiumLocation: 'Location',
};

const Team = ({
  team,

  // props for player cards
  onEdit, onRemove,

  // props for player edition or creation
  onFormSubmit, onFormCancel, canShowForm, editPlayer,
}) =>
<Fragment>
  {/* fixed elements need to be out of a div affected by a `transform` */}
  <FixedButton onClick={() => onEdit()}>+</FixedButton>
  <section className={[styles.team, 'appear'].join(' ')}>
    {team ?
    <Fragment>
      <Header
        title={team.strTeam}
        subtitle={`${team.strLeague}`}
      />
      <div className={styles.details}>
        {Object.entries(fields).map(([ field, label ]) => 
          <div key={field} className={styles.field}>
            <div className={styles.label}>{label}</div>
            <div className={styles.info}>{team[field]}</div>
          </div>)}
      </div>
      <PlayerCards
        players={team.players}
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
    </Fragment> :
    <div>
      Loading team details..
    </div>}
  </section>
</Fragment>;

Team.propTypes = {
  team: types.Team,
  onEdit: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  onFormCancel: PropTypes.func.isRequired,
  canShowForm: PropTypes.bool.isRequired,
  editPlayer: types.Player,
};

export default Team;
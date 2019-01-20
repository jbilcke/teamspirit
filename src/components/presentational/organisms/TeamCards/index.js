import React from 'react';
import PropTypes from 'prop-types';
import TeamCard from '../../molecules/TeamCard';
import types from '../../../../core/types';
import styles from './styles.module.scss';

const TeamCards = ({ teams, onOpen }) =>
  <section className={styles.teamCards}>
    {Array.isArray(teams)
      ? teams.map(team =>
        <TeamCard key={team.idTeam} team={team} onOpen={onOpen} />) 
      : <div className={styles.loader}>Loading teams..</div>}
  </section>;

TeamCards.propTypes = {
  teams: PropTypes.arrayOf(types.Team),
  onOpen: PropTypes.func,
};

export default TeamCards;
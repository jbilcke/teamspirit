import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../molecules/Header';
import TeamCards from '../../organisms/TeamCards';
import types from '../../../../core/types';
import styles from './styles.module.scss';

const Teams = ({ teams, onOpen }) =>
  <div className={[styles.teams, 'appear'].join(' ')}>
    <Header
      title='Team database'
    />
    <TeamCards
      teams={teams}
      onOpen={onOpen}
    />
  </div>;

Teams.propTypes = {
  teams: PropTypes.arrayOf(types.Team),
  onOpen: PropTypes.func.isRequired,
};

export default Teams;

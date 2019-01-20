import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// import Row from '../../atoms/Row';
// import Col from '../../atoms/Col';
import types from '../../../../core/types';
import styles from './styles.module.scss';
import Card from '../Card';
import placeholder from './placeholder.png';

const TeamCard = ({ team, onOpen }) =>
  <Card
    className={styles.teamCard}
    onClick={() => onOpen(team)}
    front={() =>
      <Fragment>
        <div
          className={styles.thumbnail}
          style={{
            // an <img> would be more semantically correct but this project is
            // just a demo so let's use the nice css background image system
            // and benefit from built-in cover resizing mode
            backgroundImage: `url(${
              (team.strTeamBadge || team.strTeamLogo) || placeholder
            })`
          }}
        />
        <div className={styles.name}>
          {team.strTeam}
        </div>
    </Fragment>}
  />;

TeamCard.propTypes = {
  team: types.Team.isRequired,
  onOpen: PropTypes.func.isRequired,
};

export default TeamCard;

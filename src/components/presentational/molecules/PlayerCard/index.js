import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Row from '../../atoms/Row';
import Col from '../../atoms/Col';
// import { EditPlayer, RemovePlayer } from '../../atoms/Icons';
import types from '../../../../core/types';
import styles from './styles.module.scss';
import Card from '../Card';
import placeholder from './placeholder.png';

// fields that will be shown in the back side of the flip card
// if they are present in the player data object
const fields = {
  strTeam: 'Team',
  strPosition: 'Position',
  strNationality: 'Nationality',
  dateBorn: 'Born',
  dateSigned: 'Signed',
  strSigning: 'Signing',
};

const PlayerCard = ({ player, onEdit, onRemove }) =>
  <Card
    className={styles.playerCard}
    front={() =>
      <Fragment>
        <Row
          className={styles.thumbnail}
          style={{
            // an <img> would be more semantically correct but this project is
            // just a demo so let's use the nice css background image system
            // and benefit from built-in cover resizing mode
            backgroundImage: `url(${
              player.strThumb || placeholder
            })`
          }}
        />
        <Row className={styles.bottomline}>
          <Col className={styles.name}>{player.strPlayer}</Col>
          <Col className={styles.position}>{player.strPosition}</Col>
        </Row>
    </Fragment>}
    back={() =>
      <Fragment>
        {
          // only show the action button row if there is any
          onEdit || onRemove ? <Row>
          {onEdit ?
          <Col> 
            <button
              className={styles.button}
              onClick={() => onEdit(player)}>edit</button>
          </Col> : null}
          {onRemove ?
          <Col>
            <button
              className={styles.button}
              onClick={() => onRemove(player.id)}>remove</button>
          </Col> : null}
        </Row> : null}
        {Object.keys(fields)
        .filter(field => player[field])
        .map(field => 
         <Row key={field} className={styles.field}>
           <Col className={styles.label}>{fields[field]}</Col>
           <Col className={styles.info}>{player[field]}</Col>
         </Row>)}
    </Fragment>}
  />;

PlayerCard.propTypes = {
  player: types.Player.isRequired,
  onRemove: PropTypes.func,
  onEdit: PropTypes.func,
};

export default PlayerCard;

import React, {Component} from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import TeamPage from '../../presentational/pages/Team';
import store from '../../../core/store';

export default class Team extends Component {
  static propTypes = { history: ReactRouterPropTypes.history.isRequired }

  state = {
    team: null,
    editPlayer: null,
    canShowForm: false,
  }
  
  async componentDidMount() {
    this.setState({
      team: await store.getTeam(this.props.match.params.id)
    });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (!prevState.team || prevState.team.id !== this.props.match.params.id) {
      this.setState({
        team: await store.getTeam(this.props.match.params.id)
      });
    }
  }

  /**
   * Create or edit a player
   * 
   * @param {Player} player - a player to edit (optional)
   */
  onEdit = (player) =>
    this.setState({
      canShowForm: true,
      editPlayer: player,
    });
  
  /**
   * Remove a player by id
   * 
   * @param {Player} playerId - a player to remove (required)
   */
  onRemove = async (playerId) => {
    store.removePlayer(playerId);
    this.setState({
      team: await store.getTeam(this.props.match.params.id)
    });
  }

  /**
   * Upsert a player into the store for a specific team
   * 
   * @param {Player} newPlayer - new player data (required)
   * @param {Player} oldPlayer - old player data (optional)
   */
  onFormSubmit = async (newPlayer, oldPlayer) => {
    if (oldPlayer) {
      await store.updatePlayer(oldPlayer, newPlayer);
    } else {
      await store.addPlayer(newPlayer, this.state.team && this.state.team.id);
    }
    this.setState({
      team: await store.getTeam(this.props.match.params.id),
      canShowForm: false,
      editPlayer: null,
    });
  }

  /**
   * Hide and reset the edit form modal
   * 
   */
  onFormCancel = async () =>
    this.setState({
      canShowForm: false,
      editPlayer: null,
    });

  render() {
    return <TeamPage
      team={this.state.team}
      onEdit={this.onEdit}
      onRemove={this.onRemove}
      onFormSubmit={this.onFormSubmit}
      onFormCancel={this.onFormCancel}
      canShowForm={this.state.canShowForm}
      editPlayer={this.state.editPlayer}
    />;
  }
}

import React, {Component} from 'react';
import PlayersPage from '../../presentational/pages/Players';
import store from '../../../core/store';

export default class Players extends Component {

  state = {
    players: null,
    editPlayer: null,
    canShowForm: false,
  }
  
  async componentDidMount() {
    this.setState({
      players: await store.getPlayers()
    });
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
   * Remove a player
   * 
   * @param {Player} player - a player to remove (required)
   */
  onRemove = async (player) => {
    store.removePlayer(player);
    this.setState({
      players: await store.getPlayers()
    });
  }

  /**
   * Upsert a player into the store
   * 
   * @param {Player} newPlayer - new player data (required)
   * @param {Player} oldPlayer - old player data (optional)
   */
  onFormSubmit = async (newPlayer, oldPlayer) => {
    if (oldPlayer) {
      await store.updatePlayer(oldPlayer, newPlayer);
    } else {
      await store.addPlayer(newPlayer);
    }
    this.setState({
      players: await store.getPlayers(),
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
    return <PlayersPage
      players={this.state.players}
      onEdit={this.onEdit}
      onRemove={this.onRemove}
      onFormSubmit={this.onFormSubmit}
      onFormCancel={this.onFormCancel}
      canShowForm={this.state.canShowForm}
      editPlayer={this.state.editPlayer}
    />;
  }
}

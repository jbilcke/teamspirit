import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import store from '../../../core/store';
import TeamsPage from '../../presentational/pages/Teams';

class Teams extends Component {

  static propTypes = { history: ReactRouterPropTypes.history.isRequired }
  state = { teams: null }
  
  async componentDidMount() {
    this.setState({
      teams: await store.getTeams()
    });
  }

  onOpen = (team) => {
    this.props.history.push(`/team/${team.idTeam}`);
  }

  render() {
    return <TeamsPage teams={this.state.teams} onOpen={this.onOpen} />;
  }
}

export default withRouter(Teams);
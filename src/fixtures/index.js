import _teams from './teams';
import _players from './players';
// import shortid from 'shortid';

// convert to our format
const fixtures = {
  teams: _teams.map(team => ({ ...team, id: team.idTeam })),
  players: _players.map(player => ({ ...player, id: player.idPlayer })),
};

// assign players to teams
fixtures.teams = fixtures.teams.map(team => ({
  ...team,
  players: fixtures.players.filter(p => p.idTeam === team.idTeam)
}));

export const teams = fixtures.teams;
export const players = fixtures.players;
export default fixtures;
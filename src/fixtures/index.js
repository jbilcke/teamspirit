import _teams from './teams';
import _players from './players';

// convert to our format
const fixtures = {
  teams: _teams.map(team => ({ ...team, id: team.idTeam })),
  players: _players.map(player => ({ ...player, id: player.idPlayer })),
};

// create final object with some circular references
fixtures.teams = fixtures.teams.map(team => ({ ...team, players: fixtures.players }));

export const teams = fixtures.teams;
export const players = fixtures.players;
export default fixtures;
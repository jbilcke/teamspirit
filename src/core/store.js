import fixtures from '../fixtures';
import sportsdb from './sportsdb';
import shortid from 'shortid';

const local = {
  teams: [],
  players: [],
}

const store = {


  /**
   * Load initial data from an external resource
   * 
   *  @param {string} source - 'fixtures' or 'sportsdb'
   */
  load: async (source) => {
    switch (source) {
      case 'sportsdb':
      
        // a little helper used only for SportsDB
        const delay = ms => new Promise(r => setTimeout(r, ms));
        const loadTeam = async name => {

          const {teams} = await sportsdb.teams({ team: name });
          if (teams) {
            // we use a for loop instead of a Promise.all on purpose,
            // we do not want to call the API service in parallel :)
            for (let i = 0; i < teams.length; i++) {
              await delay(1000);
              const team = {
                ...teams[i],
                id: teams[i].idTeam,
                players: []
              };
      
              const {player} = await sportsdb.players({ team: team.strTeam });
              if (player) {
                team.players = player.map(p => ({ ...p, id: p.idPlayer }));
              }
              local.teams = local.teams.concat(team);
              local.players = local.players.concat(team.players);
            }
          }

        };

        // pull some teams from SportsDB
        await loadTeam('Paris');
        await delay(2000);
        await loadTeam('Arsenal');

        break;

      case 'fixtures':
        local.teams = fixtures.teams;
        local.players = fixtures.players;
        break;

      default:
        break;
    }
  },

  /**
   * Get all teams
   * 
   */
  getTeams: async () => local.teams,

  /**
   * Get all players
   * 
   */
  getPlayers: async () => local.players,

  /**
   * Get a team from an id
   * 
   *  @param {string} id - id of the team
   */
  getTeam: async (id) =>
    local.teams.find(t => t.id === id),

  addPlayer: async (player, team) => {
    if (!player) {
      throw new Error('player is required');
    }

    // add some mandatory fields
    player.id = player.idPlayer = shortid.generate();
    player.teams = [];

    // add a player to our list of all players
    if (!local.players.includes(player)) {
      local.players.unshift(player);
    }
    // add a player to a specific team
    if (team && !team.players.includes(player)) {
      team.players.unshift(player);
    }
  },

  updatePlayer: async (player, newData) => {
    // note: since we use an in-memory object database, we can
    // simply update the player data in-place.
    Object.entries(newData).forEach(([field, newValue]) => {
      player[field] = newValue;
    });
    return player;
  },

  removePlayer: async (player, team) => {
    if (!player) {
      throw new Error('player is required');
    }
    // remove a player from a specific team otherwise remove it
    // from all the teams
    if (team) {
      let i = team.players.indexOf(player);
      if (i > -1) { team.players.splice(i, 1); }
    } else {
      local.teams.forEach(t => {
        let i = t.players.indexOf(player);
        if (i > -1) { t.players.splice(i, 1); }
      });
    }

    // also remove from our global players list 
    let i = local.players.indexOf(player);
    if (i > -1) { local.players.splice(i, 1); }

    return player;
  },
}

export default store;

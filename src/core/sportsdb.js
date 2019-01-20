
import qs from 'qs';
const ROOT = 'https://www.thesportsdb.com/api/v1/json/1';

/**
 * Client for SportsDB API
 *
 * example usage:
 *
 * const players = await sportsdb.players({ team: 'Arsenal' });
 */
const sportsdb = {

  // search teams by team name or shortcode
  teams: ({ team, shortcode }) =>
    fetch(
      `${ROOT}/searchteams.php?${qs.stringify({ t: team, sname: shortcode })}`
    ).then(res => res.json()),

  // get single team details by team id
  team: ({ id }) =>
    fetch(`${ROOT}/lookupteam.php?${qs.stringify({ id })}`)
    .then(res => res.json()),

  // search players by team name and/or player name
  players: ({ team, player }) =>
    fetch(
      `${ROOT}/searchplayers.php?${qs.stringify({ t: team, p: player })}`
    ).then(res => res.json()),

  // get single player details by player id
  player: ({ id }) =>
    fetch(`${ROOT}/lookupplayer.php?${qs.stringify({ id })}`)
    .then(res => res.json()),
}

export default sportsdb;
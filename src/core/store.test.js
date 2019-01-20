
import store from './store';

beforeAll(() => store.load('fixtures'));
  
it('getTeams', async () => {
  const teams = await store.getTeams();
  expect(teams.length).toEqual(4);
});

it('getTeam', async () => {
  const team = await store.getTeam('133604');
  expect(team.strTeam).toEqual('Arsenal');
});

it('getPlayers', async () => {
  const players = await store.getPlayers();
  expect(players.length).toEqual(72);
});

it('addPlayer', async () => {
  const player = await store.addPlayer({ strPlayer: 'John Doe' }, '135247');
  const verif = await store.getTeam('135247');
  expect(verif.players).toContain(player);
});

it('removePlayer', async () => {
  const before = await store.getTeam('133716');
  expect(before.players.length).toEqual(25);
  await store.removePlayer('34147354', '133716');
  const after = await store.getTeam('133716');
  expect(after.players.length).toEqual(24);
});


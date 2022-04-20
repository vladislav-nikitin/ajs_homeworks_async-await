import GameSavingLoader from '../GameSavingLoader';

test('check Promise', async () => {
  const expected = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };
  const received = await GameSavingLoader.load();
  expect(JSON.parse(received)).toEqual(expected);
});

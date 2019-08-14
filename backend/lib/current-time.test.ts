import currentTime from './current-time';

test('returns in the HH:MM format', () => {
  const actual = currentTime();

  expect(actual).toMatch(/^[\d]{2}:[\d]{2}$/);
});

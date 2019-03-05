export function getEmojiScore(score) {
  const emojis = ['😢', '🙁', '😐', '🙂', '😄'];
  const values = [-2, -1, 0, 1, 2];

  return emojis[values.indexOf(score)];
}
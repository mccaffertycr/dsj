export function shiftDate(date, numDays) {
  const newDate = new Date(`${date} EST`);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}

export function getTooltip(entry) {
  if (entry.date && entry.note) return `${entry.date}: ${entry.emojiScore} - ${entry.note}`;
  if (entry.date) return `${entry.date}: ${entry.emojiScore}`;
  else return `No journal entry`;
}
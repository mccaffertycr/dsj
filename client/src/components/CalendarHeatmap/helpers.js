export function shiftDate(date, numDays) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}

export function getTooltip(entry) {
  if (entry.date) return `${entry.date}: ${entry.emojiScore}`
  else return `No journal entry`
}
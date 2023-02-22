export const stringToDate = date => {
  const [day, month, year] = String(date).split('.');
  return new Date(year, month - 1, day);
};

export const dateToString = date => {
  return new Date(date)
    .toISOString()
    .split('T')[0]
    .split('-')
    .reverse()
    .join('.');
};

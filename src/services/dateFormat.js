export const stringToDate = date => {
  const [day, month, year] = String(date).split('.');
  return new Date(year, month - 1, day);
};

export const dateToString = date => {
  const newDate = new Date(date);
  let day = newDate.getDate().toString().padStart(2, '0');
  let month = (newDate.getMonth() + 1).toString().padStart(2, '0');
  let year = newDate.getFullYear().toString();
  return `${day}.${month}.${year}`;
};

import { getMonth, getYear } from 'date-fns';
import React from 'react';

import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const range = (start, end) => {
  let years = [];
  for (let i = start; i <= end; i++) {
    years.push(i);
  }
  return years;
};
const years = range(1900, getYear(new Date()));

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const calendarFunc = ({
  date,
  changeYear,
  changeMonth,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}) => (
  <div
    style={{
      margin: 10,
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
      {'<'}
    </button>
    <select
      value={getYear(date)}
      onChange={({ target: { value } }) => changeYear(value)}
    >
      {years.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>

    <select
      value={months[getMonth(date)]}
      onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}
    >
      {months.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>

    <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
      {'>'}
    </button>
  </div>
);

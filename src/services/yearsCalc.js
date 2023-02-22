import { stringToDate } from './dateFormat';

export function calculateAnimalAge(birthday) {
  if (!birthday) return;

  const today = new Date();

  const diffMs = today.getTime() - stringToDate(birthday).getTime();

  const diffYears = diffMs / (1000 * 60 * 60 * 24 * 365);

  const age = Math.floor(diffYears);

  let ageWords = '';
  if (age === 0) {
    const diffMonths = Math.round(diffYears * 12);
    if (diffMonths === 1) {
      ageWords = '1 month';
    } else {
      ageWords = `${diffMonths} months`;
    }
  } else if (age === 1) {
    ageWords = '1 year';
  } else {
    ageWords = `${age} years`;
  }

  ageWords = ageWords.replace(/\d+/, function (match) {
    const num = parseInt(match, 10);
    const units = [
      '',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
    ];
    if (num < 10) {
      return units[num];
    } else if (num === 10) {
      return 'ten';
    } else if (num === 11) {
      return 'eleven';
    } else if (num === 12) {
      return 'twelve';
    } else if (num < 20) {
      return units[num % 10] + 'teen';
    } else if (num < 100) {
      const tens = [
        '',
        '',
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety',
      ];
      return (
        tens[Math.floor(num / 10)] +
        (num % 10 === 0 ? '' : '-' + units[num % 10])
      );
    } else {
      return match;
    }
  });

  return ageWords;
}

export function calculateAnimalAge(birthday) {
  // Get today's date
  const today = new Date();
  //
  const [day, month, year] = birthday.split('.');
  const date = new Date(year, month - 1, day);
  // Calculate the difference in milliseconds between the birthday and today's date
  const diffMs = today.getTime() - date.getTime();
  console.log('diffMs:', diffMs);

  // Convert the difference to years
  const diffYears = diffMs / (1000 * 60 * 60 * 24 * 365);

  // Round the result down to the nearest integer
  const age = Math.floor(diffYears);

  // Convert the age to a string of words
  let ageWords = '';
  if (age === 0) {
    // If the animal is less than one year old, express the age in months
    const diffMonths = Math.round(diffYears * 12);
    if (diffMonths === 1) {
      ageWords = '1 month old';
    } else {
      ageWords = `${diffMonths} months old`;
    }
  } else if (age === 1) {
    // If the animal is exactly one year old, express the age as "1 year old"
    ageWords = '1 year old';
  } else {
    // If the animal is more than one year old, express the age in years
    ageWords = `${age} years old`;
  }

  // Replace the number of years with the word equivalent
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

  // Return the age as a string of words
  return ageWords;
}

import { Survivors } from '@/types.ts';

// source: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
const shuffleArray = (array: Array<Survivors>): void => {
  let n = array.length;

  while (n) {
    const random = Math.floor(Math.random() * n--);

    [array[n], array[random]] = [array[random], array[n]];
  }
};

const makeInitials = (str: string) => {
  let res = '';

  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === str[i].toUpperCase() &&
      str[i] !== ' ' &&
      str[i] !== '.' &&
      str[i] !== ',' &&
      str[i] !== '-' &&
      str[i] !== "'" &&
      str[i] !== '(' &&
      str[i] !== ')'
    )
      res += str[i];
  }

  return res;
};

export { shuffleArray, makeInitials };

import { Survivors } from '@/types.ts';

// source: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
const shuffleArray = (array: Array<Survivors>): void => {
  let n = array.length;

  while (n) {
    const random = Math.floor(Math.random() * n--);

    [array[n], array[random]] = [array[random], array[n]];
  }
};

export { shuffleArray };

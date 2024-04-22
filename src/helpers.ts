import { Survivors } from '@/types.ts';

// source: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
const shuffleArray = (array: Array<Survivors>): void => {
  let i = array.length;

  while (i) {
    const random = Math.floor(Math.random() * i);
    i--;

    [array[i], array[random]] = [array[random], array[i]];
  }
};

export { shuffleArray };

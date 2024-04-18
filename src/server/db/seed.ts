import survivors from './data.ts';
import { writeDb } from './dbFunctions.ts';

// generate unique contestant IDs
for (const survivor of survivors) {
  survivor.id =
    Array.isArray(survivor.seasons) && Array.isArray(survivor.placements)
      ? survivor.placements[0] >= 10
        ? Number(`${survivor.seasons[0]}${survivor.placements[0]}`)
        : Number(`${survivor.seasons[0]}0${survivor.placements[0]}`)
      : (survivor.placements as number) >= 10
      ? Number(`${survivor.seasons}${survivor.placements}`)
      : Number(`${survivor.seasons}0${survivor.placements}`);
}

// TODO: add more info as needed

writeDb(survivors);

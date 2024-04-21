import survivors from './data.ts';
import { writeDb } from './writeDb.ts';

for (const survivor of survivors) {
  // generate unique contestant IDs
  survivor.id =
    Array.isArray(survivor.seasons) && Array.isArray(survivor.placements)
      ? survivor.placements[0] >= 10
        ? Number(`${survivor.seasons[0]}${survivor.placements[0]}`)
        : Number(`${survivor.seasons[0]}0${survivor.placements[0]}`)
      : (survivor.placements as number) >= 10
      ? Number(`${survivor.seasons}${survivor.placements}`)
      : Number(`${survivor.seasons}0${survivor.placements}`);

  // generate path to photo
  survivor.pathToPhoto =
    Array.isArray(survivor.seasons) && Array.isArray(survivor.placements)
      ? `/${survivor.seasons[0]}/${survivor.placements[0]}.png`
      : `/${survivor.seasons}/${survivor.placements}.png`;
}

writeDb(survivors);

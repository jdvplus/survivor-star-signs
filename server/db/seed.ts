import { survivors } from '@/server/db/data.ts';
import writeDb from '@/server/db/writeDb.ts';
import { makeInitials } from '@/helpers.ts';

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
      ? `/${survivor.seasons[0]}/${survivor.placements[0]}`
      : `/${survivor.seasons}/${survivor.placements}`;

  // generate initials for avatar fallback
  survivor.initials = makeInitials(survivor.contestant);
}

writeDb(survivors);

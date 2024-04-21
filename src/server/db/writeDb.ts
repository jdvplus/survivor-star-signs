import fs from 'fs';

import { Survivors } from '@/types.ts';

const writeDb = (data: Array<Survivors>, db: string = 'src/db/db.json') => {
  if (!data) return 'invalid input';

  try {
    return fs.writeFileSync(db, JSON.stringify(data));
  } catch (err) {
    console.error(err);
  }
};

export default writeDb;

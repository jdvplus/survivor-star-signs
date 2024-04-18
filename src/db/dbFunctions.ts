import fs from 'fs';

// export const readDb = (db: string = 'src/db/db.json') => {
//   const data = fs.readFileSync(db, 'utf-8');
//   return JSON.parse(data);
// };

export const writeDb = (data: object, db: string = 'src/db/db.json') => {
  if (!data) return 'invalid input';

  try {
    return fs.writeFileSync(db, JSON.stringify(data));
  } catch (err) {
    console.error(err);
  }
};

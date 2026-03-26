import fs from 'fs'

import type { Survivor } from '../../shared/types.ts'

export default function writeDb(data: Survivor[], db = 'server/db/db.json') {
  if (!data) return 'invalid input'

  try {
    return fs.writeFileSync(db, JSON.stringify(data))
  } catch (err) {
    console.error(err)
  }
}

import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

import type { Survivor } from '../../shared/types.ts'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const defaultDbPath = path.join(__dirname, 'db.json')

export default async function writeDb(
  data: Survivor[],
  dbPath = defaultDbPath
) {
  if (!Array.isArray(data) || data.length === 0) {
    throw new Error('writeDb requires a non-empty array of survivors')
  }

  await fs.writeFile(dbPath, JSON.stringify(data))
}

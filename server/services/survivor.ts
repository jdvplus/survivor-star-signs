import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

import type {
  Survivor,
  Gender,
  GenderSelectOptions,
} from '../../shared/types.ts'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dbPath = path.join(__dirname, '../db/db.json')

// Load database into memory once at startup (static data)
let survivors: Survivor[] = []

export async function loadDatabase() {
  const data = await fs.readFile(dbPath, 'utf-8')
  survivors = JSON.parse(data)
}

export function getAllSurvivors(): Survivor[] {
  return survivors
}

export function getRandomSurvivors(count = 32): Survivor[] {
  // Fisher-Yates shuffle on a copy, then take the first `count`
  const shuffled = [...survivors]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled.slice(0, count)
}

const genderMap: Record<GenderSelectOptions, Gender> = {
  men: 'm',
  women: 'f',
  nb: 'nb',
}

export function getSurvivorsByCategory(
  sign?: string,
  gender?: string
): Survivor[] {
  const convertedGender = gender
    ? genderMap[gender as GenderSelectOptions]
    : undefined

  return survivors.filter((survivor) => {
    const matchesSign = sign ? survivor.zodiacSign === sign : true
    const matchesGender = convertedGender
      ? survivor.gender === convertedGender
      : true
    return matchesSign && matchesGender
  })
}

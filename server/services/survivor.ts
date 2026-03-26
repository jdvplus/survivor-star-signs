import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

import type {
  Survivor,
  Gender,
  GenderSelectOptions,
} from '../../shared/types.ts'
import { isZodiacSign, isGenderSelectOption } from '../../shared/types.ts'
import { shuffleArray } from '../../shared/utils.ts'
import { logger } from '../lib/logger.ts'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dbPath = path.join(__dirname, '../db/db.json')

let survivors: Survivor[] = []

export async function loadDatabase() {
  try {
    const data = await fs.readFile(dbPath, 'utf-8')
    survivors = JSON.parse(data)
    logger.info(`Loaded ${survivors.length} survivors from database`)
  } catch (err) {
    logger.error('Failed to load database', err)
    throw err
  }
}

export function getAllSurvivors(): Survivor[] {
  return [...survivors]
}

export function getRandomSurvivors(count = 32): Survivor[] {
  return shuffleArray(survivors).slice(0, count)
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
  const convertedGender =
    gender && isGenderSelectOption(gender) ? genderMap[gender] : undefined

  return survivors.filter((survivor) => {
    const matchesSign =
      sign && isZodiacSign(sign) ? survivor.zodiacSign === sign : !sign
    const matchesGender = convertedGender
      ? survivor.gender === convertedGender
      : true
    return matchesSign && matchesGender
  })
}

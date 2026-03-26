import { survivors } from './data.ts'
import writeDb from './writeDb.ts'
import { makeInitials } from '../lib/utils.ts'

function generateId(
  seasons: number | number[],
  placements: number | number[]
): number {
  const season = Array.isArray(seasons) ? seasons[0] : seasons
  const placement = Array.isArray(placements) ? placements[0] : placements
  const paddedPlacement = placement >= 10 ? `${placement}` : `0${placement}`
  return Number(`${season}${paddedPlacement}`)
}

function generatePhotoPath(
  seasons: number | number[],
  placements: number | number[]
): string {
  const season = Array.isArray(seasons) ? seasons[0] : seasons
  const placement = Array.isArray(placements) ? placements[0] : placements
  return `/${season}/${placement}`
}

for (const survivor of survivors) {
  survivor.id = generateId(survivor.seasons, survivor.placements)
  survivor.pathToPhoto = generatePhotoPath(
    survivor.seasons,
    survivor.placements
  )
  survivor.initials = makeInitials(survivor.contestant)
}

await writeDb(survivors)

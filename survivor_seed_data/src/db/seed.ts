import survivors from './data'
import { writeDb } from './writeDb'

const makeInitials = (str: string) => {
  let res = ''

  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === str[i].toUpperCase() &&
      str[i] !== ' ' &&
      str[i] !== '.' &&
      str[i] !== ',' &&
      str[i] !== '-' &&
      str[i] !== "'" &&
      str[i] !== '(' &&
      str[i] !== ')'
    )
      res += str[i]
  }

  return res
}

for (const survivor of survivors) {
  // generate unique contestant IDs
  survivor.id =
    Array.isArray(survivor.seasons) && Array.isArray(survivor.placements)
      ? survivor.placements[0] >= 10
        ? Number(`${survivor.seasons[0]}${survivor.placements[0]}`)
        : Number(`${survivor.seasons[0]}0${survivor.placements[0]}`)
      : (survivor.placements as number) >= 10
        ? Number(`${survivor.seasons}${survivor.placements}`)
        : Number(`${survivor.seasons}0${survivor.placements}`)

  // generate path to photo
  survivor.pathToPhoto =
    Array.isArray(survivor.seasons) && Array.isArray(survivor.placements)
      ? `/${survivor.seasons[0]}/${survivor.placements[0]}`
      : `/${survivor.seasons}/${survivor.placements}`

  // generate initials for avatar fallback
  survivor.initials = makeInitials(survivor.contestant)
}

writeDb(survivors)

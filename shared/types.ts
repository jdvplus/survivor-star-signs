export const ZodiacSign = {
  Aries: 'Aries',
  Taurus: 'Taurus',
  Gemini: 'Gemini',
  Cancer: 'Cancer',
  Leo: 'Leo',
  Virgo: 'Virgo',
  Libra: 'Libra',
  Scorpio: 'Scorpio',
  Sagittarius: 'Sagittarius',
  Capricorn: 'Capricorn',
  Aquarius: 'Aquarius',
  Pisces: 'Pisces',
} as const

export type ZodiacSign = (typeof ZodiacSign)[keyof typeof ZodiacSign]

export const Element = {
  Fire: 'Fire',
  Earth: 'Earth',
  Air: 'Air',
  Water: 'Water',
} as const

export type Element = (typeof Element)[keyof typeof Element]

export const Modality = {
  Cardinal: 'Cardinal',
  Fixed: 'Fixed',
  Mutable: 'Mutable',
} as const

export type Modality = (typeof Modality)[keyof typeof Modality]

export type Gender = 'f' | 'm' | 'nb'
export type GenderSelectOptions = 'men' | 'women' | 'nb'

export type Survivor = {
  id?: number
  pathToPhoto?: string
  initials?: string
  contestant: string
  nickname?: string
  seasons: number | number[]
  birthday: string
  gender: Gender
  zodiacSign: ZodiacSign
  element: Element
  modality: Modality
  placements: number | number[]
  appearances: number
  runnerUp?: true
  winner?: true
  zeroVoteFinalist?: true
  medevac?: true
  quitter?: true
}

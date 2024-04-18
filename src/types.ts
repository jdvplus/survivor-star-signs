type Survivors = {
  contestant: string;
  seasons: number | number[];
  birthday: Date;
  zodiacSign: ZodiacSign;
  element: Element;
  placements: number | number[];
  appearances: number;
  winner?: true;
  runnerUp?: true;
};

enum ZodiacSign {
  Aries = 'Aries',
  Taurus = 'Taurus',
  Gemini = 'Gemini',
  Cancer = 'Cancer',
  Leo = 'Leo',
  Virgo = 'Virgo',
  Libra = 'Libra',
  Scorpio = 'Scorpio',
  Sagittarius = 'Sagittarius',
  Capricorn = 'Capricorn',
  Aquarius = 'Aquarius',
  Pisces = 'Pisces',
}

enum Element {
  Fire = 'Fire',
  Earth = 'Earth',
  Air = 'Air',
  Water = 'Water',
}

export { Survivors, ZodiacSign, Element };

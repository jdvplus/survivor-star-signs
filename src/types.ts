type Survivors = {
  id?: number; // dynamically added after
  contestant: string;
  seasons: number | number[];
  birthday: Date;
  zodiacSign: ZodiacSign;
  element: Element;
  modality: Modality;
  placements: number | number[];
  appearances: number;
  runnerUp?: true;
  winner?: true;
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

enum Modality {
  Cardinal = 'Cardinal',
  Fixed = 'Fixed',
  Mutable = 'Mutable',
}

export { Survivors, ZodiacSign, Element, Modality };

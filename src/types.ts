import { Request, Response, NextFunction } from 'express';

type Survivors = {
  id?: number; // dynamically added after
  pathToPhoto?: string; // dynamically added after

  contestant: string;
  seasons: number | Array<number>;
  birthday: Date;
  zodiacSign: ZodiacSign;
  element: Element;
  modality: Modality;
  placements: number | Array<number>;
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

type ContestantController = {
  getContestants: (req: Request, res: Response, next: NextFunction) => void;
  getBySign: (req: Request, res: Response, next: NextFunction) => void;
};

export {
  type Survivors,
  ZodiacSign,
  Element,
  Modality,
  type ContestantController,
};

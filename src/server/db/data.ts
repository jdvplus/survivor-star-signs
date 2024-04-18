import { Survivors, ZodiacSign, Element, Modality } from '../types.ts';

const survivors: Array<Survivors> = [
  // Borneo
  {
    contestant: 'Sonja Christopher',
    seasons: 1,
    birthday: new Date(37, 0, 28),
    zodiacSign: ZodiacSign.Aquarius,
    element: Element.Air,
    modality: Modality.Fixed,
    placements: 16,
    appearances: 1,
  },
  {
    contestant: 'B.B. Andersen',
    seasons: 1,
    birthday: new Date(36, 9, 29),
    zodiacSign: ZodiacSign.Scorpio,
    element: Element.Water,
    modality: Modality.Fixed,
    placements: 15,
    appearances: 1,
  },
  {
    contestant: 'Stacey Stillman',
    seasons: 1,
    birthday: new Date(72, 7, 11),
    zodiacSign: ZodiacSign.Leo,
    element: Element.Fire,
    modality: Modality.Fixed,
    placements: 14,
    appearances: 1,
  },
  {
    contestant: 'Ramona Gray',
    seasons: 1,
    birthday: new Date(71, 0, 20),
    zodiacSign: ZodiacSign.Aquarius,
    element: Element.Air,
    modality: Modality.Fixed,
    placements: 13,
    appearances: 1,
  },
  {
    contestant: 'Dirk Been',
    seasons: 1,
    birthday: new Date(76, 5, 15),
    zodiacSign: ZodiacSign.Gemini,
    element: Element.Air,
    modality: Modality.Mutable,
    placements: 12,
    appearances: 1,
  },
  {
    contestant: 'Joel Klug',
    seasons: 1,
    birthday: new Date(72, 3, 13),
    zodiacSign: ZodiacSign.Aries,
    element: Element.Fire,
    modality: Modality.Cardinal,
    placements: 11,
    appearances: 1,
  },
  {
    contestant: 'Gretchen Cordy',
    seasons: 1,
    birthday: new Date(62, 1, 7),
    zodiacSign: ZodiacSign.Aquarius,
    element: Element.Air,
    modality: Modality.Fixed,
    placements: 10,
    appearances: 1,
  },
  {
    contestant: 'Greg Buis',
    seasons: 1,
    birthday: new Date(75, 11, 31),
    zodiacSign: ZodiacSign.Capricorn,
    element: Element.Earth,
    modality: Modality.Cardinal,
    placements: 9,
    appearances: 1,
  },
  {
    contestant: 'Jenna Lewis',
    seasons: [1, 8],
    birthday: new Date(77, 6, 16),
    zodiacSign: ZodiacSign.Cancer,
    element: Element.Water,
    modality: Modality.Cardinal,
    placements: [8, 3],
    appearances: 1,
  },
  {
    contestant: 'Gervase Peterson',
    seasons: [1, 27],
    birthday: new Date(69, 10, 2),
    zodiacSign: ZodiacSign.Scorpio,
    element: Element.Water,
    modality: Modality.Fixed,
    placements: [7, 3],
    appearances: 2,
    runnerUp: true,
  },
  {
    contestant: 'Colleen Haskell',
    seasons: 1,
    birthday: new Date(76, 11, 6),
    zodiacSign: ZodiacSign.Sagittarius,
    element: Element.Fire,
    modality: Modality.Mutable,
    placements: 6,
    appearances: 1,
  },
  {
    contestant: 'Sean Kenniff',
    seasons: 1,
    birthday: new Date(69, 10, 27),
    zodiacSign: ZodiacSign.Sagittarius,
    element: Element.Fire,
    modality: Modality.Mutable,
    placements: 5,
    appearances: 1,
  },
  {
    contestant: "Susan 'Sue' Hawk",
    seasons: [1, 8],
    birthday: new Date(61, 7, 17),
    zodiacSign: ZodiacSign.Leo,
    element: Element.Fire,
    modality: Modality.Fixed,
    placements: [4, 13],
    appearances: 2,
  },
  {
    contestant: 'Rudy Boesch',
    seasons: [1, 8],
    birthday: new Date(28, 0, 20),
    zodiacSign: ZodiacSign.Aquarius,
    element: Element.Air,
    modality: Modality.Fixed,
    placements: [3, 17],
    appearances: 2,
  },
  {
    contestant: 'Kelly Wiglesworth',
    seasons: [1, 31],
    birthday: new Date(77, 5, 24),
    zodiacSign: ZodiacSign.Cancer,
    element: Element.Water,
    modality: Modality.Cardinal,
    placements: [2, 11],
    appearances: 2,
    runnerUp: true,
  },
  {
    contestant: 'Richard Hatch',
    seasons: [1, 8],
    birthday: new Date(61, 3, 8),
    zodiacSign: ZodiacSign.Aries,
    element: Element.Fire,
    modality: Modality.Cardinal,
    placements: [1, 14],
    appearances: 2,
    winner: true,
  },
  // The Australian Outback
  {
    contestant: 'Debb Eaton',
    seasons: 2,
    birthday: new Date(55, 5, 11),
    zodiacSign: ZodiacSign.Gemini,
    element: Element.Air,
    modality: Modality.Mutable,
    placements: 16,
    appearances: 1,
  },
  {
    contestant: 'Kel Gleason',
    seasons: 2,
    birthday: new Date(68, 0, 5),
    zodiacSign: ZodiacSign.Capricorn,
    element: Element.Earth,
    modality: Modality.Cardinal,
    placements: 15,
    appearances: 1,
  },
  {
    contestant: "Maralyn 'Mad Dog' Hershey",
    seasons: 2,
    birthday: new Date(49, 0, 24),
    zodiacSign: ZodiacSign.Aquarius,
    element: Element.Air,
    modality: Modality.Fixed,
    placements: 14,
    appearances: 1,
  },
  {
    contestant: 'Mitchell Olson',
    seasons: 2,
    birthday: new Date(77, 2, 17),
    zodiacSign: ZodiacSign.Pisces,
    element: Element.Water,
    modality: Modality.Mutable,
    placements: 13,
    appearances: 1,
  },
  {
    contestant: 'Kimmi Kappenberg',
    seasons: [2, 31],
    birthday: new Date(72, 10, 11),
    zodiacSign: ZodiacSign.Scorpio,
    element: Element.Water,
    modality: Modality.Fixed,
    placements: [12, 6],
    appearances: 2,
  },
  {
    contestant: "Michael 'Mike' Skupin",
    seasons: [2, 25],
    birthday: new Date(62, 0, 29),
    zodiacSign: ZodiacSign.Aquarius,
    element: Element.Air,
    modality: Modality.Fixed,
    placements: [11, 2],
    appearances: 2,
    runnerUp: true,
  },
  {
    contestant: "Jeffrey 'Jeff' Varner",
    seasons: [2, 31, 34],
    birthday: new Date(66, 3, 16),
    zodiacSign: ZodiacSign.Aries,
    element: Element.Fire,
    modality: Modality.Cardinal,
    placements: [10, 17, 14],
    appearances: 3,
  },
  {
    contestant: 'Alicia Calaway',
    seasons: [2, 8],
    birthday: new Date(68, 4, 1),
    zodiacSign: ZodiacSign.Taurus,
    element: Element.Earth,
    modality: Modality.Fixed,
    placements: [9, 7],
    appearances: 2,
  },
  {
    contestant: 'Jerri Manthey',
    seasons: [2, 8, 20],
    birthday: new Date(70, 8, 5),
    zodiacSign: ZodiacSign.Virgo,
    element: Element.Earth,
    modality: Modality.Mutable,
    placements: [8, 10, 4],
    appearances: 3,
  },
  {
    contestant: 'Nick Brown',
    seasons: 2,
    birthday: new Date(77, 3, 2),
    zodiacSign: ZodiacSign.Aries,
    element: Element.Fire,
    modality: Modality.Cardinal,
    placements: 7,
    appearances: 1,
  },
  {
    contestant: 'Amber (Brkich) Mariano',
    seasons: [2, 8, 40],
    birthday: new Date(78, 7, 11),
    zodiacSign: ZodiacSign.Leo,
    element: Element.Fire,
    modality: Modality.Fixed,
    placements: [6, 1, 20],
    appearances: 3,
    winner: true,
  },
  {
    contestant: 'Rodger Bingham',
    seasons: 2,
    birthday: new Date(47, 6, 5),
    zodiacSign: ZodiacSign.Cancer,
    element: Element.Water,
    modality: Modality.Cardinal,
    placements: 5,
    appearances: 1,
  },
  {
    contestant: 'Elisabeth Filarski',
    seasons: 2,
    birthday: new Date(77, 4, 28),
    zodiacSign: ZodiacSign.Gemini,
    element: Element.Air,
    modality: Modality.Mutable,
    placements: 4,
    appearances: 1,
  },
  {
    contestant: 'Keith Famie',
    seasons: 2,
    birthday: new Date(60, 1, 11),
    zodiacSign: ZodiacSign.Aquarius,
    element: Element.Air,
    modality: Modality.Fixed,
    placements: 3,
    appearances: 1,
  },
  {
    contestant: 'Colby Donaldson',
    seasons: [2, 8, 20],
    birthday: new Date(74, 3, 1),
    zodiacSign: ZodiacSign.Aries,
    element: Element.Fire,
    modality: Modality.Cardinal,
    placements: [2, 12, 5],
    appearances: 3,
    runnerUp: true,
  },
  {
    contestant: 'Tina Wesson',
    seasons: [2, 8, 27],
    birthday: new Date(60, 11, 26),
    zodiacSign: ZodiacSign.Capricorn,
    element: Element.Earth,
    modality: Modality.Cardinal,
    placements: [1, 18, 4],
    appearances: 3,
    winner: true,
  },
  // Africa
  {
    contestant: 'Diane Ogden',
    seasons: 3,
    birthday: new Date(59, 3, 27),
    zodiacSign: ZodiacSign.Taurus,
    element: Element.Earth,
    modality: Modality.Fixed,
    placements: 16,
    appearances: 1,
  },
  {
    contestant: 'Jessie Camacho',
    seasons: 3,
    birthday: new Date(74, 8, 24),
    zodiacSign: ZodiacSign.Libra,
    element: Element.Air,
    modality: Modality.Cardinal,
    placements: 15,
    appearances: 1,
  },
  {
    contestant: 'Carl Bilancione',
    seasons: 3,
    birthday: new Date(55, 5, 20),
    zodiacSign: ZodiacSign.Gemini,
    element: Element.Air,
    modality: Modality.Mutable,
    placements: 14,
    appearances: 1,
  },
  {
    contestant: 'Linda Spencer',
    seasons: 3,
    birthday: new Date(57, 0, 1),
    zodiacSign: ZodiacSign.Capricorn,
    element: Element.Earth,
    modality: Modality.Cardinal,
    placements: 13,
    appearances: 1,
  },
  {
    contestant: 'Silas Gaither',
    seasons: 3,
    birthday: new Date(78, 0, 28),
    zodiacSign: ZodiacSign.Aquarius,
    element: Element.Air,
    modality: Modality.Fixed,
    placements: 12,
    appearances: 1,
  },
  {
    contestant: 'Lindsey Richter',
    seasons: 3,
    birthday: new Date(74, 7, 31),
    zodiacSign: ZodiacSign.Virgo,
    element: Element.Earth,
    modality: Modality.Mutable,
    placements: 11,
    appearances: 1,
  },
  {
    contestant: 'Clarence Black',
    seasons: 3,
    birthday: new Date(76, 11, 21),
    zodiacSign: ZodiacSign.Sagittarius,
    element: Element.Fire,
    modality: Modality.Mutable,
    placements: 10,
    appearances: 1,
  },
  {
    contestant: 'Kelly Goldsmith',
    seasons: 3,
    birthday: new Date(79, 3, 27),
    zodiacSign: ZodiacSign.Taurus,
    element: Element.Earth,
    modality: Modality.Fixed,
    placements: 9,
    appearances: 1,
  },
  {
    contestant: 'Brandon Quinton',
    seasons: 3,
    birthday: new Date(76, 0, 22),
    zodiacSign: ZodiacSign.Aquarius,
    element: Element.Air,
    modality: Modality.Fixed,
    placements: 8,
    appearances: 1,
  },
  {
    contestant: 'Frank Garrison',
    seasons: 3,
    birthday: new Date(58, 6, 22),
    zodiacSign: ZodiacSign.Cancer,
    element: Element.Water,
    modality: Modality.Cardinal,
    placements: 7,
    appearances: 1,
  },
  {
    contestant: 'Kim Powers',
    seasons: 3,
    birthday: new Date(71, 11, 3),
    zodiacSign: ZodiacSign.Sagittarius,
    element: Element.Fire,
    modality: Modality.Mutable,
    placements: 6,
    appearances: 1,
  },
  {
    contestant: "Teresa 'T-Bird' Cooper",
    seasons: 3,
    birthday: new Date(59, 4, 5),
    zodiacSign: ZodiacSign.Taurus,
    element: Element.Earth,
    modality: Modality.Fixed,
    placements: 5,
    appearances: 1,
  },
  {
    contestant: "Tom 'Big Tom' Buchanan",
    seasons: [3, 8],
    birthday: new Date(55, 9, 30),
    zodiacSign: ZodiacSign.Scorpio,
    element: Element.Water,
    modality: Modality.Fixed,
    placements: [4, 5],
    appearances: 2,
  },
  {
    contestant: 'Lex van den Berghe',
    seasons: [3, 8],
    birthday: new Date(63, 5, 18),
    zodiacSign: ZodiacSign.Gemini,
    element: Element.Air,
    modality: Modality.Mutable,
    placements: [3, 9],
    appearances: 2,
  },
  {
    contestant: 'Kim Johnson',
    seasons: 3,
    birthday: new Date(44, 8, 18),
    zodiacSign: ZodiacSign.Virgo,
    element: Element.Earth,
    modality: Modality.Mutable,
    placements: 2,
    appearances: 1,
    runnerUp: true,
  },
  {
    contestant: 'Ethan Zohn',
    seasons: [3, 8, 40],
    birthday: new Date(73, 10, 12),
    zodiacSign: ZodiacSign.Scorpio,
    element: Element.Water,
    modality: Modality.Fixed,
    placements: [1, 11, 18],
    appearances: 3,
  },
  // Marquesas
  {
    contestant: 'Peter Harkey',
    seasons: 4,
    birthday: new Date(56, 0, 17),
    zodiacSign: ZodiacSign.Capricorn,
    element: Element.Earth,
    modality: Modality.Cardinal,
    placements: 16,
    appearances: 1,
  },
  {
    contestant: 'Patricia Jackson',
    seasons: 4,
    birthday: new Date(52, 3, 8),
    zodiacSign: ZodiacSign.Aries,
    element: Element.Fire,
    modality: Modality.Cardinal,
    placements: 15,
    appearances: 1,
  },
  {
    contestant: 'Hunter Ellis',
    seasons: 4,
    birthday: new Date(68, 6, 5),
    zodiacSign: ZodiacSign.Cancer,
    element: Element.Water,
    modality: Modality.Cardinal,
    placements: 14,
    appearances: 1,
  },
  {
    contestant: 'Sarah Jones',
    seasons: 4,
    birthday: new Date(77, 7, 11),
    zodiacSign: ZodiacSign.Leo,
    element: Element.Fire,
    modality: Modality.Fixed,
    placements: 13,
    appearances: 1,
  },
  {
    contestant: "Gabriel 'Gabe' Cade",
    seasons: 4,
    birthday: new Date(78, 6, 1),
    zodiacSign: ZodiacSign.Cancer,
    element: Element.Water,
    modality: Modality.Cardinal,
    placements: 12,
    appearances: 1,
  },
  {
    contestant: 'Gina Crews',
    seasons: 4,
    birthday: new Date(73, 1, 7),
    zodiacSign: ZodiacSign.Aquarius,
    element: Element.Air,
    modality: Modality.Fixed,
    placements: 11,
    appearances: 1,
  },
  {
    contestant: "Rob 'Boston Rob' Mariano",
    seasons: [4, 8, 20, 22, 40],
    birthday: new Date(75, 11, 25),
    zodiacSign: ZodiacSign.Capricorn,
    element: Element.Earth,
    modality: Modality.Cardinal,
    placements: [10, 2, 13, 1, 17],
    appearances: 5,
    runnerUp: true,
    winner: true,
  },
  {
    contestant: 'John Carroll',
    seasons: 4,
    birthday: new Date(65, 5, 14),
    zodiacSign: ZodiacSign.Gemini,
    element: Element.Air,
    modality: Modality.Mutable,
    placements: 9,
    appearances: 1,
  },
  {
    contestant: 'Zoe Zanidakis',
    seasons: 4,
    birthday: new Date(66, 2, 17),
    zodiacSign: ZodiacSign.Pisces,
    element: Element.Water,
    modality: Modality.Mutable,
    placements: 8,
    appearances: 1,
  },
  {
    contestant: 'Tammy Leitner',
    seasons: 4,
    birthday: new Date(72, 6, 3),
    zodiacSign: ZodiacSign.Cancer,
    element: Element.Water,
    modality: Modality.Cardinal,
    placements: 7,
    appearances: 1,
  },
  {
    contestant: "Robert 'The General' DeCanio",
    seasons: 4,
    birthday: new Date(63, 5, 19),
    zodiacSign: ZodiacSign.Gemini,
    element: Element.Air,
    modality: Modality.Mutable,
    placements: 6,
    appearances: 1,
  },
  {
    contestant: 'Sean Rector',
    seasons: 4,
    birthday: new Date(71, 7, 20),
    zodiacSign: ZodiacSign.Leo,
    element: Element.Fire,
    modality: Modality.Fixed,
    placements: 5,
    appearances: 1,
  },
  {
    contestant: 'Paschal English',
    seasons: 4,
    birthday: new Date(45, 2, 5),
    zodiacSign: ZodiacSign.Pisces,
    element: Element.Water,
    modality: Modality.Mutable,
    placements: 4,
    appearances: 1,
  },
  {
    contestant: "Kathy Vavrick-O'Brien",
    seasons: [4, 8],
    birthday: new Date(55, 0, 6),
    zodiacSign: ZodiacSign.Capricorn,
    element: Element.Earth,
    modality: Modality.Cardinal,
    placements: [3, 8],
    appearances: 2,
  },
  {
    contestant: 'Neleh Dennis',
    seasons: 4,
    birthday: new Date(80, 1, 19),
    zodiacSign: ZodiacSign.Pisces,
    element: Element.Water,
    modality: Modality.Mutable,
    placements: 2,
    appearances: 1,
    runnerUp: true,
  },
  {
    contestant: 'Vecepia Towery',
    seasons: 4,
    birthday: new Date(65, 11, 9),
    zodiacSign: ZodiacSign.Sagittarius,
    element: Element.Fire,
    modality: Modality.Mutable,
    placements: 1,
    appearances: 1,
    winner: true,
  },
  // Thailand
  {
    contestant: 'John Raymond',
    seasons: 5,
    birthday: new Date(62, 1, 21),
    zodiacSign: ZodiacSign.Pisces,
    element: Element.Water,
    modality: Modality.Mutable,
    placements: 16,
    appearances: 1,
  },
  {
    contestant: 'Tanya Vance',
    seasons: 5,
    birthday: new Date(74, 10, 29),
    zodiacSign: ZodiacSign.Sagittarius,
    element: Element.Fire,
    modality: Modality.Mutable,
    placements: 15,
    appearances: 1,
  },
  {
    contestant: 'Jed Hildebrand',
    seasons: 5,
    birthday: new Date(76, 11, 5),
    zodiacSign: ZodiacSign.Sagittarius,
    element: Element.Fire,
    modality: Modality.Mutable,
    placements: 14,
    appearances: 1,
  },
  {
    contestant: 'Ghandia Johnson',
    seasons: 5,
    birthday: new Date(69, 0, 3),
    zodiacSign: ZodiacSign.Capricorn,
    element: Element.Earth,
    modality: Modality.Cardinal,
    placements: 13,
    appearances: 1,
  },
  {
    contestant: 'Stephanie Dill',
    seasons: 5,
    birthday: new Date(72, 10, 15),
    zodiacSign: ZodiacSign.Scorpio,
    element: Element.Water,
    modality: Modality.Fixed,
    placements: 12,
    appearances: 1,
  },
  {
    contestant: 'Robb Zbacnik',
    seasons: 5,
    birthday: new Date(78, 8, 12),
    zodiacSign: ZodiacSign.Virgo,
    element: Element.Earth,
    modality: Modality.Mutable,
    placements: 11,
    appearances: 1,
  },
  {
    contestant: 'Shii Ann Huang',
    seasons: [5, 8],
    birthday: new Date(74, 0, 24),
    zodiacSign: ZodiacSign.Aquarius,
    element: Element.Air,
    modality: Modality.Fixed,
    placements: [10, 6],
    appearances: 2,
  },
  {
    contestant: 'Erin Collins',
    seasons: 5,
    birthday: new Date(76, 0, 7),
    zodiacSign: ZodiacSign.Capricorn,
    element: Element.Earth,
    modality: Modality.Cardinal,
    placements: 9,
    appearances: 1,
  },
  {
    contestant: 'Ken Stafford',
    seasons: 5,
    birthday: new Date(72, 5, 20),
    zodiacSign: ZodiacSign.Gemini,
    element: Element.Air,
    modality: Modality.Mutable,
    placements: 8,
    appearances: 1,
  },
  {
    contestant: 'Penny Ramsey',
    seasons: 5,
    birthday: new Date(75, 3, 24),
    zodiacSign: ZodiacSign.Taurus,
    element: Element.Earth,
    modality: Modality.Fixed,
    placements: 7,
    appearances: 1,
  },
  {
    contestant: 'Jake Billingsley',
    seasons: 5,
    birthday: new Date(41, 7, 21),
    zodiacSign: ZodiacSign.Leo,
    element: Element.Fire,
    modality: Modality.Fixed,
    placements: 6,
    appearances: 1,
  },
  {
    contestant: 'Ted Rogers, Jr.',
    seasons: 5,
    birthday: new Date(64, 11, 28),
    zodiacSign: ZodiacSign.Capricorn,
    element: Element.Earth,
    modality: Modality.Cardinal,
    placements: 5,
    appearances: 1,
  },
  {
    contestant: 'Helen Glover',
    seasons: 5,
    birthday: new Date(55, 3, 28),
    zodiacSign: ZodiacSign.Taurus,
    element: Element.Earth,
    modality: Modality.Fixed,
    placements: 4,
    appearances: 1,
  },
  {
    contestant: 'Jan Gentry',
    seasons: 5,
    birthday: new Date(48, 9, 31),
    zodiacSign: ZodiacSign.Scorpio,
    element: Element.Water,
    modality: Modality.Fixed,
    placements: 3,
    appearances: 1,
  },
  {
    contestant: 'Clay Jordan',
    seasons: 5,
    birthday: new Date(66, 11, 30),
    zodiacSign: ZodiacSign.Capricorn,
    element: Element.Earth,
    modality: Modality.Cardinal,
    placements: 2,
    appearances: 1,
    runnerUp: true,
  },
  {
    contestant: 'Brian Heidik',
    seasons: 5,
    birthday: new Date(56, 2, 9),
    zodiacSign: ZodiacSign.Pisces,
    element: Element.Water,
    modality: Modality.Mutable,
    placements: 1,
    appearances: 1,
    winner: true,
  },
  // The Amazon
  {
    contestant: 'Ryan Aiken',
    seasons: 6,
    birthday: new Date(79, 1, 13),
    zodiacSign: ZodiacSign.Aquarius,
    element: Element.Air,
    modality: Modality.Fixed,
    placements: 16,
    appearances: 1,
  },
  {
    contestant: 'Janet Koth',
    seasons: 6,
    birthday: new Date(55, 10, 18),
    zodiacSign: ZodiacSign.Scorpio,
    element: Element.Water,
    modality: Modality.Fixed,
    placements: 15,
    appearances: 1,
  },
  {
    contestant: 'Daniel Lue',
    seasons: 6,
    birthday: new Date(75, 10, 29),
    zodiacSign: ZodiacSign.Sagittarius,
    element: Element.Fire,
    modality: Modality.Mutable,
    placements: 14,
    appearances: 1,
  },
  {
    contestant: 'JoAnna Ward',
    seasons: 6,
    birthday: new Date(71, 3, 29),
    zodiacSign: ZodiacSign.Taurus,
    element: Element.Earth,
    modality: Modality.Fixed,
    placements: 13,
    appearances: 1,
  },
  {
    contestant: 'Jeanne Hebert',
    seasons: 6,
    birthday: new Date(62, 0, 6),
    zodiacSign: ZodiacSign.Capricorn,
    element: Element.Earth,
    modality: Modality.Cardinal,
    placements: 12,
    appearances: 1,
  },
  {
    contestant: 'Shawna Mitchell',
    seasons: 6,
    birthday: new Date(79, 6, 28),
    zodiacSign: ZodiacSign.Leo,
    element: Element.Fire,
    modality: Modality.Fixed,
    placements: 11,
    appearances: 1,
  },
  {
    contestant: 'Roger Sexton',
    seasons: 6,
    birthday: new Date(46, 9, 26),
    zodiacSign: ZodiacSign.Scorpio,
    element: Element.Water,
    modality: Modality.Fixed,
    placements: 10,
    appearances: 1,
  },
  {
    contestant: 'Dave Johnson',
    seasons: 6,
    birthday: new Date(79, 0, 16),
    zodiacSign: ZodiacSign.Capricorn,
    element: Element.Earth,
    modality: Modality.Cardinal,
    placements: 9,
    appearances: 1,
  },
  {
    contestant: 'Deena Bennett',
    seasons: 6,
    birthday: new Date(67, 1, 12),
    zodiacSign: ZodiacSign.Aquarius,
    element: Element.Air,
    modality: Modality.Fixed,
    placements: 8,
    appearances: 1,
  },
  {
    contestant: 'Alex Bell',
    seasons: 6,
    birthday: new Date(53, 4, 16),
    zodiacSign: ZodiacSign.Taurus,
    element: Element.Earth,
    modality: Modality.Fixed,
    placements: 7,
    appearances: 1,
  },
  {
    contestant: 'Christy Smith',
    seasons: 6,
    birthday: new Date(78, 8, 13),
    zodiacSign: ZodiacSign.Virgo,
    element: Element.Earth,
    modality: Modality.Mutable,
    placements: 6,
    appearances: 1,
  },
  {
    contestant: 'Heidi Strobel',
    seasons: 6,
    birthday: new Date(78, 9, 29),
    zodiacSign: ZodiacSign.Scorpio,
    element: Element.Water,
    modality: Modality.Fixed,
    placements: 5,
    appearances: 1,
  },
  {
    contestant: 'Butch Lockley',
    seasons: 6,
    birthday: new Date(52, 7, 28),
    zodiacSign: ZodiacSign.Virgo,
    element: Element.Earth,
    modality: Modality.Mutable,
    placements: 4,
    appearances: 1,
  },
  {
    contestant: 'Rob Cesternino',
    seasons: [6, 8],
    birthday: new Date(78, 9, 20),
    zodiacSign: ZodiacSign.Libra,
    element: Element.Air,
    modality: Modality.Cardinal,
    placements: [3, 15],
    appearances: 2,
  },
  {
    contestant: 'Matthew von Ertfelda',
    seasons: 6,
    birthday: new Date(69, 6, 24),
    zodiacSign: ZodiacSign.Leo,
    element: Element.Fire,
    modality: Modality.Fixed,
    placements: 2,
    appearances: 1,
    runnerUp: true,
  },
  {
    contestant: 'Jenna Morasca',
    seasons: [6, 8],
    birthday: new Date(81, 1, 15),
    zodiacSign: ZodiacSign.Aquarius,
    element: Element.Air,
    modality: Modality.Fixed,
    placements: [1, 16],
    appearances: 2,
    winner: true,
  },
  // Pearl Islands
  {
    contestant: 'Nicole Delma',
    seasons: 7,
    birthday: new Date(78, 8, 19),
    zodiacSign: ZodiacSign.Virgo,
    element: Element.Earth,
    modality: Modality.Mutable,
    placements: 16,
    appearances: 1,
  },
  {
    contestant: 'Ryan Shoulders',
    seasons: 7,
    birthday: new Date(80, 2, 28),
    zodiacSign: ZodiacSign.Aries,
    element: Element.Fire,
    modality: Modality.Cardinal,
    placements: 15,
    appearances: 1,
  },
  {
    contestant: 'Michelle Tesauro',
    seasons: 7,
    birthday: new Date(81, 0, 16),
    zodiacSign: ZodiacSign.Capricorn,
    element: Element.Earth,
    modality: Modality.Cardinal,
    placements: 14,
    appearances: 1,
  },
  {
    contestant: 'Trish Dunn',
    seasons: 7,
    birthday: new Date(60, 9, 29),
    zodiacSign: ZodiacSign.Scorpio,
    element: Element.Water,
    modality: Modality.Fixed,
    placements: 13,
    appearances: 1,
  },
  {
    contestant: 'Shawn Cohen',
    seasons: 7,
    birthday: new Date(74, 8, 20),
    zodiacSign: ZodiacSign.Virgo,
    element: Element.Earth,
    modality: Modality.Mutable,
    placements: 12,
    appearances: 1,
  },
  {
    contestant: 'Osten Taylor',
    seasons: 7,
    birthday: new Date(75, 11, 10),
    zodiacSign: ZodiacSign.Sagittarius,
    element: Element.Fire,
    modality: Modality.Mutable,
    placements: 11,
    appearances: 1,
  },
  {
    contestant: 'Andrew Savage',
    seasons: [7, 31],
    birthday: new Date(63, 6, 29),
    zodiacSign: ZodiacSign.Leo,
    element: Element.Fire,
    modality: Modality.Fixed,
    placements: [10, 12],
    appearances: 2,
  },
  {
    contestant: "Ryan 'Ryno' Opray",
    seasons: 7,
    birthday: new Date(72, 7, 6),
    zodiacSign: ZodiacSign.Leo,
    element: Element.Fire,
    modality: Modality.Fixed,
    placements: 9,
    appearances: 1,
  },
  {
    contestant: 'Rupert Boneham',
    seasons: [7, 8, 20, 27],
    birthday: new Date(64, 0, 27),
    zodiacSign: ZodiacSign.Aquarius,
    element: Element.Air,
    modality: Modality.Fixed,
    placements: [8, 4, 6, 20],
    appearances: 4,
  },
  {
    contestant: 'Tijuana Bradley',
    seasons: 7,
    birthday: new Date(76, 6, 23),
    zodiacSign: ZodiacSign.Leo,
    element: Element.Fire,
    modality: Modality.Fixed,
    placements: 7,
    appearances: 1,
  },
  {
    contestant: 'Christa Hastie',
    seasons: 7,
    birthday: new Date(78, 10, 6),
    zodiacSign: ZodiacSign.Scorpio,
    element: Element.Water,
    modality: Modality.Fixed,
    placements: 6,
    appearances: 1,
  },
  {
    contestant: 'Burton Roberts',
    seasons: 7,
    birthday: new Date(72, 3, 10),
    zodiacSign: ZodiacSign.Aries,
    element: Element.Fire,
    modality: Modality.Cardinal,
    placements: 5,
    appearances: 1,
  },
  {
    contestant: 'Darrah Johnson',
    seasons: 7,
    birthday: new Date(81, 4, 19),
    zodiacSign: ZodiacSign.Taurus,
    element: Element.Earth,
    modality: Modality.Fixed,
    placements: 4,
    appearances: 1,
  },
  {
    contestant: "Jon 'Jonny Fairplay' Dalton",
    seasons: [7, 16],
    birthday: new Date(74, 2, 11),
    zodiacSign: ZodiacSign.Pisces,
    element: Element.Water,
    modality: Modality.Mutable,
    placements: [3, 20],
    appearances: 2,
  },
  {
    contestant: "Lillian 'Lill' Morris",
    seasons: 7,
    birthday: new Date(52, 3, 3),
    zodiacSign: ZodiacSign.Aries,
    element: Element.Fire,
    modality: Modality.Cardinal,
    placements: 2,
    appearances: 1,
    runnerUp: true,
  },
  {
    contestant: 'Sandra Diaz-Twine',
    seasons: [7, 20, 34, 40],
    birthday: new Date(74, 6, 30),
    zodiacSign: ZodiacSign.Leo,
    element: Element.Fire,
    modality: Modality.Fixed,
    placements: [1, 1, 15, 16],
    appearances: 4,
    winner: true,
  },
  // All-Stars (skipped bc full returnee season)
];

export default survivors;

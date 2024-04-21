import { Request, Response, NextFunction } from 'express';

import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

import { ContestantController, Survivors, Gender } from '@/types.ts';

const __dirname = dirname(fileURLToPath(import.meta.url));

const contestantController: ContestantController = {
  // retrieve all contestants from database
  getAll: (_: Request, res: Response, next: NextFunction) => {
    fs.readFile(
      path.join(__dirname, '../db/db.json'),
      'utf-8',
      (err, data: string) => {
        if (err) return next(err);

        // console.log('data.length', JSON.parse(data).length);
        res.locals.contestants = JSON.parse(data) as Array<Survivors>;

        next();
      }
    );
  },

  // retrieve 32 random contesants
  getRandom: (_: Request, res: Response, next: NextFunction) => {
    fs.readFile(
      path.join(__dirname, '../db/db.json'),
      'utf-8',
      (err, data: string) => {
        if (err) return next(err);

        const parsedData: Array<Survivors> = JSON.parse(data);

        const generateRandomIndex = (): number =>
          Math.round(Math.random() * parsedData.length);

        const randomSurvivors: Set<Survivors> = new Set();

        while (randomSurvivors.size < 32) {
          randomSurvivors.add(parsedData[generateRandomIndex()]);
        }

        res.locals.random = [...randomSurvivors];

        next();
      }
    );
  },

  // retrieve contestants by category (season, zodiac sign, gender)
  getByCategory: (req: Request, res: Response, next: NextFunction) => {
    const { signSelection, genderSelection } = req.body;

    let convertedGenderSelection: Gender;
    if (genderSelection === 'men') convertedGenderSelection = 'm';
    if (genderSelection === 'women') convertedGenderSelection = 'f';

    fs.readFile(
      path.join(__dirname, '../db/db.json'),
      'utf-8',
      (err, data: string) => {
        if (err) return next(err);

        let parsedData: Array<Survivors> = JSON.parse(data);

        parsedData = parsedData.filter((survivor: Survivors) => {
          if (signSelection && !genderSelection)
            return survivor.zodiacSign === signSelection;
          if (!signSelection && genderSelection)
            return survivor.gender === convertedGenderSelection;

          return (
            survivor.zodiacSign === signSelection &&
            survivor.gender === convertedGenderSelection
          );
        });

        res.locals.contestantsByCategory = parsedData;

        next();
      }
    );
  },
};

export default contestantController;

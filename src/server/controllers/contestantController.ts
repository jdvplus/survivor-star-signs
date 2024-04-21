import { Request, Response, NextFunction } from 'express';

import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

import { ContestantController, Survivors } from '../../types.ts';

const __dirname = dirname(fileURLToPath(import.meta.url));

// const getByCharacteristic = (property, query) => {

// }

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

  // retrieve contestants by sign
  getBySign: (req: Request, res: Response, next: NextFunction) => {
    const { selectedSign } = req.body;

    fs.readFile(
      path.join(__dirname, '../db/db.json'),
      'utf-8',
      (err, data: string) => {
        if (err) return next(err);

        let parsedData: Array<Survivors> = JSON.parse(data);
        parsedData = parsedData.filter(
          (survivor: Survivors) => survivor.zodiacSign === selectedSign
        );

        res.locals.contestantsBySign = parsedData;

        next();
      }
    );
  },

  // retrieve contestants by gender
  getByGender: (req: Request, res: Response, next: NextFunction) => {
    const { selectedGender } = req.body;

    fs.readFile(
      path.join(__dirname, '../db/db.json'),
      'utf-8',
      (err, data: string) => {
        if (err) return next(err);

        let parsedData: Array<Survivors> = JSON.parse(data);
        parsedData = parsedData.filter(
          (survivor: Survivors) => survivor.gender === selectedGender
        );

        res.locals.contestantsByGender = parsedData;

        next();
      }
    );
  },
};

export default contestantController;

import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { ContestantController } from '../types.ts';

const contestantController: ContestantController = {
  getContestants: (req: Request, res: Response, next: NextFunction) => {
    fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
      if (err) return next(err);

      console.log('data.length', JSON.parse(data).length);
      res.locals.contestants = JSON.parse(data);

      next();
    });
  },
};

export default contestantController;

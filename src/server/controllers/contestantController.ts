import { Request, Response, NextFunction } from 'express';

import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

import { ContestantController } from '../../types.ts';

const __dirname = dirname(fileURLToPath(import.meta.url));

const contestantController: ContestantController = {
  getContestants: (req: Request, res: Response, next: NextFunction) => {
    fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
      if (err) return next(err);

      // console.log('data.length', JSON.parse(data).length);
      res.locals.contestants = JSON.parse(data);

      next();
    });
  },
};

export default contestantController;

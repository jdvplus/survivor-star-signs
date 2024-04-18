import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import path from 'path';

import { ContestantController } from '../types';

const contestantController: ContestantController = {
  getContestants: async (req: Request, res: Response, next: NextFunction) => {
    fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
      if (err) return next(err);
      console.log('data in CC', JSON.parse(data).length);
      res.locals.contestants = JSON.parse(data);
      next();
    });
  },
};

export default contestantController;

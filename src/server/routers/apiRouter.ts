import express from 'express';

import contestantController from '../controllers/contestantController.ts';

const { getContestants } = contestantController;

const router = express.Router();

router.get('/survivors', getContestants, (_, res) =>
  res.status(200).json(res.locals.contestants)
);

export default router;

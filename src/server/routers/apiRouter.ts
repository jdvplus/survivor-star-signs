import express from 'express';

import contestantController from '../controllers/contestantController.ts';

const { getContestants, getBySign } = contestantController;

const router = express.Router();

router.get('/survivors', getContestants, (_, res) =>
  res.status(200).json(res.locals.contestants)
);

router.post('/survivors', getBySign, (_, res) =>
  res.status(200).json(res.locals.contestantsBySign)
);

export default router;

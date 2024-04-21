import express from 'express';

import contestantController from '../controllers/contestantController.ts';

const { getAll, getRandom, getBySign } = contestantController;

const router = express.Router();

router.get('/survivors', getAll, (_, res) =>
  res.status(200).json(res.locals.contestants)
);

router.get('/random', getRandom, (_, res) =>
  res.status(200).json(res.locals.random)
);

router.post('/survivors', getBySign, (_, res) =>
  res.status(200).json(res.locals.contestantsBySign)
);

export default router;

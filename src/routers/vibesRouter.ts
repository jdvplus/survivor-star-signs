import express, { Request, Response, NextFunction } from 'express';
const router = express.Router();

const logTime = (req: Request, res: Response, next: NextFunction) => {
  console.log('current time: ', Date.now());
  next();
};

router.use(logTime);

router.get('/', (req, res) => {
  res.send('welcome to vibes');
});

router.get('/about', (req, res) => {
  res.send('vibes --> about');
});

export default router;

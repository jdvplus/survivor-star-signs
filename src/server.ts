import express, { ErrorRequestHandler } from 'express';
import path from 'path';

import exampleRouter from './routers/exampleRouter';
import contestantController from './controllers/contestantController';
const { getContestants } = contestantController;

const app = express();
const PORT = 6969;

app.use('/assets', express.static(path.join(__dirname, '../public')));
app.use(express.json());

app.use('/router', exampleRouter);

app.get('/', (_, res) => res.send('hello world!'));

app.get('/survivors', getContestants, (_, res) =>
  res.status(200).json(res.locals.contestants)
);

app.use((_, res) => res.status(404).send('oops! nothing here.'));

const globalErrorHandler: ErrorRequestHandler = (err, _, res, _next) => {
  console.error(err.stack);
  res.status(500).send('something broke!');
};

app.use(globalErrorHandler);

app.listen(PORT, () => console.log(`server listening on port ${PORT}...`));

import ViteExpress from 'vite-express';
import express, { ErrorRequestHandler } from 'express';

import path from 'path';

import __dirname from '../utils/dirname.ts';
import apiRouter from './routers/apiRouter.ts';

const app = express();
const PORT = 6969;

app.use('/assets', express.static(path.join(__dirname, '../../public')));
app.use(express.json());

app.use('/api', apiRouter);

// TODO: uncommenting the below line causes client to stop rendering at '/'
// app.use((_, res) => res.status(404).send('oops! nothing here.'));

const globalErrorHandler: ErrorRequestHandler = (err, _, res, _next) => {
  console.error(err.stack);
  res.status(500).send('something broke!');
};

app.use(globalErrorHandler);

ViteExpress.listen(app, PORT, () =>
  console.log(`server listening on port ${PORT}...`)
);

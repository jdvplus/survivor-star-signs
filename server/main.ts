import ViteExpress from 'vite-express';
import express, { ErrorRequestHandler } from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

import apiRouter from '@/server/routers/apiRouter.ts';

const app = express();
const PORT = 6969;

app.use('/assets', express.static(path.join(__dirname, '../../public')));
app.use(express.json());

app.use('/api', apiRouter);

//FIXME: problem with catch-all route handler (404)

const globalErrorHandler: ErrorRequestHandler = (err, _, res, _next) => {
  console.error(err.stack);
  res.status(500).send('something broke!');
};

app.use(globalErrorHandler);

ViteExpress.listen(app, PORT, () =>
  console.log(`server listening on port ${PORT}...`)
);

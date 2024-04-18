import express, { ErrorRequestHandler } from 'express';
import path from 'path';

import vibesRouter from './routers/vibesRouter';

const app = express();
const PORT = 6969;

app.use('/assets', express.static(path.join(__dirname, '../public')));
app.use(express.json());

app.use('/vibes', vibesRouter);

app.get('/', (req, res) => {
  res.send('hello world!');
});

app.use((req, res) => {
  res.status(404).send('oops! nothing here.');
});

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('something broke!');
};

app.use(globalErrorHandler);

app.listen(PORT, () => console.log(`server listening on port ${PORT}...`));

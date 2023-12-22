import express from 'express';
import requestTime from './middlewares/requestTime';
import path from 'path';

const app = express();
const port = 3000;

app.use(requestTime);

app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, () => {
  console.log(`Listening on http://127.0.0.1:${port}/`);
});

import express from 'express';
import usersRouter from './routes/users';

const app = express();

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {
    text: 'world!',
  });
});

app.use('/users', usersRouter);

app.listen(3000, () => console.log('Listening on http://localhost:3000'));

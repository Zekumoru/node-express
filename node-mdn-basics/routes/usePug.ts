import { Express } from 'express';
import path from 'path';

const usePug = (app: Express) => {
  app.set('view engine', 'pug');
  app.set('views', path.join(__dirname, '../views'));

  app.get('/dogs', (req, res) => {
    res.render('dogs', {
      title: 'About dogs',
      message: 'Dogs rock!',
    });
  });
};

export default usePug;

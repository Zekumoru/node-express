import express from 'express';
import { User, UserRequest } from './users.types';

const router = express.Router();
const usersData: User[] = [{ name: 'Zekumoru' }, { name: 'Yuzuki' }];

router.get('/', (req, res) => {
  res.send('User list');
});

router.get('/new', (req, res) => {
  res.render('users/new', {
    name: 'Test',
  });
});

router.post('/', (req: UserRequest, res) => {
  const name = req.body.name;

  if (!usersData.find((user) => user.name === name)) {
    usersData.push({ name });
    res.redirect(`/users/${name}`);
  } else {
    console.log(usersData);
    res.render('users/new', {
      name,
      errorClass: 'show',
      errorMessage: 'User already exists!',
    });
  }
});

router.param('id', (req, res, next, id) => {
  req.user = usersData.find((user) => user.name === id);
  next();
});

router
  .route('/:id')
  .get((req, res) => {
    res.send(`Get User: ${req.user?.name}`);
  })
  .put((req, res) => {
    res.send(`Update User: ${req.user?.name}`);
  })
  .delete((req, res) => {
    res.send(`Delete User: ${req.user?.name}`);
  });

export default router;

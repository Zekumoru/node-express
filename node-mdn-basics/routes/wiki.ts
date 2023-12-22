import express from 'express';

const wiki = express.Router();

wiki.get('/', (req, res) => {
  res.send('Wiki home page');
});

wiki.get('/about', (req, res) => {
  res.send('About this wiki');
});

export default wiki;

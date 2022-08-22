// app.js

const express = require('express');
const activities = require('./data/activities');

const app = express();

app.use(express.json());

app.get('/activites', (req, res) => res.status(200).json({ activities }));

app.get('/activites/:id', (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  // console.log(activities);
  console.log(req);
  const result = activities.find((act) => act.id === Number(id));
  console.log(result);
  res.status(201).json(result);
});

module.exports = app;
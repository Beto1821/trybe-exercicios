// src/app.js
const express = require('express');
const validaName = require('./middlewares/nameValidation');
const validaPrice = require('./middlewares/priceValidation');
const validaDescription = require('./middlewares/descriptionValidation');
const validaData = require('./middlewares/dateValidation');
const validaRating = require('./middlewares/ratingValidation');
const difValidation = require('./middlewares/difValidation');
const validation = require('./middlewares/signupValidation');
const generateToken = require('../utils/generateToken');
const auth = require('./middlewares/auth');

const app = express();

app.use(express.json());

app.post('/act', 
  validaName,
  validaPrice,
  validaDescription,
  validaData,
  validaRating,
  difValidation, 
(req, res) => {
	return res.status(201).json([{ message: 'Atividade registrada com sucesso!' }])
});

app.post('/signup', validation, (req, res) => {
  const token = generateToken();
  return res.status(200).json({ token });
});

app.post('/activities', auth, (req, res) => {
 return res.status(201).json({ message: 'Atividade registrada com sucesso!' });
});


module.exports = app;
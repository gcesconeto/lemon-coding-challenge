require('dotenv').config();
const express = require('express');
const cors = require('cors');

const eligibilityController = require('../controllers/eligibility');
const helpController = require('../controllers/help');
const validateForm = require('../middlewares/validateForm');
const errorMiddleware = require('../middlewares/error');

const app = express();

app.use(express.json());

app.use(cors());

app.get('/', helpController);

app.get('/eligibility', helpController);

app.post(
  '/eligibility',
  validateForm,
  eligibilityController,
);

app.get('/coffee', (_req, res) => res.status(418).send("I'm a teapot!"));

app.use(errorMiddleware);

module.exports = app;

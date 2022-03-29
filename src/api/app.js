const express = require('express');
const cors = require('cors');

const eligibilityController = require('../controllers/eligibility');
const validateForm = require('../middlewares/validateForm');
const errorMiddleware = require('../middlewares/error');

const app = express();

app.use(express.json());

app.use(cors());

app.get('/coffee', (_req, res) => res.status(418).end());

app.post(
  '/eligibility',
  validateForm,
  eligibilityController,
);

app.use(errorMiddleware);

module.exports = app;

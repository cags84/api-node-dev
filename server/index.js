const express = require('express');
const requestId = require('express-request-id')();

const logger = require('./config/logger');

const app = express();

app.use(requestId);
app.use(logger.requests);

app.get('/', (req, res, next) => {
  res.send(`Id: ${req.id}`);
});

app.use((req, res, next) => {
  next({
    message: 'Route not found',
    statusCode: 404,
    level: 'warn',
  });
});

// No route found
app.use((err, req, res, next) => {
  const { statusCode = 500, message, level = 'error' } = err;
  const log = `${logger.header(req)} ${statusCode} ${message}`;

  logger[level](log);

  res.status(statusCode);
  res.json({
    message,
  });
});

module.exports = app;

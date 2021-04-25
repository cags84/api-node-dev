const express = require('express');
const morgan = require('morgan');

const logger = require('./config/logger');

const app = express();

app.use(
  morgan('combined', { stream: { write: (message) => logger.info(message) } })
);

app.get('/', (req, res, next) => {
  res.send('Hola mundo');
});

app.use((req, res, next) => {
  const statusCode = 404;
  const message = 'Route not found';

  logger.warn(message);

  res.status(statusCode);
  res.json({
    message,
  });
});

// No route found
app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;

  logger.error(message);

  res.status(statusCode);
  res.json({
    message,
  });
});

module.exports = app;

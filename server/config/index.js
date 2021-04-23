const dotEnv = require('dotenv');

dotEnv.config();

const config = {
  server: {
    hostname: process.env.SERVER_HOST || '127.0.0.1',
    port: process.env.SERVER_PORT || 3000,
  },
};

module.exports = config;

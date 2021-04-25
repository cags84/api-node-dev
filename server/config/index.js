const dotEnv = require('dotenv');

dotEnv.config();

const config = {
  server: {
    hostname: process.env.SERVER_HOST || '127.0.0.1',
    port: process.env.SERVER_PORT || 3000,
  },
  database: {
    connectionString: process.env.DB_CONNECTION_STRING,
    protocol: process.env.DATABASE_PROTOCOL,
    url: process.env.DATABASE_URL,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
  },
};

module.exports = config;

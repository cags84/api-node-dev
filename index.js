const http = require('http');

const app = require('./server');
const config = require('./server/config');
const database = require('./server/database');

// Connect to database
database.initDB();

const { hostname, port } = config.server;

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http(s)://${hostname}:${port}/`);
});

const express = require("express")
const helmet = require('helmet');
const server = express();

const carsRouter = require('./cars/cars-router');

// DO YOUR MAGIC

server.use(helmet());
server.use(express.json());

server.use('/cars', carsRouter);

server.get('/', (req, res) => {
    res.send(`
      <h2>Working Server</h>
    `);
  });

module.exports = server

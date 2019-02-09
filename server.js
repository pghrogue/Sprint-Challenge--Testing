const express = require('express');
const server = express();


// Middleware:
//server.use(express.json());


/* ---------- Route Handlers ---------- */

// GET /games
server.get( '/games', async (req, res) => {
  res.status(200).send('Hello');
});


// POST /games

module.exports = server;
// Base require:
//const express = require('express');

// Server:
const server = require('./server.js');
const PORT = 1234;

// Middleware:
//server.use(express.json());


/* ---------- Route Handlers ---------- */

// GET /games
// server.get( '/games', async (req, res) => {
//   res.status(200).send('Hello');
// });


// POST /games


/* ---------- Listener ---------- */
server.listen( PORT, () => {
  console.log(`Server listening on port: ${PORT}.\n`);
});
// Base require:
const express = require('express');

// Server:
const server = express();
const PORT = 1234;

// Middleware:
server.use(express.json());


/* ---------- Route Handlers ---------- */

// GET /games

// POST /games


/* ---------- Listener ---------- */
server.listen( PORT, () => {
  console.log(`Server listening on port: ${PORT}.\n`);
});
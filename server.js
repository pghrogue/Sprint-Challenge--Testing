const express = require('express');
const server = express();
const knex = require('knex');

const dbConfig = require('./knexfile');
const db = knex(dbConfig.development);


// Middleware:
server.use(express.json());


/* ---------- Route Handlers ---------- */

// GET /games
server.get( '/games', async (req, res) => {
  db('games')
    .then( (gamesList) => {
      res.json(gamesList);
    })
    .catch( (err) => {
      res.status(500).json({ error: err });
    });
});


// POST /games

module.exports = server;
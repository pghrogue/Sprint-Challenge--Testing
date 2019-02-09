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
  // end-db
});


// POST /games
server.post( '/games', async (req, res) => {
  const game = req.body;

  // Only proceed if title and genre are in req
  if( game.title && game.genre ) {
    db('games').insert(game)
      .then( (newGame) => {
        res.status(201).json(newGame);
      })
      .catch( (err) => {
        res.status(500).json({ error: err });
      });
    // end-db
  }
});

module.exports = server;
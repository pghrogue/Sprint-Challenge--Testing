const request = require('supertest');
const server = require('./index.js');

describe('the server', () => {

  describe('the POST endpoint', () => {});
    // Should accept an object with: title, genre & releaseYear

    // Should validate the required fields of title & genre, otherwise return a 422.

    // Should verify that the endpoint returns a 201 with good data

    // Should verify that the endpoint returns a 400 for incorrect data

  describe('the GET endpoint', () => {});
    // Should return a status code 200

    // Should return the list of games

    // Should return an empty array if no games are stored


});
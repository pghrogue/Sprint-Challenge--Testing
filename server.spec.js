const request = require('supertest');
const server = require('./server.js');

describe('the server', () => {

  describe('the POST endpoint', () => {});
    const body = {
      title: 'Mortal Kombat',
      genre: 'Fighting',
      releaseYear: 1992
    };

    const badBody = {
      title: 'Mortal Kombat'
    }

  // Should accept an object with: title, genre & releaseYear
    it( 'should accept an object with fields', async () => {

      const response = await request(server).post('/games').send(body);

      expect(response.status).toBe(201);
    });

    // Should validate the required fields of title & genre, otherwise return a 422.
    it( 'should return 422 if missing data', async () => {
      const response = await request(server).post('/games').send(badBody);

      expect(response.status).toEqual(422);
    });

    // Should verify that the endpoint returns a 400 for incorrect data

  describe('the GET endpoint', () => {});

    // Should return a status 200
    it('should return an OK status', async () => {
      const expectedStatusCode = 200;

      const response = await request(server).get('/games');

      expect(response.status).toEqual(expectedStatusCode);
    });

    // Should return the json list of games
    it( 'should return a json list of games', async () => {
      const response = await request(server).get('/games');

      expect(response.type).toMatch(/json/i);
    });

    // Should return an empty array if no games are stored
    it( 'should return an empty array if no games are found', async () => {

    });

});
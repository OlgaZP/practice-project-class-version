const request = require('supertest');
const app = require('./../app');

describe('Teasting app', () => {
  describe('testing /', () => {
    it('should return status 200 Hello world', done => {
      request(app)
        .get('/')
        .expect(200)
        .expect('Hello world')
        .end(done);
    });
  });
});

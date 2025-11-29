const request = require('supertest');
const app = require('../../src/app');

describe('integration tests - routes', () => {
  test('GET /tasks should return 200', async () => {
    const res = await request(app).get('/tasks');
    expect(res.statusCode).toBe(200);
  });
});

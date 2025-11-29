const request = require('supertest');
const app = require('../../src/app');
const TaskModel = require('../../src/models/taskModel');

beforeEach(() => {
  TaskModel.clear();
});

test('IN01: GET /tasks retorna array vazio inicialmente', async () => {
  const res = await request(app).get('/tasks');
  expect(res.status).toBe(200);
  expect(Array.isArray(res.body)).toBe(true);
  expect(res.body.length).toBe(0);
});

test('IN02: POST /tasks cria e GET /tasks retorna 1 item', async () => {
  const create = await request(app).post('/tasks').send({ title: 'integ task' });
  expect(create.status).toBe(201);

  const list = await request(app).get('/tasks');
  expect(list.status).toBe(200);
  expect(list.body.length).toBe(1);
  expect(list.body[0].title).toBe('integ task');
});

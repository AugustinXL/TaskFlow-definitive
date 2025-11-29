const TaskModel = require('../../src/models/taskModel');
const controller = require('../../src/controllers/tasksController');

// mock response
function mockRes() {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  return res;
}

beforeEach(() => {
  TaskModel.clear();
});

test('UT01: Deve criar tarefa válida', async () => {
  const req = { body: { title: 'Test', description: 'desc' } };
  const res = mockRes();
  await controller.createTask(req, res, jest.fn());

  expect(res.status).toHaveBeenCalledWith(201);
  const created = res.json.mock.calls[0][0];
  expect(created).toHaveProperty('id');
  expect(created.title).toBe('Test');
});

test('UT02: Deve rejeitar criação sem título', async () => {
  const req = { body: { description: 'sem titulo' } };
  const res = mockRes();
  await controller.createTask(req, res, jest.fn());

  expect(res.status).toHaveBeenCalledWith(400);
  const payload = res.json.mock.calls[0][0];
  expect(payload).toHaveProperty('errors');
  expect(payload.errors.length).toBeGreaterThan(0);
});

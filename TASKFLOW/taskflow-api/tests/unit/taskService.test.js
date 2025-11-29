const Task = require('../../src/models/taskModel');

// Aqui mostramos mocks para as funções do model
jest.mock('../../src/models/taskModel');
const service = require('../../src/controllers/taskController');

describe('unit tests - controller', () => {
  beforeEach(() => jest.resetAllMocks());
  test('createTask returns 201 on success', async () => {
    const req = { body: { title: 'x' } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    Task.create.mockResolvedValue({ id: 1, title: 'x' });
    await service.createTask(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
  });
});

const TaskModel = require('../models/taskModel');
const { validateTaskPayload } = require('../validators/taskValidator');

async function createTask(req, res, next) {
  try {
    const errors = validateTaskPayload(req.body);
    if (errors.length) return res.status(400).json({ errors });

    const task = TaskModel.create(req.body);
    return res.status(201).json(task);
  } catch (err) {
    next(err);
  }
}

async function listTasks(req, res, next) {
  try {
    const tasks = TaskModel.findAll();
    return res.json(tasks);
  } catch (err) {
    next(err);
  }
}

async function getTask(req, res, next) {
  try {
    const { id } = req.params;
    const task = TaskModel.findById(id);
    if (!task) return res.status(404).json({ error: 'Tarefa não encontrada' });
    return res.json(task);
  } catch (err) {
    next(err);
  }
}

async function updateTask(req, res, next) {
  try {
    const { id } = req.params;
    const errors = validateTaskPayload({ ...req.body, title: req.body.title ?? undefined });
    if (errors.length) return res.status(400).json({ errors });

    const updated = TaskModel.update(id, req.body);
    if (!updated) return res.status(404).json({ error: 'Tarefa não encontrada' });
    return res.json(updated);
  } catch (err) {
    next(err);
  }
}

async function deleteTask(req, res, next) {
  try {
    const { id } = req.params;
    const removed = TaskModel.delete(id);
    if (!removed) return res.status(404).json({ error: 'Tarefa não encontrada' });
    return res.status(204).send();
  } catch (err) {
    next(err);
  }
}

module.exports = { createTask, listTasks, getTask, updateTask, deleteTask };

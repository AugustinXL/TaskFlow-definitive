const Task = require('../models/taskModel');

exports.createTask = async (req, res) => {
  try {
    const { title } = req.body;
    if (!title || title.trim().length < 3) return res.status(400).json({ error: 'title is required (min 3 chars)' });
    const t = await Task.create(req.body);
    res.status(201).json(t);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'internal error' });
  }
};

exports.listTasks = async (req, res) => {
  try {
    const list = await Task.findAll();
    res.json(list);
  } catch (err) {
    res.status(500).json({ error: 'internal error' });
  }
};

exports.getTask = async (req, res) => {
  try {
    const t = await Task.findById(req.params.id);
    if (!t) return res.status(404).json({ error: 'not found' });
    res.json(t);
  } catch (err) {
    res.status(500).json({ error: 'internal error' });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const r = await Task.update(req.params.id, req.body);
    if (r.affected === 0) return res.status(404).json({ error: 'not found' });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'internal error' });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const r = await Task.remove(req.params.id);
    if (r.affected === 0) return res.status(404).json({ error: 'not found' });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'internal error' });
  }
};

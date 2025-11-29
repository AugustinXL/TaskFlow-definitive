const { v4: uuidv4 } = require('uuid');

class TaskModel {
  constructor() {
    this.tasks = new Map();
  }

  create({ title, description = '', done = false }) {
    const id = uuidv4();
    const task = { id, title, description, done, createdAt: new Date().toISOString() };
    this.tasks.set(id, task);
    return task;
  }

  findAll() {
    return Array.from(this.tasks.values());
  }

  findById(id) {
    return this.tasks.get(id) || null;
  }

  update(id, updates) {
    const existing = this.tasks.get(id);
    if (!existing) return null;
    const updated = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.tasks.set(id, updated);
    return updated;
  }

  delete(id) {
    return this.tasks.delete(id);
  }

  clear() {
    this.tasks.clear();
  }
}

module.exports = new TaskModel();

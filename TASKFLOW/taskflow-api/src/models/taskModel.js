const db = require('./db');

const Task = {
  create: (data) => new Promise((resolve, reject) => {
    const { title, description, priority = 3, risk = 'none' } = data;
    const stmt = `INSERT INTO tasks (title, description, priority, risk) VALUES (?,?,?,?)`;
    db.run(stmt, [title, description, priority, risk], function(err) {
      if (err) return reject(err);
      db.get('SELECT * FROM tasks WHERE id = ?', [this.lastID], (e, row) => {
        if (e) return reject(e);
        resolve(row);
      });
    });
  }),
  findAll: () => new Promise((resolve, reject) => {
    db.all('SELECT * FROM tasks ORDER BY created_at DESC', [], (err, rows) => {
      if (err) return reject(err);
      resolve(rows);
    });
  }),
  findById: (id) => new Promise((resolve, reject) => {
    db.get('SELECT * FROM tasks WHERE id = ?', [id], (err, row) => {
      if (err) return reject(err);
      resolve(row);
    });
  }),
  update: (id, data) => new Promise((resolve, reject) => {
    const { title, description, status, priority, risk } = data;
    const stmt = `UPDATE tasks SET title = ?, description = ?, status = ?, priority = ?, risk = ? WHERE id = ?`;
    db.run(stmt, [title, description, status, priority, risk, id], function(err) {
      if (err) return reject(err);
      resolve({ affected: this.changes });
    });
  }),
  remove: (id) => new Promise((resolve, reject) => {
    db.run('DELETE FROM tasks WHERE id = ?', [id], function(err) {
      if (err) return reject(err);
      resolve({ affected: this.changes });
    });
  })
};

module.exports = Task;

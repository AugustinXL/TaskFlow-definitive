const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.sqlite');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    status TEXT NOT NULL DEFAULT 'pendente',
    priority INTEGER DEFAULT 3,
    risk TEXT DEFAULT 'none',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);
});

db.close();
console.log('Database initialized.');

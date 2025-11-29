const express = require('express');
const bodyParser = require('body-parser');
const tasksRoute = require('./routes/tasks');

const app = express();
app.use(bodyParser.json());

app.use('/tasks', tasksRoute);

// health
app.get('/health', (req, res) => res.json({ status: 'ok' }));

// error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

module.exports = app;

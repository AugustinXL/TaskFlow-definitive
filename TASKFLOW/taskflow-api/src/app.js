const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/tasks', taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('TaskFlow API running on', PORT));

module.exports = app; // for testing

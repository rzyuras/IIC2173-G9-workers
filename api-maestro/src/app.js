require('dotenv').config({ path: '../../.env' });
const express = require('express');
const jobRoutes = require('./routes/jobRoutes');

const app = express();
app.use(express.json());

app.use('/job', jobRoutes);

app.get('/heartbeat', (req, res) => {
  res.send({ status: 'running' });
});

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Master API running on port ${PORT}`);
});

module.exports = app;

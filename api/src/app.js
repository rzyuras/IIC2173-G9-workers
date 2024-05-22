require('dotenv').config({ path: '../../.env' });
const express = require('express');
const { produceRecommendation, getJobStatus } = require('./services/recommendationService');

const app = express();
app.use(express.json());


app.post('/job', produceRecommendation);

app.get('/job/:id', getJobStatus);

app.get('/heartbeat', (req, res) => {
  res.send({status: true});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Master API running on port ${PORT}`);
});

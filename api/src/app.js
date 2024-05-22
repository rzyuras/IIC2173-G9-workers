require('dotenv').config({ path: '../../.env' });
const express = require('express');
const cors = require('cors');
const { produceRecommendation, getJobStatus } = require('./services/recommendationService');

const corsOptions = {
  origin: '*',
  allowHeaders: [
    'Access-Control-Allow-Headers',
    'Origin',
    'Accept',
    'X-Requested-With',
    'Content-Type',
    'Access-Control-Request-Method',
    'Access-Control-Request-Headers',
    'Auth',
  ],
  allowMethods: ['GET', 'HEAD', 'OPTIONS', 'PUT', 'POST', 'DELETE', 'PATCH'],
};

const app = express();
app.use(express.json());
app.use(cors(corsOptions));


app.post('/job', (req, res) => {
  const requestBody = req.body;

  // Enviar la respuesta con el cuerpo convertido a JSON
  res.send({ status: `Job created: ${requestBody}` });

  // Imprimir el cuerpo de la solicitud en el servidor
  console.log("body:", requestBody);
});

app.get('/job/:id', getJobStatus);

app.get('/heartbeat', (req, res) => {
  res.send({status: true});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Master API running on port ${PORT}`);
});

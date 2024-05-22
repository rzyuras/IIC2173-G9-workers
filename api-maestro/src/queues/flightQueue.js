require('dotenv').config({ path: '../../../.env' });
const { Queue } = require('bullmq');

const flightQueueConfig = {
  connection: {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT) || 6379,
    password: process.env.REDIS_PASSWORD,
  },
  defaultJobOptions: {
    removeOnComplete: 500,
    removeOnFail: 1000,
  }
};

const flightsQueue = new Queue('flights recommendation', flightQueueConfig);

module.exports = flightsQueue;

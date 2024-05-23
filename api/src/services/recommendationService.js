const { flightsQueue, flightQueueEvents } = require('../queues/flightQueue');

exports.produceRecommendation = async (req, res) => {
  try {
    const job = await flightsQueue.add('flights recommendation', {
      userId: req.body.userId, 
      latitudeIp: req.body.latitudeIp,
      longitudeIp: req.body.longitudeIp,
      lastFlight: req.body.lastFlight,
    });

    const completedJob = await job.waitUntilFinished(flightQueueEvents);
    console.log(`The recommendation are ${JSON.stringify(completedJob)}`);
    res.status(201).send(JSON.stringify(completedJob));
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.getJobStatus = async (req, res) => {
  try {
    const job = await flightsQueue.getJob(req.params.id);
    if (job) {
      const state = await job.getState();
      const progress = await job.progress();
      res.send({ id: job.id, state, progress });
    } else {
      res.status(404).send({ error: 'Job not found' });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

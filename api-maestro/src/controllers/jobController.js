const flightsQueue = require('../queues/flightQueue');

exports.createJob = async (req, res) => {
  try {
    const job = await flightsQueue.add('flightTask', req.body);
    res.status(201).send({ jobId: job.id });
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

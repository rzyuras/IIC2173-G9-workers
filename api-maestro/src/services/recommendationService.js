const flightsQueue = require('../queues/flightQueue');

exports.produceRecommendation = async (userId, latitudeIp, longitudeIp, lastFlight) => {
  await flightsQueue.add('flights recommendation', {
    userId, latitudeIp, longitudeIp, lastFlight
  });
  console.log(`Added recommendation job for user ${userId}`);
};

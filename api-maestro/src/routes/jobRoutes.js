const express = require('express');
const { createJob, getJobStatus } = require('../controllers/jobController');

const router = express.Router();

router.post('/', createJob);
router.get('/:id', getJobStatus);

module.exports = router;

const express = require('express');
const {
  createOutcome,
  getAllOutcomes,
} = require('./../controllers/outcomeController');

const router = express.Router();

router.route('/').get(getAllOutcomes).post(createOutcome);
module.exports = router;

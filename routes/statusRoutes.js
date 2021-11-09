const express = require('express');
const {
  createStatus,
  getAllStatuses,
} = require('./../controllers/statusController');

const router = express.Router();

router.route('/').get(getAllStatuses).post(createStatus);
module.exports = router;

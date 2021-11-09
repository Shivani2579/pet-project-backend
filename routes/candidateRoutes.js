const express = require('express');
const {
  getAllCandidates,
  createCandidate,
  getCandidate,
  deleteCandidate,
  updateCandidate,
} = require('./../controllers/candidateController');

const router = express.Router();

router.route('/').get(getAllCandidates).post(createCandidate);

router
  .route('/:id')
  .get(getCandidate)
  .patch(updateCandidate)
  .delete(deleteCandidate);

module.exports = router;

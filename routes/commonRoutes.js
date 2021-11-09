const express = require('express');
const { getPagedata } = require('./../controllers/commonController');

const router = express.Router();

router.route('/pagedata').get(getPagedata);
module.exports = router;

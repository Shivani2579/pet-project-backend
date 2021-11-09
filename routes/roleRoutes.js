const express = require('express');
const { createRole, getAllRoles } = require('./../controllers/roleController');

const router = express.Router();

router.route('/').get(getAllRoles).post(createRole);
module.exports = router;

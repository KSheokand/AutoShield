const express = require('express');
const { scanAWS } = require('../controllers/scanController');
const router = express.Router();

router.get('/', scanAWS);

module.exports = router;

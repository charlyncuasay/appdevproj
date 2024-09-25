const express = require('express');
const nodejs = require('../controller/nController');
const router = express.Router();


router.get('/', nodejs.index);
router.post('/save', nodejs.save);
router.get('/crud', nodejs.crud);

module.exports = router;
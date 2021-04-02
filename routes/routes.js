const express = require('express');
const { create } = require('../controllers/controller');

const router = express.Router();

router.post('/api/create-user', create);

module.exports = router;
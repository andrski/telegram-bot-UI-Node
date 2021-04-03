const express = require('express');
const { create, update, deleteUser } = require('../controllers/controller');

const router = express.Router();

router.post('/api/handle-user', create);
router.delete('/api/handle-user', deleteUser);
router.put('/api/handle-user', update);

module.exports = router;
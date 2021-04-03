const express = require('express');
const { create, update, deleteUser, getAll } = require('../controllers/controller');

const router = express.Router();

router.get('/api/handle-user', getAll);
router.post('/api/handle-user', create);
router.post('/api/delete-user', deleteUser);
router.put('/api/handle-user', update);

module.exports = router;
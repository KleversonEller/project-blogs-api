const router = require('express').Router();
const express = require('express');
const controller = require('../controllers/index');
const validToken = require('../middleware/auth/validToken');

router.use(express.json());

router.get('/', validToken, controller.user.getAll);
router.get('/:id', validToken, controller.user.getForId);
router.post('/', controller.user.create);

module.exports = router;
const router = require('express').Router();
const express = require('express');
const controller = require('../controllers/index');
const validToken = require('../middleware/auth/validToken');

router.use(express.json());

router.get('/', validToken, controller.category.getAll);
router.post('/', validToken, controller.category.create);

module.exports = router;
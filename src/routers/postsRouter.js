const router = require('express').Router();
const express = require('express');
const controller = require('../controllers/index');
const validToken = require('../middleware/auth/validToken');

router.use(express.json());

router.post('/', validToken, controller.post.create);

module.exports = router;
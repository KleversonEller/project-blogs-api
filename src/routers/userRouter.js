const router = require('express').Router();
const express = require('express');
const controller = require('../controllers/index');

router.use(express.json());

router.post('/', controller.user.create);

module.exports = router;
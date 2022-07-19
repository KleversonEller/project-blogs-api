const router = require('express').Router();
const express = require('express');
const loginController = require('../controllers/loginController');

router.use(express.json());

router.post('/', loginController.login);

module.exports = router;
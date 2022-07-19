require('dotenv').config();
const rescue = require('express-rescue');
const jwt = require('jsonwebtoken');
const loginService = require('../services/loginService');
const errorList = require('../helpers/erros');

const secret = process.env.JWT_SECRET;

const login = rescue(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) return next(errorList.required.error);

    const user = await loginService.login(email, password);
    if (user.error) return next(user.error);
    delete user.password;
    console.log(user);

    const jwtConfig = { expiresIn: '3h', algorithm: 'HS256' };
    const token = jwt.sign({ data: user }, secret, jwtConfig);

    return res.status(200).json({ token });
});

module.exports = { login };
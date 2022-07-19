require('dotenv').config();
const rescue = require('express-rescue');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const service = require('../services/index');

const secret = process.env.JWT_SECRET;

const create = rescue(async (req, res, next) => {
    const { error } = Joi.object({
        displayName: Joi.string().required().min(8),
        email: Joi.string().required().email(),
        password: Joi.string().required().min(6),
        image: Joi.string(),
    }).validate(req.body);
    if (error) return next(error);

    const result = await service.user.create(req.body);

    if (result.error) return next(result.error);

    const jwtConfig = { expiresIn: '3h', algorithm: 'HS256' };
    const token = jwt.sign({ data: result }, secret, jwtConfig);

    return res.status(201).json({ token });
});

const getAll = rescue(async (_req, res, next) => {
    const result = await service.user.getAll();

    if (!result) return next(result.error);
    return res.status(200).json(result);
});

const getForId = rescue(async (req, res, next) => {
    const { id } = req.params;
    const result = await service.user.getForId(id);

    if (result.error) return next(result.error);

    return res.status(200).json(result);
});

module.exports = { create, getAll, getForId };
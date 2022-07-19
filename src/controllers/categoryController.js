const rescue = require('express-rescue');
const Joi = require('joi');
const service = require('../services/index');

const create = rescue(async (req, res, next) => {
    const { error } = Joi.object({
        name: Joi.string().required(),
    }).validate(req.body);
    if (error) return next(error);

    const result = await service.category.create(req.body);
    if (!result) return next(result);

    return res.status(201).json(result);
});

const getAll = rescue(async (req, res, next) => {
    const result = await service.category.getAll();
    if (!result) return next(result);

    return res.status(200).json(result);
});

module.exports = { create, getAll };
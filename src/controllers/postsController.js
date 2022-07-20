const rescue = require('express-rescue');
const Joi = require('joi');
const service = require('../services/index');

const create = rescue(async (req, res, next) => {
    const { error } = Joi.object({
        title: Joi.string().required(),
        content: Joi.string().required(),
        categoryIds: Joi.array().items(Joi.number().required()).required(),
    }).validate(req.body);
    if (error) return res.status(400).json({ message: 'Some required fields are missing' });

    const { id } = req.user;

    const result = await service.post.create(req.body, id);
    if (result.error) return next(result.error);

    return res.status(201).json(result);
});

module.exports = { create };
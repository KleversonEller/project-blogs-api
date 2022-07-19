const { Category } = require('../database/models/index');
// const errorList = require('../helpers/erros');

const create = async (name) => {
    try {
        const result = await Category.create(name, { raw: true });
        return result;
    } catch (error) {
        return null;
    }
};

module.exports = { create };
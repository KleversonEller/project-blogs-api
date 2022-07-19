const { User } = require('../database/models/index');
const errorList = require('../helpers/erros');

const create = async (objeto) => {
    try {
        const result = await User.create(objeto);
        return result.dataValues;
    } catch (err) {
        return errorList.duplicity;
    }
};

module.exports = { create };
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

const getAll = async () => {
    try {
        const get = await User.findAll({ attributes: { exclude: ['password'] } });
        const result = get.map((user) => user.dataValues);
        return result;
    } catch (error) {
        return null;
    }
};

const getForId = async (id) => {
    try {
        const result = await User.findByPk(id, { attributes: { exclude: ['password'] } });
        return result.dataValues;
    } catch (error) {
        return errorList.userNotFound;
    }
};

module.exports = { create, getAll, getForId };
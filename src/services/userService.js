const { User } = require('../database/models/index');
const errorList = require('../helpers/erros');

const create = async (objeto) => {
    try {
        const result = await User.create(objeto,
            { attributes: { exclude: ['password'] }, raw: true });
        return result;
    } catch (err) {
        return errorList.duplicity;
    }
};

const getAll = async () => {
    try {
        const result = await User.findAll({ attributes: { exclude: ['password'] }, raw: true });
        return result;
    } catch (error) {
        return null;
    }
};

const getForId = async (id) => {
    try {
        const result = await User.findByPk(id,
            { attributes: { exclude: ['password'] }, raw: true });
        if (!result) return errorList.userNotFound;
        return result;
    } catch (error) {
        return errorList.userNotFound;
    }
};

module.exports = { create, getAll, getForId };
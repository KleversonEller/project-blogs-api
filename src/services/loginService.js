const { User } = require('../database/models/index');
const errorList = require('../helpers/erros');

const login = async (email) => {
    try {
        const result = await User.findOne({ where: { email } });
        return result.dataValues;
    } catch (error) {
        return errorList.invalidData;
    }
};

module.exports = { login };
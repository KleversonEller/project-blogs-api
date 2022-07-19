const { User } = require('../database/models/index');
const errorList = require('../helpers/erros');

module.exports = async (email) => {
    try {
        const result = await User.findOne({
            where: { email },
            attributes: { exclude: ['password'] },
            raw: true,
        });
        if (!result) return errorList.invalidData;
        return result;
    } catch (error) {
        return errorList.invalidData;
    }
};
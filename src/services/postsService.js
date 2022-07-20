const Sequelize = require('sequelize');
const config = require('../database/config/config');
const { BlogPost, PostCategory } = require('../database/models/index');
// const errorList = require('../helpers/erros');

const sequelize = new Sequelize(config.development);

const create = async ({ title, content, categoryIds }, userId) => {
    try {
        const result = await sequelize.transaction(async (t) => {
            const post = await BlogPost.create({ title, content, userId }, { transaction: t });
            const category = categoryIds.map((cat) => ({ postId: post.id, categoryId: cat }));
            await PostCategory.bulkCreate(category, { validate: true, transaction: t, raw: true });
            return post.toJSON();
        });
        return result;
    } catch (error) {
        return { error: { code: 'required', message: '"categoryIds" not found' } };
    }
};

module.exports = { create };
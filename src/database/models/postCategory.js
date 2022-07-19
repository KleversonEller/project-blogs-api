module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
        postId: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER,
            references: {
                model: 'PostCategories',
                key: 'id',
            },
        },
        categoryId: DataTypes.INTEGER,
    },
        {
            timestamps: false,
        })

    PostCategory.associate = (model) => {
        model.BlogPost.belongsToMany(model.Category, {
            as: 'Category',
            through: PostCategory,
            foreignKey: 'postId',
            otherKey: 'categoryId',
        });

        model.Category.belongsToMany(model.BlogPost, {
            as: 'BlogPost',
            through: PostCategory,
            foreignKey: 'categoryId',
            otherKey: 'postId',
        });
    }

    return PostCategory;
};
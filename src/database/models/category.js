module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: DataTypes.STRING,
    },
        {
            timestamps: false,
        });

    // User.associate = (models) => {
    //     User.hasMany(models.BlogPosts, { foreignKey: 'userId', as: 'BlogPosts' });
    // };

    return Category;
};
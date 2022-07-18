module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('User', {
        id: { primaryKey: true, type: DataTypes.INTEGER },
        displayName: DataTypes.STRING,
        email: { type: DataTypes.STRING, unique: true },
        password: DataTypes.STRING,
        image: DataTypes.STRING,
    },
        {
            timestamps: false,
        });

    Users.associate = (models) => {
        Users.hasMany(models.BlogPosts, { foreignKey: 'id', as: 'BlogPosts' });
    };

    return Users;
};
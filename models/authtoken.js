'use strict';

const jwt = require('jsonwebtoken');

module.exports = (sequelize, DataTypes) => {
    const AuthToken = sequelize.define(
        'AuthToken',
        {
            token: DataTypes.STRING,
            allowNull: false,
        },
        {}
    );
    AuthToken.associate = function({ User }) {
        AuthToken.belongsTo(User);
    };

    AuthToken.generate = async function(UserId) {
        if (!UserId) {
            throw new Error('AuthToken requires a user ID');
        }

        let token = jwt
            .sign({ _id: UserId }, process.env.JWT_SECRET)
            .toString();

        return AuthToken.create({ token, UserId });
    };

    return AuthToken;
};

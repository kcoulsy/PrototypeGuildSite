'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn(
            'AuthTokens', // name of Source model
            'userId', // name of the key we're adding
            {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Users', // name of Target model
                    key: 'id', // key in Target model that we're referencing
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            }
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn(
            'AuthToken', // name of Source model
            'UserId' // key we want to remove
        );
    },
};

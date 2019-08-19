'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Recruitments', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING,
            },
            enabled: {
                type: Sequelize.BOOLEAN,
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Recruitments');
    },
};

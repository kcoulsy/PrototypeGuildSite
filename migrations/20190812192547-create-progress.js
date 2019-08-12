'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Progresses', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING,
            },
            done: {
                type: Sequelize.INTEGER,
            },
            of: {
                type: Sequelize.INTEGER,
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Progresses');
    },
};

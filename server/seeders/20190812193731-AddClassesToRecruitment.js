'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            'Recruitments',
            [
                {
                    name: 'warrior',
                    enabled: true,
                },
                {
                    name: 'paladin',
                    enabled: true,
                },
                {
                    name: 'hunter',
                    enabled: true,
                },
                {
                    name: 'rogue',
                    enabled: true,
                },
                {
                    name: 'druid',
                    enabled: true,
                },
                {
                    name: 'mage',
                    enabled: true,
                },
                {
                    name: 'warlock',
                    enabled: true,
                },
                {
                    name: 'priest',
                    enabled: true,
                },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('recruitments', null, {});
    },
};

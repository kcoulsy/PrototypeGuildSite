'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            'Progresses',
            [
                {
                    name: 'MC',
                    done: 0,
                    of: 10,
                },
                {
                    name: 'ONY',
                    done: 0,
                    of: 1,
                },
                {
                    name: 'BWL',
                    done: 0,
                    of: 8,
                },
                {
                    name: 'ZG',
                    done: 6,
                    of: 10,
                },
                {
                    name: 'AQ20',
                    done: 0,
                    of: 10,
                },
                {
                    name: 'AQ40',
                    done: 0,
                    of: 10,
                },
                {
                    name: 'NAXX',
                    done: 0,
                    of: 14,
                },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('progresses', null, {});
    },
};

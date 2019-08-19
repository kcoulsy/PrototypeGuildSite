const PlayerController = require('./PlayerController');

module.exports = [
    {
        path: '/players/get',
        method: 'get',
        handler: PlayerController.get,
    },
    {
        path: '/players/import',
        method: 'post',
        handler: PlayerController.import,
    },
];
// @TODO - change import to put
// @TODO - add auth to import

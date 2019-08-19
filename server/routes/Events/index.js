const Events = require('./Events');

module.exports = [
    {
        path: '/events',
        method: 'get',
        handler: Events.find,
    },
    {
        path: '/events/create',
        method: 'post',
        handler: Events.create,
    },
];

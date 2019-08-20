const Events = require('./Events');
const Attendance = require('./Attendance');

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
    {
        method: 'get',
        path: '/events/:id/attendance',
        handler: Attendance.get
    }
];

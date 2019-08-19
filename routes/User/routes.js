const UserController = require('./UserController');

module.exports = [
    {
        path: '/user/register',
        method: 'post',
        handler: UserController.register,
    },
    {
        path: '/user/login',
        method: 'post',
        handler: UserController.login,
    },
    {
        path: '/user/logout',
        method: 'get',
        handler: UserController.logout,
    },
    {
        path: '/user/me',
        method: 'get',
        handler: UserController.me,
    },
];

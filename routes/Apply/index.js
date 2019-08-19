const ApplyController = require('./ApplyController');

module.exports = [
    {
        method: 'post',
        path: '/apply/submit',
        handler: ApplyController.submit,
    },
];

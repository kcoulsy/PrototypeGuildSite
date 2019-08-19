const SchemaController = require('./SchemaController');

module.exports = [
    {
        path: '/schema/get',
        method: 'get',
        handler: SchemaController.get,
    },
    {
        path: '/schema/:id',
        method: 'get',
        handler: SchemaController.get,
    },
    {
        path: '/schema/create',
        method: 'post',
        handler: SchemaController.create,
    },
    {
        path: '/schema/update',
        method: 'patch',
        handler: SchemaController.update,
    },
];

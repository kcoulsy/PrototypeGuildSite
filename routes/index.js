const eventsRoutes = require('./Events/routes');
const userRoutes = require('./User/routes');
const playersRoutes = require('./Players/routes');
const schemaRoutes = require('./Schema/routes');

module.exports = [
    ...eventsRoutes,
    ...userRoutes,
    ...playersRoutes,
    ...schemaRoutes,
];

const eventsRoutes = require('./Events/routes');
const userRoutes = require('./User/routes');
const playersRoutes = require('./Players/routes');

module.exports = [...eventsRoutes, ...userRoutes, ...playersRoutes];

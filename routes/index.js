const eventRoutes = require('./Events/routes');
const userRoutes = require('./User/routes');

module.exports = [...eventRoutes, ...userRoutes];

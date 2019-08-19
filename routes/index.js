const eventsRoutes = require('./Events/routes');
const userRoutes = require('./User/routes');
const playersRoutes = require('./Players/routes');
const schemaRoutes = require('./Schema/routes');
const applyRoutes = require('./Apply/routes');
const recruitmentRoutes = require('./Recruitment/routes');
const progressRoutes = require('./Progress/routes');

module.exports = [
    ...eventsRoutes,
    ...userRoutes,
    ...playersRoutes,
    ...schemaRoutes,
    ...applyRoutes,
    ...recruitmentRoutes,
    ...progressRoutes
];

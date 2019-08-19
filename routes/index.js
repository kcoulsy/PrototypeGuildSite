const events = require('./Events');
const user = require('./User');
const players = require('./Players');
const schema = require('./Schema');
const apply = require('./Apply');
const recruitment = require('./Recruitment');
const progress = require('./Progress');

module.exports = [
    ...events,
    ...user,
    ...players,
    ...schema,
    ...apply,
    ...recruitment,
    ...progress
];

const { handleBodyParser, handleCookieParser } = require('./common');
const { handleAuth } = require('./auth');

module.exports = [handleBodyParser, handleCookieParser, handleAuth];

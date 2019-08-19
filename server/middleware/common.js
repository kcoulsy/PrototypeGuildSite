const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

exports.handleBodyParser = (server) => {
    server.use(bodyParser.json({ limit: '50mb' }));
    server.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
}

exports.handleCookieParser = (server) => {
    server.use(cookieParser());
}

const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

require('dotenv').config();

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const { sequelize } = require('./models');
const AuthMiddleware = require('./middleware/auth');
const applyRoutes = require('./utils/applyRoutes');
const routes = require('./routes');

// Test DB
sequelize
    .authenticate()
    .then(() => console.log('DB conntected'))
    .catch(e => console.log(e));

app.prepare().then(() => {
    const server = express();

    server.use(bodyParser.json({ limit: '50mb' }));
    server.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    server.use(cookieParser());
    server.use(AuthMiddleware);
    applyRoutes(routes, server);

    server.get('/manager/schemas/:id', (req, res) => {
        return app.render(req, res, '/manager/schemas/show', {
            id: req.params.id,
        });
    });

    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(port, err => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});

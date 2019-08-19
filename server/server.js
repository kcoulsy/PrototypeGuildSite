const express = require('express');
const next = require('next');

require('dotenv').config();

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const { sequelize } = require('./models');

// Test DB
sequelize
    .authenticate()
    .then(() => console.log('DB conntected'))
    .catch(e => console.log(e));

app.prepare().then(() => {
    const applyRoutes = require('./utils/applyRoutes');
    const applyMiddleware = require('./utils/applyMiddleware');
    const routes = require('./routes');
    const middleware = require('./middleware');

    const server = express();

    applyMiddleware(middleware, server);
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

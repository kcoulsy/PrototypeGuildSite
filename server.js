const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');

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
    const server = express();

    server.use(bodyParser.json({ limit: '50mb' }));
    server.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    server.use(require('./routes/routes'));

    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(port, err => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});

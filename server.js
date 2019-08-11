const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const progressValues = require('./constants/progress');

app.prepare().then(() => {
    const server = express();

    server.use(bodyParser.json({ limit: '50mb' }));
    server.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

    server.get('/', (req, res) => {
        return app.render(req, res, '/', {
            recruitment: {
                warrior: 1,
            },
            progress: progressValues,
        });
    });

    server.post('/apply/submit', (req, res) => {
        console.log(req.body);
        res.send({ value: 'hello' });
    });

    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(port, err => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});

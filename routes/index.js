const fs = require('fs');
const path = require('path');

const routes = fs
    .readdirSync(__dirname, { withFileTypes: true })
    .reduce((acc, dir) => {
        if (!dir.isDirectory()) return acc;

        const routes = require(path.join(__dirname, dir.name));

        return acc.concat(routes);
    }, []);

module.exports = routes;

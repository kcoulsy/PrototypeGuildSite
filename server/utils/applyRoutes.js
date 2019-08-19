module.exports = (routes = [], server) => {
    for (const route of routes) {
        const { method, path, handler } = route;
        server[method](path, handler);
    }
};

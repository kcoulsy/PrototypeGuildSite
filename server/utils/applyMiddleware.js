module.exports = (middlewareHandlers = [], server) => {
    for (const middleware of middlewareHandlers) {
        middleware(server);
    }
};

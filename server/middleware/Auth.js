const { User, AuthToken } = require('../models');

const authMiddlware = async function(req, res, next) {
    const token = req.cookies.auth_token || req.headers.authorization;

    if (token) {
        const authToken = await AuthToken.findOne({
            where: { token },
            include: User,
        });
        if (authToken) {
            req.user = authToken.User;
        }
    }
    next();
};

exports.handleAuth = server => {
    server.use(authMiddlware);
};

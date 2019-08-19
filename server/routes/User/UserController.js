const bcrypt = require('bcrypt');
const { User } = require('../../models');

exports.register = async (req, res) => {
    const hash = bcrypt.hashSync(req.body.password, 10);

    try {
        let user = await User.create(
            Object.assign(req.body, { password: hash })
        );

        // data will be an object with the user and it's authToken
        let data = await user.authorize();

        // send back the new user and auth token to the
        // client { user, authToken }
        return res.json(data);
    } catch (err) {
        return res.status(400).send(err);
    }
};

exports.login = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res
            .status(400)
            .send('Request missing username or password param');
    }

    try {
        let user = await User.authenticate(username, password);

        return res.json(user);
    } catch (err) {
        return res.status(400).send('invalid username or password');
    }
};

exports.logout = async (req, res) => {
    const {
        user,
        cookies: { auth_token: authToken },
    } = req;

    if (user && authToken) {
        await req.user.logout(authToken);
        return res.status(204).send();
    }

    return res.status(400).send({ errors: [{ message: 'not authenticated' }] });
};

exports.me = async (req, res) => {
    if (req.user) {
        return res.send(req.user);
    }
    res.status(404).send({ errors: [{ message: 'missing auth token' }] });
};

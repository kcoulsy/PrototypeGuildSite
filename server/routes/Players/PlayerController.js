const { Player } = require('../../models');

exports.import = async (req, res) => {
    const { players } = req.body;

    try {
        const update = await Promise.all(
            players.map(player => {
                const promise = new Promise(async (resolve, reject) => {
                    try {
                        const [model, bool] = await Player.findOrCreate({
                            where: {
                                name: player.name,
                            },
                            defaults: player,
                        });

                        if (model.isNewRecord) return resolve();

                        const res = await model.update(player);

                        resolve(res);
                    } catch (e) {
                        reject();
                    }
                });
                return promise;
            })
        );

        res.send({ players: update });
    } catch (e) {
        res.status(400).send({ error: 'Unable to import users' });
    }
};

exports.get = async (req, res) => {
    try {
        const players = await Player.findAll();
        res.send({ players });
    } catch (e) {
        res.send({ error: 'Unable to retrieve players' });
    }
};

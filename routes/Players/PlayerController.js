const { Player } = require('../../models');

exports.import = (req, res) => {
    const { players } = req.body;

    players.map(player => {
        Player.findOrCreate({
            where: {
                name: player.name,
            },
            defaults: player,
        })
            .then(([model, bool]) => {
                if (model.isNewRecord) return;
                model
                    .update(player)
                    .then(res => {})
                    .catch(e => {
                        //TODO error handling a
                    });
            })
            .catch(e => {
                //TODO error handling
            });
    });
    res.send({ updating: true });
};

exports.get = (req, res) => {
    Player.findAll().then(players => {
        res.send(players);
    });
    //TODO error handling
};

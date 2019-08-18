const { Player } = require('../models');

exports.import = (req, res) => {
    const {players} = req.body;

    players.map((player) => {

        Player.findOrCreate({
            where: {
                name: player.name
            },
            defaults: player
        }).then(([model, bool]) => {
            if (model.isNewRecord) return;
            model.update(player).then(res => {
                
            }).catch(e => {

            })
        }).catch(e => {
            
        })
    })
    res.send({updating: true})
}

exports.get = (req, res) => {
    Player.findAll().then(players => {
        res.send(players);
    })
}
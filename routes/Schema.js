const { Schema } = require('../models');

exports.create = (req, res) => {
    const schema = JSON.stringify(req.body.schema);
    Schema.create({ schema, enabled: true }).then(data => {
        res.send(data);
    });
    //TODO error handling
};

exports.get = (req, res) => {
    if (req.params.id) {
        return Schema.findOne({ where: { id: req.params.id } }).then(
            response => {
                res.send(response);
            }
        );
    }
    Schema.findAll().then(response => {
        res.send(response);
    });
    //TODO error handling
};

exports.update = (req, res) => {
    const { id, enabled } = req.body;
    Schema.update({ enabled }, { where: { id } }).then(data => {
        res.send({ enabled });
    });
    //TODO error handling
};

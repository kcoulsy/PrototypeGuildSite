const { Event, Schema } = require('../../models');

exports.find = async (req, res) => {
    try {
        const events = await Event.findAll({
            include: [{ model: Schema, attributes: ['name'] }],
        });

        res.send({ events });
    } catch (e) {
        res.status(400).send();
    }
};

exports.create = async (req, res) => {
    const { name, date = new Date(), schemaId } = req.body;

    try {
        const schema = await Schema.findByPk(schemaId);

        if (!schema) {
            throw new Error(`Schema with id ${schemaId} does not exist`);
        }

        const event = await Event.create({ name, date, schemaId });
        res.send({ event });
    } catch (e) {
        res.status(400).send({ error: e.message });
    }
};

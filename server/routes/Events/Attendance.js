const { Attendance, Player } = require('../../models');

exports.get = async (req, res) => {
    const { id } = req.params;

    try {
        const attendance = await Attendance.findAll({
            where: { eventId: id },
            include: [{ model: Player, attributes: ['name'] }],
        });
        res.send({ attendance });
    } catch (e) {
        res.status(400).send();
    }
};

exports.set = async (req, res) => {
    const { playerId, role, late, eventId } = req.body;
    try {
        const [model, bool] = await Attendance.findOrCreate({
            where: {
                playerId,
                eventId,
            },
            defaults: {
                playerId,
                eventId,
            },
        });

        if (model.isNewRecord) {
            return res.send({ attendance: model });
        }
        const updated = await model.update({
            role,
            late,
        });

        return res.send({ attendance: updated });
    } catch (e) {
        res.status(400).send();
    }
};

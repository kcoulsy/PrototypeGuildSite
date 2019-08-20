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

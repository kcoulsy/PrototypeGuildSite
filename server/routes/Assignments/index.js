const { Assignment } = require('../../models');

module.exports = [
    {
        path: '/assignments/:id',
        method: 'get',
        handler: async (req, res) => {
            const eventId = req.params.id;
            // const assignments = [{
            //     eventId: 2, // mc event 2
            //     sectionIndex: 0, // lucifron
            //     typeIndex: 0, //tank assignments
            //     assignmentIndex: 0, // mt
            //     assignment: 'Favnir'
            // }, {
            //     eventId: 2, // mc event 2
            //     sectionIndex: 0, // lucifron
            //     typeIndex: 0, //tank assignments
            //     assignmentIndex: 1, // ot
            //     assignment: 'Syth'
            // }]
            const assignments = await Assignment.findAll({
                where: { eventId },
            });
            res.send({assignments});
            return;
            // return res.send(resp);
            const response = assignments.reduce((acc, curr) => {
                const {
                    sectionIndex,
                    typeIndex,
                    assignmentIndex,
                    assignment,
                } = curr;

                if (typeof acc[sectionIndex] === 'undefined') {
                    acc[sectionIndex] = {};
                }
                if (typeof acc[sectionIndex][typeIndex] === 'undefined') {
                    acc[sectionIndex][typeIndex] = {};
                }

                acc[sectionIndex][typeIndex][assignmentIndex] = assignment;
                // if (typeof acc[sectionIndex][typeIndex][assignmentIndex] === 'undefined') {
                // }
                return acc;
            }, {});

            res.send({
                event: {
                    id: eventId,
                    assignments: response,
                },
            });
        },
    },
    {
        path: '/assignments',
        method: 'post',
        handler: async (req, res) => {
            const { assignments } = req.body;
            try {
                const updated = [];

                for (let i = 0; i < assignments.length; i++) {
                    const {
                        eventId,
                        sectionIndex,
                        typeIndex,
                        assignmentIndex,
                        assignment,
                    } = assignments[i];
                    console.log(assignments[i]);
                    const [model, bool] = await Assignment.findOrCreate({
                        where: {
                            eventId,
                            sectionIndex,
                            typeIndex,
                            assignmentIndex,
                        },
                        defaults: {
                            eventId,
                            sectionIndex,
                            typeIndex,
                            assignmentIndex,
                            assignment,
                        },
                    });
                    if (!model.isNewRecord) {
                        const updatedAssignment = await model.update({
                            eventId,
                            sectionIndex,
                            typeIndex,
                            assignmentIndex,
                            assignment,
                        });
                        updated.push(updatedAssignment);
                    } else {
                        updated.push(model);
                    }
                }

                return res.send({ updated });
            } catch (e) {
                res.status(400).send(e);
            }
        },
    },
];

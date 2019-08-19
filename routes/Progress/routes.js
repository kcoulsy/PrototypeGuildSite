const { Progress } = require('../../models');

module.exports = [
    {
        path: '/progress',
        method: 'get',
        handler: (req, res) => {
            Progress.findAll()
                .then(progress => {
                    res.send(progress);
                })
                .catch(e => res.status(400).send());
        },
    },
];

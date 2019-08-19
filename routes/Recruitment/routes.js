const { Recruitment } = require('../../models');

module.exports = [
    {
        path: '/recruitment',
        method: 'get',
        handler: (req, res) => {
            console.log('here')
            Recruitment.findAll()
                .then(recruitment => {
                    res.send(recruitment);
                })
                .catch(e => res.status(400).send());
        },
    },
];

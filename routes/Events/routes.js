module.exports = [
    {
        path: '/events',
        method: 'get',
        handler: (req, res) => {
            res.send('hello world');
        },
    },
];

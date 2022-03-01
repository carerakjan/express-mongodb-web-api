const createRouter = require('./utils/createRouter');

module.exports = {
    '/notifications': createRouter({
        model: 'notification',
        connection: {
            dbName: 'notifications'
        }
    })
};

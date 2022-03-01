const createRouter = require('./utils/createRouter');

module.exports = {
    '/notifications': createRouter({
        model: 'Notification',
        connection: {
            dbName: 'notifications'
        }
    })
};

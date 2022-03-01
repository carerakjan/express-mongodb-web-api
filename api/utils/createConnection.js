const mongoose = require('mongoose');
const env = require('./getEnv')();

module.exports = ({ dbName, options }) => {
    const uri = `mongodb://${env.MONGO_DB_ADDR}:${env.MONGO_DB_PORT}/${dbName}`;

    const newConnection = mongoose.createConnection(uri, Object.assign({
        useNewUrlParser: true
    }, options));

    newConnection.on('error', (err) => console.error(err));
    newConnection.once('open', () => console.log('Connected to Database: ' + dbName));

    return newConnection;
};

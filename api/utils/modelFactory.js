const mongoose = require('mongoose');

module.exports = ({ model, schema }) => (connection) => {
    return connection.model(model, new mongoose.Schema(require(`../schemes/${schema}`)))
}

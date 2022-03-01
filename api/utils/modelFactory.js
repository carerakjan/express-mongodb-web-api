module.exports = (modelName) => (connection) => require(`../models/${modelName}`)(connection);

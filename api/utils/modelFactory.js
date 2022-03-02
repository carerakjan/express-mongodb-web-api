module.exports = ({ model, schema }) => (connection) => {
    return connection.model(model, require(`../schemes/${schema}`))
}

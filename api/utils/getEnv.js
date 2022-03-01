if (!process.env.RUN_INTO_CONTAINER) {
    require('dotenv').config();
}

module.exports = () => process.env;

const fs = require('fs');
const path = require('path');
const parseSchema = require('./utils/parseSchema');

let definitions = {};

try {
    definitions = Object.fromEntries(
        fs
            .readdirSync(path.resolve(__dirname, './schemes'))
            .map(f => path.basename(f, '.js'))
            .map(f => [
                f[0].toUpperCase() + f.slice(1),
                parseSchema(require(`./schemes/${f}`))
            ])
    )
} catch (e) {
    console.warn(e);
}

module.exports = {
    info: {
        version: '1.0.0'
    },
    definitions,
    paths: {
        '/foo': [
            {
                method: 'GET',
                description: 'Getting all'
            },
            {
                method: 'POST',
                description: 'Creating one'
            }
        ],
        '/foo/:id': [
            {
                method: 'GET',
                description: 'Getting one'
            },
            {
                method: 'PATCH',
                description: 'Updating one'
            },
            {
                method: 'DELETE',
                description: 'Deleting one'
            }
        ]
    }
};

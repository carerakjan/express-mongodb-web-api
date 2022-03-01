const express = require('express');
const getMessage = require('../utils/getMessage');
const modelFactory = require('../utils/modelFactory');
const createConnection = require('../utils/createConnection');
const parseSchema = require('./parseSchema');

module.exports = ({ model, connection }) => {
    const router = express.Router();
    const definedModel = modelFactory({ model, schema: model.toLowerCase() });
    const Model = definedModel(createConnection(connection));

    const getSchema = (req, res, next) => {
        if (req.method === 'GET' && req.params.id === 'schema') {
            res.json(parseSchema(Model.schema));
        } else {
            next();
        }
    }

    const getModelById = async (req, res, next) => {
        let notification;

        try {
            notification = await Model.findById(req.params.id);

            if (!notification) {
                return res.status(404).json(getMessage({ err: 'Cannot find record' }));
            }
        } catch (err) {
            return res.status(500).json(getMessage({ err }));
        }

        res.model = notification;
        next();
    }

    const middlewares = [
        getSchema,
        getModelById
    ];

    // Getting all
    router.get('/', async (req, res) => {
        try {
            const notifications = await Model.find();

            res.json(notifications);
        } catch (err) {
            res.status(500).json(getMessage({ err }));
        }
    })

    // Getting one
    router.get('/:id', middlewares, (req, res) => {
        res.json(res.model);
    })

    // Creating one
    router.post('/', async (req, res) => {
        const notification = new Model(req.body);

        try {
            const newNotification = await notification.save();

            res.status(201).json(newNotification);
        } catch (err) {
            res.status(400).json(getMessage({ err }));
        }
    })

    // Updating one
    router.patch('/:id', middlewares, async (req, res) => {
        Object.entries(req.body).forEach(([key, val]) => {
            res.model[key] = val;
        });

        try {
            const updatedNotification = await res.model.save();
            res.json(updatedNotification);
        } catch (err) {
            res.status(400).json(getMessage({ err }));
        }
    })

    // Deleting one
    router.delete('/:id', middlewares, async (req, res) => {
        try {
            await res.model.remove();
            res.json(getMessage({ message: 'Deleted record: ' + req.params.id }));
        } catch (err) {
            res.status(500).json(getMessage({ err }));
        }
    });

    return router;
}

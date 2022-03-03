const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    showNotification: {
        type: Boolean,
        required: true
    },
    notificationType: {
        type: String,
        required: false,
        default: 'popup'
    },
    title: {
        type: String,
        required: false
    },
    tKey: {
        type: String,
        required: false
    },
    articleId: {
        type: String,
        required: false
    }
}, {
    timestamps: true
});

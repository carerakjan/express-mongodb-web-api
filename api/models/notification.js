const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
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
    },
    dateTime: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = (connection) => {
    return connection.model('Notification', notificationSchema);
}

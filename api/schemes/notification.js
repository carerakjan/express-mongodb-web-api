module.exports = {
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
        required: false,
        default: Date.now
    }
};

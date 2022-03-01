module.exports = ({ err = 'Something went wrong', message }) => ({
    message: message || err.message || err
});

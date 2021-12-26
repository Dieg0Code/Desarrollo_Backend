const statusMessages = {
    200: 'Done',
    201: 'Created',
    400: 'Bad Request',
    500: 'Internal Error'
}
const chalk = require('chalk');

exports.success = (req, res, message, status) => {
    let statusCode = status;
    let statusMessage = message;
    if (!status) {
        status = 200;
    }

    if (!message) {
        statusMessage = statusMessages[status];
    }

    res.status(statusCode).send({
        error: '',
        body: statusMessage
    });
}

exports.error = (req, res, message, status, details) => {
    console.log(chalk.red(`[response error] ${details}`));

    res.status(status || 500).send({
        error: message,
        body: ''
    });
}
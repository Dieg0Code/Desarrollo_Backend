const express = require('express');
const bodyParser = require('body-parser');
const config = require('../config.js');
const post = require('./components/post/network');
const errors = require('../network/errors');

const chalk = require('chalk');

const app = express();

app.use(bodyParser.json());

// ROUTER
app.use('/api/post', post);

app.use(errors);

app.listen(config.post.port, () => {
    console.log(chalk.green(`Servicio Post corriendo en el puerto ${config.post.port}`));
});


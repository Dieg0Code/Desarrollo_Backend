const express = require('express');
const app = express();
const server = require('http').Server(app);

const config = require('./config');

const cors = require('cors');
const bodyParser = require('body-parser');
const socket = require('./socket');
const db = require('./db');
const router = require('./network/routes');
const chalk = require('chalk');


db(config.dbUrl);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

socket.connect(server);

router(app);

app.use(config.publicRoute, express.static('public')); // public is the folder where the frontend is

server.listen(config.port, () => {
    console.log(chalk.yellow(`app running on: ${config.host}:${config.port} 😜`));
});
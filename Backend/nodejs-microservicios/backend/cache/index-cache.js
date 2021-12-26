const express = require('express');
const bodyparser = require('body-parser');

const config = require('../config');
const router = require('./network')


const app = express();

app.use(bodyparser.json());

// Routes
app.use('/', router);

app.listen(config.cacheService.port, () => {
    console.log(`Redis service listening on port ${config.cacheService.port}`);
});
const express = require('express');

class AppController {
    constructor () {
        this.express = express();
    }

    middlewares() {}
    routes() {}
}

module.exports = new AppController();
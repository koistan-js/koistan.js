'use strict';

const EventEmitter = require('events');

class BaseClient extends EventEmitter {
    constructor(options ={}) {
        super();
    }
    kill() {
        // kill the client (exit websocket, and mark offline.)
    }
}

module.exports = BaseClient;
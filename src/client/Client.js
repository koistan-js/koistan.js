'use strict';

const BaseClient = require('./BaseClient')
const Events = require('../util/Constants.js')
/**
 * Main hub for interactions involving the Discord API.
 * @extends {BaseClient}
 */
debugger;
class Client extends BaseClient {
    /**
     * @param {ClientOptions} options Client Options
     */
    constructor(options) {
        super(Object.assign({ tokenType: 'Bot'}, options))
        
        if(!this.token && 'AUTH_TOKEN' in process.env) {
            this.token = process.env.AUTH_TOKEN
        } else {
            this.token = null;
        }
        this.readyAt = null;
        this.user = null;
        this.ws = new W
    }
    /**
     * Logs the client in based on the parameter `key`.
     * @param {string} key
     * @example <client>.login(<token>)
     */
    async login(key){
        if(!key || !key instanceof String) throw new Error("Invalid key");
        this.token = key = key.replace(/^(Bot|Bearer)\s*/i, '');
        this.emit(Events.Events.DEBUG, `Logging in using token: ${key.split('.').map((val, i) => (i > 1 ? val.replace(/./g, '*'): val)).join('.')}`)
    }
}

module.exports = Client;
const EventEmitter = require("events");
const { Status, WSCODES } = require("../../util/Constants");

class WebSocketManager extends EventEmitter {
    constructor(client){
        super();

        this.totalShards = 0;

        this.status = Status.LOADING

        this.reconnecting = false;
        
        this.ready = false;

    }

    async connect() {
        const invalidToken = new Error(WSCODES[4004]);
        const {
            url: gatewayURL,
            shards: recommendedShards,
            session_start_limit: sessionStartLimit
        } = await this.
    }
}
exports.Events = {
    DEBUG: "debug",
    READY: "ready"
}
exports.Status = {
    OFFLINE: 0,
    ONLINE: 1,
    DND: 2,
    IDLE: 3,
    LOADING: 4,
}
exports.WSCODES = {
    1000: 'WS_CLOSE_REQUESTED',
    4004: 'TOKEN_INVALID',
    4010: 'SHARDING_INVALID',
    4011: 'SHARDING_REQUIRED',
    4013: 'INVALID_INTENTS',
    4014: 'DISALLOWED_INTENTS'
}
const clie = require('../src/client/Client');

const client = new clie()
client.login("testing", () => {
    console.log("logged in lol")
});
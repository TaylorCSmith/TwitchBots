var tmi = require('tmi.js');

var options = {
    options: {
        debug: true
    }, 
    connection: {
        cluster: "aws",
        reconnect: true
    }, 
    identity: {
        username: "Your_Bot_Account",
        password: "go here to get an OAuth password for your bot account http://twitchapps.com/tmi/"
    }, 
    channels: ["Your_Channel_Name"]
};

var client = new tmi.client(options);
client.connect();

// add stuff that you want your bot to do in here. 
// documentation can be found here: https://docs.tmijs.org/v1.2.1/Events.html
var tmi = require("tmi.js");

var options = {
    options: {
        debug: true
    },
    connection: {
        reconnect: true
    },
    identity: {
        username: "",
        password: ""
    },
    channels: [""]
};

var client = new tmi.client(options);

var feelsgoodmanCount = 0;
var sendEmoteCountTime = 35000; // Default is 35 seconds

client.connect();

client.on("chat", function (channel, userstate, message, self) {
    if(message.includes('FeelsGoodMan')) {
        feelsgoodmanCount++;
    }
});

setInterval(function() {
    client.action('', 'FeelsGoodMan ' + feelsgoodmanCount.toLocaleString());
}, sendEmoteCountTime);

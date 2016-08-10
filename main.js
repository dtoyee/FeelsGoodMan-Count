var tmi = require("tmi.js");

var options = {
    options: {
        debug: true
    },
    connection: {
        reconnect: true
    },
    identity: {
        username: "FeelsGoodMan_count",
        password: "oauth:ptwwvabd56ac1yorkaj33or14efwbp"
    },
    channels: ["JapaneseSpiderCrab"]
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
    client.action('JapaneseSpiderCrab', 'FeelsGoodMan ' + feelsgoodmanCount.toLocaleString());
}, sendEmoteCountTime);
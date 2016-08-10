# FeelsGoodMan-Count
A simple Twitch chat bot that counts the FeelsGoodMan emote.

Developed by using Node.js and tmi.js.

Node.js - https://nodejs.org/en/ <br>
tmi.js - https://docs.tmijs.org/
Twitch OAuth - http://www.twitchapps.com/tmi/

# How to use
Make sure that you have Node.js installed on your computer. Download the required files and open in your favourite text editor. 
Navigate to the 'main.js' file and change the following lines: <br><br>
Line 11 - username: "yourusername"<br>
Line 12 - password: "youroauth"<br>
Line 14 - channels: ["channelsyouwanttojoin"]<br>
Line 20 - sendEmoteCountTime = 35000 "Twitch has a default delay of 30 seconds"<br>
Line 31 - Inside the first set of single quotes, put the channel name you wish for that message to send<br><br>
Save and navigate to that folder using the command prompt. To run the script, simply enter the command 'node main.js'.

const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.login('NzgwODkyNDE1NjU3MjQ2NzQw.X71svA.Rcuw2PfGkR8rBfPsP5ukPjgZl6E');

client.on('message', message => {
	console.log(message.content);
});

if (message.content === '!ip') {
	message.channel.send('185.249.198.38:30734');
}

if (message.content === '!invite') {
	message.channel.send('https://discord.gg/3RZ6sjGNJN');
}

if (message.content === '!vote') {
	message.channel.send('Panaudojus "steam vote" parašyk į serverio chat /checkvote kad gautum 2khttps://www.trackyserver.com/server/lsrp-634888');
}
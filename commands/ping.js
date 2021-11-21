const Discord = require('discord.js');

exports.run = async(client, message, args) => {
 
message.channel.send(`**Pong!** + ${client.ws.ping} +`)

};

exports.conf = {
  enabled : true,
  guildOnly : false,
  aliases : ['pong'],
  permLevel : 0,
  category : ''
};

exports.help = {
  name : 'ping pong',
  description : 'Botun pingini gösterir.',
  usage : 'ping'
};

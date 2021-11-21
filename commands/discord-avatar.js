const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {



    let replies = ["https://cdn.discordapp.com/attachments/911969603226304532/911969625762328656/discord-avatar-512-LDHDE.png", "https://cdn.discordapp.com/attachments/911969603226304532/911969748722544670/discord-avatar-512-PDRW5.png", "https://cdn.discordapp.com/attachments/911969603226304532/911969943849955328/discord-avatar-512-ULDSY.png", "https://cdn.discordapp.com/attachments/911969603226304532/911969958311903272/discord-avatar-512-0KMOG.png", "https://cdn.discordapp.com/attachments/911969603226304532/911969973528834108/discord-avatar-512-PZM8Y.png", "https://cdn.discordapp.com/attachments/911969603226304532/911970019649409064/discord-avatar-512-YILT2.png", "https://cdn.discordapp.com/attachments/911969603226304532/911970030802075678/discord-avatar-512-QMYSD.png"]


    let result = Math.floor((Math.random() * replies.length));



    let gifembed = new Discord.RichEmbed()

        .setTitle("Discord Random Avatar")

        .setColor("BLACK")

        .setFooter(`${message.author.tag} `, message.author.avatarURL)

        .setImage(replies[result]);



    message.channel.send(gifembed);

};



exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['discord-avatar','discordpp','discord-pp','ppdiscord'],

  permLevel: 0

};



exports.help = {

  name: 'discord-avatar',

  description: 'Rastgele discord-avatarı atar.',

  usage: 'avatar'

};

const Discord = require("discord.js")  
const client = new Discord.Client();      
const config = require("./config.js")   
const fs = require("fs");            
require('./util/Loader.js')(client);   

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection(); 
fs.readdir('./commands/', (err, files) => { 
  if (err) console.error(err);            
  console.log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {                       
    let props = require(`./commands/${f}`);   
    console.log(`${props.config.name} komutu yüklendi.`); 
    console.log(`Altyapı "Rosto" tarafından hazırlanmıştır. <3`)     
    client.commands.set(props.config.name, props); 
    props.config.aliases.forEach(alias => {          
      client.aliases.set(alias, props.config.name);  
    });
  });
})

client.login(process.env.token)


/* 
================================================================
| - Sa-As Sistemi (Satır: 40)
| - 
| -
| -
| -
| -
================================================================
*/




client.on("message", async msg => {
if(msg.channel.id === "kanalid") return;
if(msg.channel.id === "kanalid") return;
if(msg.channel.id === "kanalid") return;
if(msg.channel.id === "kanalid") return;
if(msg.channel.id === "kanalid") return;
if(msg.channel.id === "kanalid") return;
        if (
            msg.content.toLowerCase() == "sa" ||
            msg.content.toLowerCase() == "saa" ||
            msg.content.toLowerCase() == "saaa" ||
            msg.content.toLowerCase() == "slm" ||
            msg.content.toLowerCase() == "merhaba" ||
            msg.content.toLowerCase() == "Selam" 
        )
            if (msg.author.id == "745286954752671744") { msg.reply('Selam Kurucm! Nasılsın? Çay kahve ne alırsın??') } else {
            return msg.reply("Aleyküm selam hoşgeldin, nasılsın dostum?");
            }
});

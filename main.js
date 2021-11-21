const Discord = require("discord.js")  
const client = new Discord.Client();      
const config = require("./config.js")   
const fs = require("fs");            
require('./util/Loader.js')(client);   

const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 28000);

// ⛔ Önemli: 7/24 kodu, "CodeMareFi"ye aittir.
// Orijinali: https://codemarefi.blogspot.com/2019/11/discord-bot-724-aktif-yapma-komutu.html

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
| - Oto-Tepki Sistemi (Satır: 64)
| - Link & Reklam Engel Sistemi (Satır: 80)
| - Küfür Engel Sistemi (Satır: 173)
| - Ayarlamalı Everyone Engel Sistemi (Satır: 303)
| - Ayarlamalı Here Engel Sistemi (Satır: 328)
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





client.on('message', async (msg) => {
    if(!msg.guild) return;
    if(msg.channel.id === "kanalid")  await msg.react('👍')
    if(msg.channel.id === "kanalid")  await msg.react('👎')
    if(msg.channel.id === "kanalid")  await msg.react('👍')
    if(msg.channel.id === "kanalid")  await msg.react('👎')
    if(msg.channel.id === "kanalid")  await msg.react('👍')
    if(msg.channel.id === "kanalid")  await msg.react('👎')
    if(msg.channel.id === "kanalid")  await msg.react('👍')
    if(msg.channel.id === "kanalid")  await msg.react('👎')
    });





client.on("message", async (msg) => {
const m = require("nodme")
if(msg.guild.id !== "serverid") return;
  let reklamsiz = m
    .replace(msg.content)
    .split("dsc.gg")
    .join("")
    .split("dc.gg")
    .join("")
    .split("discord.gg")
    .join("")
    .split("discrd")
    .join("")
    .split(".xyz")
    .join("")
    .split("xyz")
    .join("")
    .split("com")
    .join("")
    .split(".com")
    .join("")
    .split(".gq")
    .join("")
    .split("gq")
    .join("")
    .split(".tr")
    .join("")
    .split("tr")
    .join("")
    .split("bio")
    .join("")
    .split(".bio")
    .join("")
    .split("discordapp")
    .join("")
    .split(".gg")
    .join("")
    .split("www")
    .join("")
    .split(".gl")
    .join("")
    .split("gl")
    .join("")
    .split("org")
    .join("")
    .split(".org")
    .join("")
    .split(".tk")
    .join("")
    .split("tk")
    .join("")
    .split("pw")
    .join("")
    .split(".pw")
    .join("")
    .split("cf")
    .join("")
    .split(".cf")
    .join("")
    .split("biz")
    .join("")
    .split(".party")
    .join("")
    .split(".party")
    .join("")
    .split("https")
    .join("")
    .split("http")
    .join("")
    .split("me")
    .join("")
    .split("io")
    .join("")
    .split("net")
    .join("")
    .split(".me")
    .join("")
    .split("me")
    .join("")
    .split(".biz")
    .join("");
if (msg.content === kufursuz) return;
  msg.delete()
  const embed = new Discord.MessageEmbed()
  .addField(`${msg.member.nickname} adlı kullanıcı reklam yapmaya çalışıyordu, mesajını başarıyla sildim!`, `\`\`\`Yeni Mesajı:
  ${reklamsiz}\`\`\``)
msg.channel.send(embed).then(msg => msg.delete({ timeout: 3000 }))
});





client.on("message", async (msg) => {
const m = require("nodme")
if(msg.guild.id !== "serverid") return;
  let kufursuz = m
    .replace(msg.content)
    .split("mal")
    .join("")
    .split("amcık")
    .join("")
    .split("orsb")
    .join("")
    .split("mal")
    .join("")
    .split("yrk")
    .join("")
    .split("salak")
    .join("")
    .split("sik")
    .join("")
    .split("engelli")
    .join("")
    .split("amk")
    .join("")
    .split("yar")
    .join("")
    .split("4m1n4")
    .join("")
    .split("mk")
    .join("")
    .split("aq")
    .join("")
    .split("napim")
    .join("")
    .split("npm")
    .join("")
    .split("bnae")
    .join("")
    .split("aptal")
    .join("")
    .split("bane")
    .join("")
    .split("domal")
    .join("")
    .split("piç")
    .join("")
    .split("pij")
    .join("")
    .split("oc")
    .join("")
    .split("yarrak")
    .join("")
    .split("çük")
    .join("")
    .split("oç")
    .join("")
    .split("öc")
    .join("")
    .split("öç")
    .join("")
    .split("cük")
    .join("")
    .split("siktir")
    .join("")
    .split("orosbu")
    .join("")
    .split("orospu")
    .join("")
    .split("oro$pu")
    .join("")
    .split("yark")
    .join("")
    .split("yala")
    .join("")
    .split("s1k")
    .join("")
    .split("4pt4l")
    .join("")
    .split("apthal")
    .join("")
    .split("yarq")
    .join("")
    .split("slk")
    .join("")
    .split("y4rr4k")
    .join("")
    .split("qm")
    .join("")
    .split("4m")
    .join("")
    .split("meme")
    .join("")
    .split("SKİŞ")
    .join("")
    .split("S1K1Ş")
    .join("")
    .split("SKŞ")
    .join("")
    .split("SKS")
    .join("")
    .split("fuck")
    .join("")
    .split("mal")
    .join("")
    .split("siktim")
    .join("");
if (msg.content === kufursuz) return;
  msg.delete()
  const embed = new Discord.MessageEmbed()
  .addField(`${msg.member.nickname} adlı kullanıcının yeni mesajı:`, `\`\`\`Yeni Mesajı:
  ${kufursuz}\`\`\``)
msg.channel.send(embed).then(msg => msg.delete({ timeout: 5000 }))
});





client.on("message", msg => { 
    if(msg.guild.id !== "sunucuid") return;
    if(msg.author.id === client.user.id) return;
    if(msg.member.roles.cache.has("rolid")) return; //Rollerin Everyone & Here kullanmamaları için özel rol ayarlayabilirsiniz.
    if(msg.member.roles.cache.has("rolid")) return; //Rollerin Everyone & Here kullanmamaları için özel rol ayarlayabilirsiniz.
    if(msg.member.roles.cache.has("rolid")) return; //Rollerin Everyone & Here kullanmamaları için özel rol ayarlayabilirsiniz.
    if (msg.content.toLowerCase().includes('@here')) {
      msg.delete()
      let e = db.fetch(`etikete_${msg.author.id}`)
      if(!e) { return db.set(`etikete_${msg.author.id}`, 1); } else { 
        if(e !== 3) { //5 etikette ban sayıyı değişttirmeyin değiştirseniz bütün 5 yazan yerleri değiştirin
        db.add(`etikete_${msg.author.id}`, 1) 
        let ez = db.fetch(`etikete_${msg.author.id}`)
        if(ez === 3) { return msg.guild.members.ban(msg.author.id) && msg.channel.send("Kötü niyetli biri , **3 kere** `@here` etiketledi ve sunucudan engelledim.") } else { return; }
       } else {
          return msg.guild.members.ban(msg.author.id) && msg.channel.send("Kötü niyetli biri, **3 kere** `@here` etiketledi ve sunucudan engelledim.") 
        }
       }
    }
  })





client.on("message", msg => { 
    if(msg.guild.id !== "sunucuid") return;
    if(msg.author.id === client.user.id) return;
    if(msg.member.roles.cache.has("rolid")) return; //Rollerin Everyone & Here kullanmamaları için özel rol ayarlayabilirsiniz.
    if(msg.member.roles.cache.has("rolid")) return; //Rollerin Everyone & Here kullanmamaları için özel rol ayarlayabilirsiniz.
    if(msg.member.roles.cache.has("rolid")) return; //Rollerin Everyone & Here kullanmamaları için özel rol ayarlayabilirsiniz.
    if (msg.content.toLowerCase().includes('@everyone')) {
      msg.delete()
      let e = db.fetch(`etikete_${msg.author.id}`)
      if(!e) { return db.set(`etikete_${msg.author.id}`, 1); } else { 
        if(e !== 3) { //5 etikette ban sayıyı değişttirmeyin değiştirseniz bütün 5 yazan yerleri değiştirin
        db.add(`etikete_${msg.author.id}`, 1) 
        let ez = db.fetch(`etikete_${msg.author.id}`)
        if(ez === 3) { return msg.guild.members.ban(msg.author.id) && msg.channel.send("Kötü niyetli biri, **3 kere** `@everyone` etiketledi ve sunucudan engelledim.") } else { return; }
       } else {
          return msg.guild.members.ban(msg.author.id) && msg.channel.send("Kötü niyetli biri, **3 kere** `@everyone` etiketledi ve sunucudan engelledim.") 
        }
       }
    }
  })




// BOTU SES KANALINA SOKMA
client.on('ready', () => {
const ch = client.channels.cache.get('kanalid');

ch.join()
})

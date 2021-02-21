const Discord = require('discord.js');
const ayarlar = require('./ayarlar.json');
const bot = new Discord.Client()
const westra = new Discord.ShardingManager('./alone.js', {
    totalShards: 3,
    token: ayarlar.token
});

westra.spawn(); 

westra.on('launch', shard => {
  console.log(`**${shard.id}** ID'li shard başlatıldı.`)
});

setTimeout(() => {
    westra.broadcastEval("process.exit()");
}, 21600000);
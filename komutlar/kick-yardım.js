const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(' Kick Komutlarımız ')
.setTimestamp()
.addField(' Kick Log Kanalı.', '**▫️** **Kullanım  !kick-log #kanal**')
.addField(' Kick Yetkilisi', '**▫️** **Kullanım  !kick-yetkili-rol @rol**')
.addField(' Kick.', '**▫️** **Kullanım  !kick @user#2929 sebep**')
.setFooter('alone Bot', client.user.avatarURL)
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'kick-yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};
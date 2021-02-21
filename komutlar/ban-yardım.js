const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(' Ban Komutlarımız ')
.setTimestamp()
.addField(' Ban Log Kanalı.', '**▫️** **Kullanım  !ban-log #kanal**')
.addField(' Ban Yetkilisi', '**▫️** **Kullanım  !ban-yetkili-rol @rol**')
.addField(' Ban.', '**▫️** **Kullanım  !ban @user#2929 sebep**')
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
  name: 'ban-yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};
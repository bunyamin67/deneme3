const Discord = require('discord.js')
const moment = require("moment");
const db = require('quick.db')
const os = require("os");
const client = require("moment-duration-format");
const ayarlar = require('../ayarlar.json');
exports.run = async (client, message, args) => {
  
let uptime = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]")
let bel = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)
let bel2 = (process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2)
let aylartoplam = {
        "01": "Ocak",
        "02": "Şubat",
        "03": "Mart",
        "04": "Nisan",
        "05": "Mayıs",
        "06": "Haziran",
        "07": "Temmuz",
        "08": "Ağustos",
        "09": "Eylül",
        "10": "Ekim",
        "11": "Kasım",
        "12": "Aralık"
  }
 let aylar = aylartoplam 
 let duration = client.uptime

 let s = (`${moment(client.user.createdAt).format('DD')} ${aylar[moment(client.user.createdAt).format('MM')]} ${moment(client.user.createdAt).format('YYYY HH:mm:ss')}`)



 const Embed = new Discord.MessageEmbed()
  .setTitle(`alone Bot İstatistik.`)
 .setDescription(`
            **Sahip Bilgileri**
          :star:  isim Etiket ➤➤ **\`Shirzadov#2213\`**
          :star:  İD ➤➤ **\`788110262079193159\`**\n
           **Bot Sunucuları**
           :star: Sunucu Sayısı ➤➤ **\`${client.guilds.cache.size.toLocaleString()}\`**
           :star: Kullanıcı Sayısı ➤➤**\`${client.users.cache.size}\`**
           :star: Kanal  sayısı ➤➤  **\`${client.channels.cache.size.toLocaleString()}\`\n**  
           **Versiyon Bilgileri**
           :star:  DiscordJS ➤➤ **\`v${Discord.version}\`**
           :star:  NodeJS ➤➤ **\`${process.version}\`**\n
           **Bot Kullanım bilgileri**
           :star: Kuruluş ➤➤ **\`${s}\`**
           :star: Ping ➤➤ **\`${client.ws.ping}ms\`**
           :star: Bit  ➤➤ **\`${os.arch()}\`**
           :star: İşletim Sistemi ➤➤ **\`${os.platform()}\`**
           :star: Çalışma Süresi ➤➤  **\`${uptime}\`**
           :star: Bellek Kullanımı ➤➤ **\`${bel}\`**
           :star: Toplam Bellek Miktarı ➤➤ **\`${bel2}\`**
           :star: Yüklü Modül sayısı ➤➤ **\`48\`**
           :star: Komut Sayısı  ➤➤   **\`${client.commands.size}\`** 
           :star: CPU  \`\`\`fix\n➤➤ ${os.cpus().map((i) => `${i.model}`)[0]}\`\`\`
            **Bot ekstra bilgiler**
           :star: Ana Komut ➤➤ **\`${ayarlar.prefix}yardım\`** 
           :star: Veri Kaydı ➤➤ **\`quick.db\`**
           :star: quick.db Komut sayısı ➤➤ **\`30\`*
`)          

  message.channel.send(Embed)
};
 
exports.conf = { 
  enabled: true,
  guildOnly: false,
  aliases: ['istatistik'],
  permLevel: 0
};
 
exports.help = {
  name: 'i',
};
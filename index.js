const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', message => {
  if (message.author.bot) return;

  if (message.content.includes('にくかおくん')) {
    const responses = [
      "なんだろ",
      "よんだかな",
      "はい",
      "なにかな",
      "なんかようかな"
    ];
    const randomIndex = Math.floor(Math.random() * responses.length);
    message.channel.send(responses[randomIndex]);
    return; // ← ここで終わらせておくと「ダブル反応」防止！
  }

  // それ以外は一定確率で「相槌」
  if (Math.random() < 0.2) { // ← 20%の確率（お好みで調整！）
    const aizuchi = [
      "はえ～",
      "ここから下↓フィーバータイム",
      "なるほどね",
      "楽しいことをかんがえよ",
      "あえ～",
      "ためになるね",
      "お前はもう、死んでいる"
    ];
    const randomIndex = Math.floor(Math.random() * aizuchi.length);
    message.channel.send(aizuchi[randomIndex]);
  }
});client.login(process.env.DISCORD_TOKEN);

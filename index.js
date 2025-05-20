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
  }
});


client.login(process.env.DISCORD_TOKEN);

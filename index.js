const { Client, GatewayIntentBits } = require('discord.js');
const fs = require('fs'); // ←追加
require('dotenv').config();

const getRandomResponse = (path) => {
  const data = fs.readFileSync(path, 'utf8');
  const lines = JSON.parse(data);
  const i = Math.floor(Math.random() * lines.length);
  return lines[i];
};

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
    message.channel.send(getRandomResponse('./responses.json'));
    return;
  }

  if (Math.random() < 0.1) {
    message.channel.send(getRandomResponse('./aizuchi.json'));
  }
});

client.login(process.env.DISCORD_TOKEN);

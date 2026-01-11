require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const TOKEN = process.env.TOKEN;

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once('ready', () => {
    console.log(`${client.user.tag} est connecté !`);
});

client.on('messageCreate', message => {
    if (message.author.bot) return;

    const prefix = "+";
    if (!message.content.startsWith(prefix)) return;

    const command = message.content.slice(prefix.length).trim().split(/ +/)[0];

    if (command === 'ping') {
        message.channel.send('Pong ! 🏓');
    }
});

client.login(TOKEN);

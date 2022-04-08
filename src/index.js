const { Client, Intents } = require("discord.js");
const token = process.env.TOKEN || require("../config.json").token;
const commandToken = "!";   // this could be moved to config.json

require("./heroku");

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});


client.once("ready", () => {
    console.log(`ready! logged in as ${client.user.tag}`);

    client.user.setActivity({ name: "der besten Musik", type: "LISTENING"});
});

client.on("messageCreate", message => {
    console.log(message.content);

    // simple message reply
    if (message.content == "ping")
        message.channel.send("pong!");

    // the old way of making commands
    if (!message.content.startsWith(commandToken)) return;

    var command = message.content.substring(1);

    if (command == "greet")
        message.reply(`Hallo ${message.author.username}! 🤖`);
    
    else if (command == "react")
        message.react("🤖");
});

// listening for slash commands
client.on("interactionCreate", interaction => {
    if (!interaction.isCommand) return;

    console.log(interaction.commandName);

    if (interaction.commandName == "ping")
        interaction.reply("pong!");
});

client.login(token);
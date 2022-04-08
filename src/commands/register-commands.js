const { SlashCommandBuilder } = require("@discordjs/builders");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");

// get token and id from config.json
const { token, appId } = require("../../config.json");

// get guild id from command line argument
var guildId = process.argv[2];

// make a list of commands to register
const commands = [
    new SlashCommandBuilder()
    .setName("ping")
    .setDescription("A test command")
].map(command => command.toJSON());

const rest = new REST({ version: 9 }).setToken(token);

rest.put(
    Routes.applicationCommands(appId, guildId),
    { body: commands })
    .then(() => console.log("registered commands for", guildId))
    .catch(console.error);
    
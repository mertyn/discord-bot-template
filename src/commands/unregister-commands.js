const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");

const { token, appId } = require("../../config.json");

var guildId = process.argv[2];

const rest = new REST({ version: 9 }).setToken(token);

// send empty array as commands
rest.put(Routes.applicationCommands(appId, guildId), { body: [] })
    .then(() => console.log("unregistered commands for", guildId))
    .catch(console.error);
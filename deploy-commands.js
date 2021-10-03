const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token, home, commands } = require('./config.js');
const { GetFiles } = require('./RobodJS/FileReader');

const rest = new REST({ version: '9' }).setToken(token);
const files = GetFiles(commands);


let command_list = []

files.forEach(command => {
	command_list.push(command.data.toJSON())
})

console.table(command_list)

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: command_list })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);
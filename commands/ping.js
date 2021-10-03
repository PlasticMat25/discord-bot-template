const { SlashCommandBuilder } = require('@discordjs/builders');
const wait = require('util').promisify(setTimeout);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Response with pong!')
        .addStringOption(option => option.setName('input').setDescription('Enter a string')),
	async execute(interaction) {
        await interaction.reply("Pong");
        await interaction.followUp('Pong again!');
        const string = interaction.options.getString('input');

        console.log(string);
	},
};
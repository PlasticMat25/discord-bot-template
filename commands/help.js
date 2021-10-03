const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Prints helpful information!'),
	async execute(interaction) {
		await interaction.reply('No I won\'t help you !');
	},
};
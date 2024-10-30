import { CommandInteraction, SlashCommandBuilder, EmbedBuilder, ColorResolvable } from 'discord.js';

// Config
import embed from '../../config/embed';

export const command = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Calculates the bot latency')
    .setDescriptionLocalizations({
      "fr": 'Caclule la latence du bot',
    }),

  async execute(interaction: CommandInteraction) {

    const latency = Date.now() - interaction.createdTimestamp;

    await interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setColor(embed.color as ColorResolvable)
          .setDescription(`🏓 Pong! ${latency}ms - private`)
      ]
    });
  },
};
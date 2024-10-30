import { Interaction, Events} from 'discord.js';

export default {
  name: Events.InteractionCreate,
  once: false,

  execute: async (interaction: Interaction) => {

    if (!interaction.isChatInputCommand()) return;
    const command = interaction.client.commands.get(interaction.commandName);
    if (!command) return;
    await command.execute(interaction);

  },
};
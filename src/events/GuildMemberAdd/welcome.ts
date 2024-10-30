import { Events, ChannelType, TextChannel } from 'discord.js';

export default {
  name: Events.GuildMemberAdd,
  once: false,

  execute: async (member: any) => {

    const channel = member.guild.channels.cache.find((channel: any) => channel.id === 'id');
    if (!channel || channel.type !== ChannelType.GuildText) return;

    (channel as TextChannel).send(`Welcome to the server ${member}!`);

  },
};
import { Client, Events, ActivityType } from 'discord.js';
import { Mongoose } from 'mongoose';

const mongoose: Mongoose = require('mongoose');
var colors = require('colors/safe');

export default {
  name: Events.ClientReady,
  once: true,

  execute: async (client: Client) => {

    console.log(colors.green(`Bot is ready as ${client.user?.tag}!`));

    mongoose.set('strictQuery', true);
    mongoose.connect(process.env.MONGO as string)
    .then(() => console.log(colors.green('MongoDB is connected')))
    .catch(() => console.log(colors.red('MongoDB is not connected')));

    client.user?.setPresence({
      status: "dnd",
      activities: [
        {
          name: "Structure for a Discord bot by Karusa",
          type: ActivityType.Streaming,
          url: "https://www.twitch.tv/karusa_"
        }
      ]
    });
  },
};
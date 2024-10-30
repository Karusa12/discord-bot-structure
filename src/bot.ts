import { Client, GatewayIntentBits, Partials, Collection } from "discord.js";
import * as dotenv from 'dotenv'
import { join } from 'path'
import { readdirSync } from 'fs'
import './routine';

import app from './api'

dotenv.config();

const client = new Client({
  intents: [
      GatewayIntentBits.AutoModerationConfiguration,
      GatewayIntentBits.AutoModerationExecution,
      GatewayIntentBits.DirectMessageReactions,
      GatewayIntentBits.DirectMessageTyping,
      GatewayIntentBits.DirectMessages,
      GatewayIntentBits.GuildEmojisAndStickers,
      GatewayIntentBits.GuildIntegrations,
      GatewayIntentBits.GuildInvites,
      GatewayIntentBits.GuildMembers,
      GatewayIntentBits.GuildMessageReactions,
      GatewayIntentBits.GuildMessageTyping,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.GuildModeration,
      GatewayIntentBits.GuildPresences,
      GatewayIntentBits.GuildScheduledEvents,
      GatewayIntentBits.GuildVoiceStates,
      GatewayIntentBits.GuildWebhooks,
      GatewayIntentBits.Guilds,
      GatewayIntentBits.MessageContent,
  ],
  partials: [
      Partials.Channel,
      Partials.GuildMember,
      Partials.GuildScheduledEvent,
      Partials.Message,
      Partials.Reaction,
      Partials.ThreadMember,
      Partials.User
  ]
});

(client as any).commands = new Collection();

var colors = require('colors/safe');
const port = 1357;

app.listen(port, () => {
    console.log(colors.green(`Server is running on http://localhost:${port}`));
});

const handler = join(__dirname, './handlers');
readdirSync(handler).forEach(file => {
  const handlerFunction = require(`${handler}/${file}`);
  if (typeof handlerFunction === 'function') {
    handlerFunction(client);
  }
});

console.clear();

client.login(process.env.DISCORD_TOKEN);

export default client;
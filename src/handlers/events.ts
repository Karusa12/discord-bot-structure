import { Client } from 'discord.js';
import { readdirSync } from 'fs';
import { join } from 'path';

const loadEvents = (client: Client, directory: string) => {
  const files = readdirSync(directory, { withFileTypes: true });

  for (const file of files) {
    const path = join(directory, file.name);

    if (file.isDirectory()) {
      loadEvents(client, path);  // Recursion for subdirectories
    } else if (file.name.endsWith('.js')) {
      const event = require(path).default;

      event.once
      ? client.once(event.name, (...args: any[]) => event.execute(...args)) 
      : client.on(event.name, (...args: any[]) => event.execute(...args));

      console.log(`Event ${event.name} loaded!`);
    }
  }
};

module.exports = (client: Client) => {
  const eventsDir = join(__dirname, '../events');
  loadEvents(client, eventsDir);
};
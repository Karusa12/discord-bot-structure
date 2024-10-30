import { ShardingManager } from "discord.js";
import * as dotenv from "dotenv";

dotenv.config();

const manager = new ShardingManager("./dist/bot.js", {
  token: process.env.DISCORD_TOKEN 
});

manager.on("shardCreate", shard => console.log(`Shard n°${shard.id} started`));

manager.spawn();
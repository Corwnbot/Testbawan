const Discord = require("discord.js");
const client = new Discord.Client();
const db = require("quick.db");
const ms = require('ms');
const fs = require("fs");
const alt = require("discord-anti-alt")
const prefix= "!"
const moment = require ('moment')
console.log("Done");

const { join } = require('path');
const { readdirSync } = require('fs');
client.on("ready", ()=>console.log("READY"));
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.queue = new Map()
const cooldowns = new Discord.Collection();
["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});
client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.guild) return;
let Prefix = await db.fetch(`Prefix_${message.guild.id}`);
  if (!Prefix) Prefix = prefix;

  if (!message.content.startsWith(prefix)) return;
  if (!message.member)
    message.member = await message.guild.fetchMember(message);
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (cmd.length === 0) return;
  let command = client.commands.get(cmd);
  if (!command) command = client.commands.get(client.aliases.get(cmd));
  if (command) command.run(client, message, args);
});

       
 


client.login('ODUxNDcxMjgwODQ5ODEzNTU0.YL4wbA.jmbgQNrHAV38oN_h9JWuyGZ2YV4')

const { MessageEmbed } = require("discord.js");
const db = require("quick.db")


module.exports = {
  name: "help",
  description:
    "Get list of all command and detail about command",
  usage: "help <cmd name>",
  category: "info",
  run: async (client, message, args) => { 
    
    if (args[0]) {
      const command = await client.commands.get(args[0]);
      if (!command) {
        return message.channel.send("Unknown Command: " + args[0]);
      }
      let embed = new MessageEmbed()
        .setAuthor(command.name, client.user.displayAvatarURL())
        .addField("Description،", command.description || "empty  :(")
        .addField("Usage،", "`" + command.usage + "`" || "empty")
        .setThumbnail(client.user.displayAvatarURL())
        .setColor("RANDOM")
        .setFooter(client.user.username, client.user.displayAvatarURL());
      return message.channel.send(embed);
    } else {
      const commands = await client.commands;
      let emx = new MessageEmbed()
        .setDescription("Command List")
        .setColor("RANDOM")
        .setFooter("Create By FamBawan")
        .setThumbnail(client.user.displayAvatarURL());
      let com = {};
      for (let comm of commands.array()) {
        let category = comm.category || "Unknown";
        let name = comm.name;
        if (!com[category]) {
          com[category] = [];
        }
        com[category].push(name);
      }
      for(const [key, value] of Object.entries(com)) {
        let category = key;
        let desc = "`" + value.join("`, `") + "`";
        emx.addField(`${category.toUpperCase()}[${value.length}]`, desc);
      }
      return message.channel.send(emx);
    }
  }
};

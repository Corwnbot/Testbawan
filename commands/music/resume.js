 const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'resume',
    aliases: [],
    category: 'Music',
    usage: '{prefix}resume',

    run: async(client, message) => {
      const { MessageEmbed } = require("discord.js");
    const serverQueue = message.client.queue.get(message.guild.id);
    if (serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume();
      let xd = new MessageEmbed()
      .setDescription("▶ Resumed the music for you!")
      .setColor("YELLOW")
      return message.channel.send(xd);
    }
    return message.channel.send("nothing play qashmar", message.channel);
  },
};

const { MessageEmbed } = require("discord.js");
module.exports = {
    name: 'pause',
    aliases: [],
    category: 'Music',
    usage: '{prefix}pause',
    run: async(client, message) =>{
    const serverQueue = message.client.queue.get(message.guild.id);
    if (serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
	    try{
      serverQueue.connection.dispatcher.pause()
	  } catch (error) {
        message.client.queue.delete(message.guild.id);
        return message.channel.send(`:notes: The player has stopped and the queue has been cleared.: ${error}`);
      }	    
      let xd = new MessageEmbed()
      .setDescription("⏸ Paused the music for you!")
      .setColor("YELLOW")
      .setTitle("Music has been paused!")
      return message.channel.send(xd);
    }
    return message.channel.send("nothing play qashmar");
  },
};

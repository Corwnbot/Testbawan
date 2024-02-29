
 const { MessageEmbed } = require("discord.js");
module.exports = {
    name: 'stop',
    aliases: ['dc'],
    category: 'Music',
    usage: '{prefix}stop',
    run: async(client, message) =>{
    const channel = message.member.voice.channel
    if (!channel)return message.channel.send("you are not in vc ");
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue)return message.channel.send("nothing play ");
   if(!serverQueue.connection)return
if(!serverQueue.connection.dispatcher)return
     try{
      serverQueue.connection.dispatcher.end();
      } catch (error) {
        message.guild.me.voice.channel.leave();
        message.client.queue.delete(message.guild.id);
        return message.channel.send(`:notes: The player has stopped and the queue has been cleared.: ${error}`);
      }
    message.client.queue.delete(message.guild.id);
    serverQueue.songs = [];

  },
};
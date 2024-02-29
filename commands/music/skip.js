  const { MessageEmbed } = require("discord.js");
module.exports = {
    name: 'skip',
    aliases: ['sk'],
    category: 'Music',
    usage: '{prefix}skip',
    run: async(client, message)=> {
     const { Util, MessageEmbed } = require("discord.js");
    const channel = message.member.voice.channel
    if (!channel)return message.channel.send("I'm sorry but you need to be in a voice channel to play music!");
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue)return message.channel.send("There is nothing playing that I could skip for you.");
        if(!serverQueue.connection)return
if(!serverQueue.connection.dispatcher)return
     if (serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume();
      let xd = new MessageEmbed()
      .setDescription("▶ Resumed the music for you!")
      .setColor("YELLOW")
      .setTitle("Music has been Resumed!")   
   return message.channel.send(xd).catch(err => console.log(err)); 
     }
       try{
      serverQueue.connection.dispatcher.end()
      } catch (error) {
        serverQueue.voiceChannel.leave()
        message.client.queue.delete(message.guild.id);
        return message.channel.send(` The player has stopped and the queue has been cleared.: ${error}`);
      }
  
  },
};

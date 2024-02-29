   const { MessageEmbed } = require("discord.js");
module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    category: 'Music',
    usage: '{prefix}nowplaying',
    run: async(client, message) =>{
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return message.channel.send("There is nothing playing in this server.");
    let song = serverQueue.songs[0]
    let thing = new MessageEmbed()
      .setAuthor("Now Playing")
      .setThumbnail(song.img)
      .setColor("BLUE")
      .addField("Name", song.title, true)
      .addField("Song Duration", song.duration, true)
      .addField("asked by", song.req.tag, true)
      .setFooter(`Views: ${song.views} | ${song.ago}`)
    return message.channel.send(thing)
  },
};

  const { MessageEmbed } = require("discord.js");
module.exports = {
    name: 'volume',
    aliases: [],
    category: 'Music',
    usage: '{prefix}volume [1-100]',

    run: async(client, message, args)=> {
     
    const channel = message.member.voice.channel;
    if (!channel)return   message.channel.send("you are not in vc channel");
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return message.channel.send("you are not in vc channel");
    if (!serverQueue.connection) return message.channel.send("you are not in vc channel");
    if (!args[0])return message.channel.send(`The current volume is: **${serverQueue.volume}**`);
     if(isNaN(args[0])) return message.channel.send(':notes: Numbers only!').catch(err => console.log(err));
    if(parseInt(args[0]) > 150 ||(args[0]) < 0) return message.channel.send('You can\'t set the volume more than 150. or lower than 0').catch(err => console.log(err));
    serverQueue.volume = args[0]; 
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);
    let xd = new MessageEmbed()
    .setDescription(`I set the volume to: **${args[0]/1}/100**`)
    .setAuthor("Server Volume Manager")
    .setColor("BLUE")
    return message.channel.send(xd);
  },
};

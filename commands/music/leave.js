const { MessageEmbed } = require("discord.js");
module.exports = {
    name: 'leave',
    aliases: ["l"],
    category: 'Music',
    usage: '{prefix}leave',
    run: async(client, message, args)=> {      
let channel = message.member.voice.channel;
        if (!channel) return message.channel.send("بچۆ ڤۆیسێک");
        if (!message.guild.me.voice.channel) return  message.channel.send("لە ڤۆیسا نیم!");

        try {
            await message.guild.me.voice.channel.leave();
        } catch (error) {
            await message.guild.me.voice.kick(message.guild.me.id);
            return  message.channel.send("Trying To Leave The Voice Channel...");
        }  
        return message.channel.send("ئەوە من ڕۆشتم ").catch(() => message.channel.send("🎶 Left The Voice Channel :C"));
    },
};
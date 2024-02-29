  const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'repeat',
    aliases: ['lp', 'loop'],
    category: 'Music',
    usage: '{prefix}repeat',

 run: async(client, message, args)=> {
    const serverQueue = message.client.queue.get(message.guild.id);
       if (serverQueue) {
            serverQueue.loop = !serverQueue.loop;
            return message.channel.send({
                embed: {
                    color: "GREEN",
                    description: `🔁  **|**  repeat is **\`${serverQueue.loop === true ? "enabled" : "disabled"}\`**`
                }
            });
        };
    return message.channel.send("nothing play qashmar");
  },
};

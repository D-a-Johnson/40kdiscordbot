require("dotenv").config();
const { Client, VoiceChannel, Intents, Collection, DiscordAPIError, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const fs = require('fs');
//const prefix = '!';
client.commands = new Collection();
client.events = new Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client);
})

//const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
//for (const file of commandFiles){
//  const command = require(`./commands/${file}`);
//  client.commands.set(command.name, command);
//}

/* 
    //if (xeno.some(word => message.content.includes(word))){
    //  message.reply("Dangerous content detected. Mind your words.");
    //}
  
  function kickUser(){
    if(!message.member.hasPermission('KICK_MEMBERS')){
        message.channel.send('You dont have permission');
        return;
      }
      const user = message.mentions.users.first();
      console.log(user)
      if(!user){
        message.reply('User not found.');
        return;
      }
      const member = message.guild.member.cache.get(user.id);
      if (member) {
        member.kick('Server log message').then(() =>
        {
          message.reply('${user.tag} was kicked.');
        })
      }
  }
*/
client.login(process.env.BOT_TOKEN);
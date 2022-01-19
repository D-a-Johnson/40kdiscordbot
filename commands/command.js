module.exports = {
    name: 'command',
    description: 'Embeded commands',
    execute(client, message,args){
        const { MessageEmbed } = require('discord.js');
        const newEmbed = new MessageEmbed()
        .setColor('#F2B6C1')
        .setTitle('Rules')
        .setDescription('Server Rules')
        .addFields(
            {name: 'Rule 1', value: 'Be cool'},
            {name: 'Rule 2', value: 'Have fun'},
        )
        .setImage('https://ih1.redbubble.net/image.828868631.3641/pp,840x830-pad,1000x1000,f8f8f8.jpg')
        .setFooter({text: 'Check Command Channel'});

        message.channel.send({embeds: [newEmbed]});
    }
}
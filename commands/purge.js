module.exports = {
    name: "purge",
    description: "removes messages that are younger than 14 days",
    async execute(client, message, args){
        if(!args[0]) return message.reply("enter the amount you want to purge");
        if(isNaN(args[0])) return message.reply("enter a number");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
        message.channel.send('Purged');
    }
}
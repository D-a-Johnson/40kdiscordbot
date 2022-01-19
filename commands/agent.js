module.exports = {
    name: 'agent',
    description: "assigns basic role",
    execute(message,args){

        //let role = message.guild.roles.cache.find(r => r.name === "Moderator");

        message.member.roles.add('684945930138812427').catch(console.error);
        message.reply('Welcome back agent.')
    }
}
module.exports = {
    name: 'sigmar',
    description: "basically an emote and reply",
    execute(client, message, args){
        if (message.member.roles.cache.has('684945930138812427') || message.member.roles.cache.has('684944926609375256')){
            message.react('🔨');
            message.reply('By the Comet!');
        } else {
            message.reply('You need higher permissions');
        }
    }
}
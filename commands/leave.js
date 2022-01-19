module.exports = {
    name: 'leave',
    description: 'makes the bot leave',
    async execute(client, message, args) {
        const voiuceChannel = message.member.voice.channel;

        if(!voiceChannel) return message.channel.send("Join voice to stop");
        //await voiceChannel.leave();//doesnt work user discord.js/voice
        await message.channel.send('leaving')
    }
}
const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
//const { joinVoiceChannel } = require('@discordjs/voice');
module.exports = {
    name: "play",
    description: "plays a youtube video",
    async execute(client, message, args){
        const voiceChannel = message.member.voice.channel;
        if(!voiceChannel) return message.channel.send('You need to be in a channel'); //for some reason if user joins and does the command incorrectly again it does this again
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if(!permissions.has('CONNECT') || !permissions.has('SPEAK')) return message.channel.send("Don't have permission");
        if(!args.length) return message.channel.send("Send the rest")

        const connection = await connectToChannel(voiceChannel);//doesnt work user discord.js/voice better
        const videoSearch = async (query)=>{
            const result = await ytSearch(query);
            return (result.videos.length > 1) ? result.videos[0] : null;
        }
        const video = await videoSearch(args.join(' '));

        if(video){
            const stream = ytdl(video.url, {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', ()=>{
                voiceChannel.leave();
            })
            await message.reply(`Playing ${video.title}`);
        } else {
            message.channel.send('None found');
        }
    }
}
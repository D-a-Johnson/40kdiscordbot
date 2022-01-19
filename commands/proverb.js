module.exports = {
    name: "proverb",
    description: "posts a warhammer quote",
    async execute(client, message, args){
        const fetch = require('node-fetch');
        let getProverb = async () => {
            let result = await fetch("http://proverbinatus.com/quotes/random/");
            let json = await result.text();
            return json;
          }
          let proverb = await getProverb();
          message.channel.send(proverb);
    }
}
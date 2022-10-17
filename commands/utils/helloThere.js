const { MessageEmbed } = require('discord.js'); 



module.exports = {
    name : 'helloThere',
    description : "return General Kenobi when a user send hello there",
    run:(client, message, args) => {
        const args = message.content.ignoreCase;
       if(args.equals("hello there")){
            message.channel.send("General Kenobi  ");
       }
	
      
        
    },
};

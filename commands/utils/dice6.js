const { MessageEmbed } = require('discord.js'); 


module.exports = {
    name : 'dice6',
    description : "dice6 command",
    run:(client, message, args) => {
        message.channel.send(""+ randomNumb(6));
        
    },
};

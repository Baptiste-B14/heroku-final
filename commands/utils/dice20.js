const { MessageEmbed } = require('discord.js'); 



module.exports = {
    name : 'dice20',
    description : "dice20 command",
    run:(client, message, args) => {
        message.channel.send(""+ randomNumb(20));
        
    },
};

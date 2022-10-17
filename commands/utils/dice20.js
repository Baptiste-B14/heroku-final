

const { MessageEmbed } = require('discord.js'); 
const { randomNumb } = require('./randomNumb');





module.exports = {
    name : 'dice20',
    description : "dice20 command",
    run:(client, message, args) => {
        
        var a= randomNumb.getRandomArbitrary(20);
	
        message.channel.send(""+ a);
        
    },
};

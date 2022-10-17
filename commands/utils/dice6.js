

const { MessageEmbed } = require('discord.js'); 
const { randomNumb } = require('./randomNumb');





module.exports = {
    name : 'dice6',
    description : "dice6 command",
    run:(client, message, args) => {
        
        var a= randomNumb.getRandomArbitrary(6);
	
        message.channel.send(""+ a);
        
    },
};

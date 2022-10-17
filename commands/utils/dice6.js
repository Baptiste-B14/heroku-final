

const { MessageEmbed } = require('discord.js'); 

//import{randomNumb} from './randomNumb.js';





module.exports = {
    name : 'dice6',
    description : "dice6 command",
    run:(client, message, args) => {
        
        var a= Math.random() *5 +1;
	
        message.channel.send(""+ a);
        
    },
};

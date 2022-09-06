

const { MessageEmbed } = require('discord.js'); 

//import{randomNumb} from './randomNumb.js';





module.exports = {
    name : 'dice20',
    description : "dice20 command",
    run:(client, message, args) => {
        
        var a=0;
		a=Math.random();
		var value = 0;


        value=Math.ceil(20*a);
        message.channel.send(""+ value);
        
    },
};

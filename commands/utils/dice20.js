const { MessageEmbed } = require('discord.js'); 

//import{randomNumb} from './randomNumb.js';



 function randomNumb(pNumber){
    var randomNumber = Math.floor(Math.random() * pNumber) + 1;
};

module.exports = {
    name : 'dice20',
    description : "dice20 command",
    run:(client, message, args) => {
        message.channel.send(""+ randomNumb(20));
        
    },
};

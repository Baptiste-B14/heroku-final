const { MessageEmbed } = require('discord.js'); 

//import{randomNumb} from './randomNumb.js';



 function randomNumb(pNumber){
  
  
  var a=0;
		a=Math.random();
		var value = 0;
  value=Math.ceil(pNumber*a);

};

module.exports = {
    name : 'dice20',
    description : "dice20 command",
    run:(client, message, args) => {
        message.channel.send(""+ randomNumb(20));
        
    },
};

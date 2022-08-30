const { MessageEmbed } = require('discord.js'); 


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

function randomNumb(pNumber){
    let RandomNumber = getRandomArbitrary(1,pNumber);
    let RoundRandom = Math.floor(RandomNumber);
    return RoundRandom;
}



module.exports = {
    name : 'dice20',
    description : "dice20 command",
    run:(client, message, args) => {
        message.channel.send(""+ randomNumb(20));
        
    },
};

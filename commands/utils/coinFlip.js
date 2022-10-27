const { MessageEmbed } = require('discord.js'); 



function coinFlip(){
    let Random = Math.random()*1;
    let Value = "";
    

    let Value2 = ["Pile", "Face"];
        
        let resultat = Value2[Random];
        return resultat;
       
};


module.exports = {
    name : 'coinflip',
    description : "coinflip command",
    run:(client, message, args) => {
        message.channel.send(""+ coinFlip());
        
    },
};

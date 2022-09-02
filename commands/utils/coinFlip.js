const { MessageEmbed } = require('discord.js'); 

function coinFlip(){
    let Random = getRandomInt(2);
    let Value = "";
    if(Random == 1){
        Value = "Pile";
    }
    if(Random == 2 ){
        Value = "Face";
    }

    let Value2 = ["Pile", "Face"];
        let ValueIndex = Math.round(Math.random() * Value2.length);
        let resultat = Value2[ValueIndex];
        return resultat;
       
}


module.exports = {
    name : 'coinflip',
    description : "coinflip command",
    run:(client, message, args) => {
        message.channel.send(""+ coinFlip());
        
    },
};

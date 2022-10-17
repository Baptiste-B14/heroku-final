const { MessageEmbed } = require('discord.js'); 



module.exports = {
    name : 'quote',
    description : "return a quote of Star Wars",
    run:(client, message) => {
        
        if(message.content.includes("hello there")){
            message.channel.send("General Kenobi");
            return;
        }else if(message.content.includes("€") ||  message.content.includes("$")){
            message.channel.send("I smell prooooofit !");
            return;

        }else if(message.content.includes("je peux") || message.content.includes("je veux") ){
            message.channel.send("Be Careful Not to Choke on Your Aspirations, Director");
            return;

        }else if(message.content.toLowerCase().includes("for the republic") || message.content.includes("Pour la république !") ){
            message.channel.send("FOR THE REPUBLIC !!!");
            return; 
        }else return;
        
    },
};

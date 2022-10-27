const quote = require("../../commands/utils/quote");

const prefix = '*';


module.exports = {
    name: "messageCreate",
    once: false,
    execute(client, message){
        
        if(message.author.bot) return;
        //quote.run(client, message);
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
        }else if(message.content.toLowerCase().includes("explosion") || message.content.toLowerCase().includes("exploser")){
            message.channel.send("calmitude et sérénité, rien ne va exploser");
        }else return;
        
        if(message.content.startsWith(prefix)){
           
            const args = message.content.slice(prefix.length).trim().split(/ +/g);
            const cmdName = args.shift().toLowerCase();
            if(cmdName.length == 0) return;
            let cmd = client.commands.get(cmdName);
            if(cmd) cmd.run(client, message, args);
        }

       
    },
};

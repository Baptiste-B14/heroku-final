const quote = require("../../commands/utils/quote ");

const prefix = '*';


module.exports = {
    name: "messageCreate",
    once: false,
    execute(client, message){
        
        if(message.author.bot) return;
        
        if(!message.content.startsWith(prefix)){
           
            quote.run(client, message);
            
            
            
            
        }else {
            const args = message.content.slice(prefix.length).trim().split(/ +/g);
            const cmdName = args.shift().toLowerCase();
            if(cmdName.length == 0) return;
            let cmd = client.commands.get(cmdName);
            if(cmd) cmd.run(client, message, args);
        }

       
    },
};

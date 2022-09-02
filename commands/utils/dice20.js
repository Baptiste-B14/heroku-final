const { MessageEmbed } = require('discord.js'); 

import{randomNumb} from './randomNumb.js';

module.exports = {
    name : 'dice20',
    description : "dice20 command",
    run:(client, message, args) => {
        message.channel.send(""+ randomNumb(20));
        
    },
};

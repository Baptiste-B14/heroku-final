const { MessageEmbed } = require('discord.js'); 

import{randomNumb} from './randomNumb.js';

module.exports = {
    name : 'dice6',
    description : "dice6 command",
    run:(client, message, args) => {
        message.channel.send(""+ randomNumb(6));
        
    },
};

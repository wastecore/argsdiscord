# ARGSDISCORD 💖

## ARGSDISCORD Is A Node.js Package/Module That Can Handle Arguments And Command Name In Discord.js, Eris, etc....

### EXAMPLE: 

```
const Discord = require('discord.js');
const client = new Client();

client.on('messageCreate', msg => {
    if (cmd(msg.content) === '!echo') {
        msg.reply(`${args(msg.content}`.join(" "));
    }
});
```

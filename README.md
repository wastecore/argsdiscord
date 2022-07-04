# ARGSDISCORD 💖

## ARGSDISCORD Is A Node.js Package/Module That Can Handle Arguments And Command Name In Discord.js, Eris, etc....

### Why ARGSDISCORD?

#### Because It Simplify Your Code And Make It More Readable ✨

### EXAMPLE: 

```
const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"]});
const { args, cmd } = require('argsdiscord');

client.on('messageCreate', msg => {
    if (cmd(msg.content) === '!echo') {
        msg.reply(args(msg.content));
    }
});

client.login("Your Token");
```

### args()

#### Get The Content Of Your Message Without The Command's Name!

### cmd()

#### Get The Command's Name Without The Content Of Your Message!

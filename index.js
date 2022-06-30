/*
    argsdiscord is a module that can get the args and cmd name of the message content (Discord.js, Eris, etc...)
*/

function args(content) {
    return content.split(/ +/ig);
}

function cmd(content) {
    let argss = args(content);
    let command = argss.shift();
    return command;
}

module.exports.cmd = cmd;
module.exports.args = args;
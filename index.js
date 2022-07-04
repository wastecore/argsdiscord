/* 
    To Get Message Content Without The Command Name Use args(MESSAGE CONTENT)
    To Get Command's Name Without The Arguments Use cmd(MESSAGE CONTENT)
 */

function args(content) {
    let args = content.split(/ +/ig);
    args.shift();
    return args.join(" ");
}

function cmd(content) {
    let args = content.split(/ +/ig);
    let command = args.shift();
    return command;
}

module.exports.cmd = cmd;
module.exports.args = args;

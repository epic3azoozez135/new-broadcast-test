const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$';

client.on("message", message => {

            if (message.content.startsWith(prefix + "obc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});
client.on('message', function(message) {
    let messageArray = message.content.split(" ");
    let args = messageArray[1]
    if(message.content.startsWith(prefix + "cc")) {
        //  if(Number(args) //== NaN) return message.reply(`Sry but its in numbers only no text`);
         if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply('You have no perms.')
        if(!args) return message.reply(`Pick a number`)
      
    let o;
    for(o = 1; o < `${parseInt(args) + 1}`; ++o)
    message.guild.createRole({name: `${o}`, color: "RANDOM"})
    message.reply(`Im making the colors now.`)
    // message.channel.send(`Now making the colors but if u made it like 1 it will be -1 , Q,E : If u made used the command and u typed in numbers \`${args}\` it will make one so it will be \`${--args}\``)
}
});
client.on('message', msg => {

    if (msg.content == '$join') {
        if (msg.member.voiceChannel) {

     if (msg.member.voiceChannel.joinable) {
         msg.member.voiceChannel.join().then(msg.react('white_check_mark'));
     }
    }
}
})
client.on('ready', () => {
    client.channels.get("523262583395057680").join(); 
    });
client.login(process.env.BOT_TOKEN);

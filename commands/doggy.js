const Discord = require("discord.js");
const superagent = require("superagent");

module.export.run = async (bot,message,args) => {

let {body} = await superagent
.get(`https://random.dog/woof.json`);

let dogembed = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle("Doggy :dog: ")
.setImage(body.url);

message.channel.send(dogembed)

}

module.exports.help = {
  name: "doggy"

}

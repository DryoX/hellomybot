const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let commander = new Discord.RichEmbed()
  .setDescription("All Commands That I Have | My Global Prefix Is * ")
  .setColor("#00ffe9")
  .addField("Help Command", " ============================== ")
  .addField("commands", "Check All The Commands!")
  .addField("Admin Commands", " ============================== ")
  .addField("ban", "Usage: Ban (Name/id) (Reason)")
  .addField("kick", "Usage: Kick (Name/id) (Reason)")
  .addField("Public Commands", " ============================== ")
  .addField("brodcast", "Usage: Brodcast (@Brodcast) (Information)")
  .addField("profile", "Check Your Profile")
  .addField("serverinfo", "Check Server Status/Info")
  .addField("report", "Usage: Report (Name/id) (Reason)")
  .addField("botinfo", "Check Bot Status/Info")
  .addField("ping", "Check Your Ping To The Bot!")
  .setTimestamp()

  return message.channel.send(commander);


}

module.exports.help = {
  name: "commands"
}

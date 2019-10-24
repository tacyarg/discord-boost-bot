require("dotenv").config();
const { envToConfig } = require("./libs/utils");

const config = envToConfig(process.env);

const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => console.log(`Discord Online`));
client.on("string", console.warn);
client.on("error", () => console.log("Discord Error"));
client.on("disconnect", () => console.log("Discord Disconnected"));
client.on("reconnecting", () => console.log("Discord Reconnecting"));

client.on("message", msg => {
  if (msg.content === "!boosters" || msg.content === "b!") {
    console.log(msg.guild.name, msg.channel.name)
    const nitro = msg.guild.members.filter(member => member.premiumSince);
    const users = nitro.map(kid => kid.user.username);
    msg.channel.send(
      "Users currently boosting this Discord: ```" + users.join(" \n") + "```"
    );
  }
});

client.login(config.discord.key);

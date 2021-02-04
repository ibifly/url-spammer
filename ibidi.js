const discord = require("discord.js");
const request = require("request");
const client = new discord.Client();
const chalk = require("chalk");
const guildid = "sunucu-id";

client.on("ready", async () => {
  client.user.setStatus("playing");
  client.user.setActivity(`qwe`);
  console.log("bot açıldı");
});

client.on("ready", async () => {
  setInterval(() => {
    console.log("başarılı bir şekilde açıldı.");
    let botToken ="";
    request({
      url: `https://discord.com/api/guilds/${client.guildid}/vanity-url`,
      method: "PATCH",
      json: {
        code: "url-name"
      },
      headers: {
        Authorization: `Bot ${botToken}`
      }
    });
  }, 1 * 5000);
});

client.login("").then(c => console.log(`giriş yapıldı!`)).catch(err => console.error("Bota giriş yapılırken başarısız olundu!"));

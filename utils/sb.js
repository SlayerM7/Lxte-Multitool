let afk = false;
const { logo } = require("./logo");
const open = require("open");
const ccx = require("chalk");
const { Client, RichEmbed } = require("discord.js");
const ms = require("ms");

const { white, blackBright } = require("chalk");

var mainColor = ccx.bold.rgb(200, 0, 200);

if (require("../data/data.json")[5]) {
  if (require("../data/data.json")[5].color === 1) {
    mainColor = ccx.bold.rgb(200, 0, 100);
  }
  if (require("../data/data.json")[5].color === 2) {
    mainColor = ccx.bold.rgb(60, 180, 70);
    //mainColor = green
  }
  if (require("../data/data.json")[5].color === 3) {
    mainColor = ccx.bold.rgb(220, 0, 220); // 220 0 220
    //   mainColor = magentaBright
  }
  if (require("../data/data.json")[5].color === 4) {
    mainColor = cyan;
  }
  if (require("../data/data.json")[5].color === 5) {
    mainColor = yellow;
  }
  if (require("../data/data.json")[5].color === 6) {
    mainColor = grey;
  }
}

module.exports = (client, rl) => {
  console.clear();
  logo();
  rl.question(
    mainColor("                             > ") +
      white("Enter prefix") +
      mainColor(": "),
    (prefix) => {
      console.clear();
      logo();
      console.log(" ");
      console.log(
        mainColor("                             > ") +
          white("Logged into ") +
          mainColor(client.user.username)
      );

      client.on("message", (message) => {
        if (afk === true) {
          const z = message.mentions.users.first();
          if (z) {
            if (z.id === client.user.id)
              console.log(
                mainColor("                             > ") +
                  white("You have been pinged in ") +
                  mainColor(
                    message.guild ? message.guild.name : message.channel.name
                  ) +
                  white(" | Channel: ") +
                  mainColor(message.channel.name)
              );
          }
        }

        if (message.author.bot || !message.content.startsWith(prefix)) return;

        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        if (command === "test") {
          message.channel.send("Yikes");
        }

        if (command === "afk") {
          let msg = afk === true ? "Disabled your afk" : "Enabled your afk";

          message.edit(msg);

          afk === true ? (afk = false) : (afk = true);
        }

        if (command === "av" || command === "avatar") {
          const user = message.mentions.users.first()
            ? message.mentions.users.first()
            : client.users.get(args[0])
            ? client.users.get(args[0])
            : message.author;

          message.channel.send(new RichEmbed().setImage(user.displayAvatarURL));
        }

        if (command === "embed") {
          const msg = args.join(" ");
          if (!msg) {
            message.edit("`No message given`");
            return;
          }

          return message.channel.send(new RichEmbed().setDescription(msg));
        }
        if (command === "uptime") {
          return message.edit(ms(client.uptime));
        }
      });
    }
  );
};

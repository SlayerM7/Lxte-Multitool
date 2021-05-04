const ccx = require('chalk')

const { white, blackBright } = require('chalk')

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
function logo() {
//setTimeout(() => {
  console.log(
    white(
      "                                ╦  ═╗ ╦╔╦╗╔═╗  ╔╦╗╔═╗╔═╗╦ "
    )
  );
//}, 40);
//setTimeout(() => {
  console.log(
    blackBright(
      "                                ║  ╔╩╦╝ ║ ║╣    ║ ║ ║║ ║║ "
    )
  );
//}, 80);
//setTimeout(() => {
  console.log(
    mainColor(
      "                                ╩═╝╩ ╚═ ╩ ╚═╝   ╩ ╚═╝╚═╝╩═╝"
    )
  );
  console.log(' ')
}

module.exports = {
  logo
}

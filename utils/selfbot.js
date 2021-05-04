function goSb() {
const discord = require('discord.js')
const client = new discord.Client()
const { logo } = require('./logo')
const { start } = require('../index')
const ccx = require('chalk')
const { white, red , yellow, grey, cyan} = require('chalk')

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

module.exports = (rl) => {
  console.clear();
  logo();

  if (require('../data/tokens')[69]) {
    rl.question(mainColor('                             > ') + white('Would you like to use saved token')+mainColor(': '), (op) => {
      if (op === 'back' || op === 'cancel') {
        console.clear()
        start();
        return;
      }
      if (op === 'yes' || op === 'y') {
        client.login(require('../data/tokens.json')[69]).catch(() => {
          console.log(red('                             > ') + white('Invalid token passed'));
          setTimeout(() => {
            console.clear()
            start()
          }, 2000)
          return;
        })

        console.log(mainColor('                             > ') + white('Logging in...') )

        client.on('ready', () => {
        require('./sb')(client,rl)
      });
      }
      if (op === 'no' || op === 'n') {
        rl.question(mainColor('                             > ') + white('                             Enter token')+mainColor(': '), (tokenToSave) => {
          const file = require('../data/tokens.json')

          file[69] = tokenToSave

          const fs = require('fs')

          fs.writeFile('./data/tokens.json', JSON.stringify(file, null, 2), (err) =>  {
            if (err) {}
          })
          setTimeout(() => {
            goSb()
          }, 1000)
        })
        return
      }
    })
  } else {
    rl.question(mainColor('                             > ') + white('No token saved \n                             Enter token')+mainColor(': '), (tokenToSave) => {
      const file = require('../data/tokens.json')

      file[69] = tokenToSave

      const fs = require('fs')

      fs.writeFile('./data/tokens.json', JSON.stringify(file, null, 2), (err) =>  {
        if (err) {}
      })
      setTimeout(() => {
        goSb()
      }, 1000)
    })
    return
  }


}

}
goSb()

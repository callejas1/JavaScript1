'use strict';

const drinkTray = [];
const drinkTypes = ['cola', 'lemonade', 'water'];

function addDrinks(tray, types) {
  for (let x = 0; x < 2; x++) {
    tray.push(types[0]);
  }
  for (let x = 0; x < 2; x++) {
    tray.push(types[1]);
  }
  for (let x = 0; x < 1; x++) {
    tray.push(types[2]);
  }
  console.log('Hey guys, I brought a ' + `${tray}.`);
}
addDrinks(drinkTray, drinkTypes);

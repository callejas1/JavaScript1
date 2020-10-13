'use strict';

const drinkTray = [];
const drinkTypes = ['cola', 'lemonade', 'water'];

for (let x = 0; x < 4; x++) {
  const drinks = drinkTypes[x];
  drinkTray.push(drinks); // pushes existing types onto empty arr (all 3)

  if (drinkTray.length < 5) {
    drinkTray.push(drinks); // will push again as long as length is less than 5
  }
}

console.log('Hey guys, I brought a ' + `${drinkTray}`);

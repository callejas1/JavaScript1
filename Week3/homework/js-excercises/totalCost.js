'use strict';

const cartForParty = {
  cauliflower: 2.95,
  chips: 1.98,
  bread: 1.25,
  milk: 0.8,
  pasta: 1.25,
};

function calculateTotalPrice(num) {
  let sum = 0;
  for (const value of Object.values(num)) {
    sum += parseFloat(value);
  }
  console.log('Total: €' + sum);
}

calculateTotalPrice(cartForParty);

//sources = https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
//and  https://www.youtube.com/watch?v=3s0YFgxuOV0

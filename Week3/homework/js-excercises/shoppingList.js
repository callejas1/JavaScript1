'use strict';

const shoppingCart = ['bananas', 'milk'];

function addToShoppingCart(grocery) {
  shoppingCart.push(grocery);
  for (let i = 0; i < 2; i++) {
    if (shoppingCart.length === 4) {
      shoppingCart.shift();
    }
  }
  console.log('You bought ' + shoppingCart + '!');
}

addToShoppingCart('cake');
addToShoppingCart('pizza');
addToShoppingCart('broccoli');

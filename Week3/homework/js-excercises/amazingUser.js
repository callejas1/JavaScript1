'use strict';

function giveCompliment(name) {
  const complimentArr = [
    'great',
    'beautiful',
    'determined',
    'worthy',
    'smart',
    'strong',
    'intelligent',
    'kind',
    'generous',
    'courageous',
  ];
  return (
    'You are ' +
    complimentArr[Math.floor(Math.random() * complimentArr.length)] +
    ', ' +
    name +
    '!'
  );
}
console.log(giveCompliment('Yoselyn'));
console.log(giveCompliment('Yoselyn'));
console.log(giveCompliment('Yoselyn'));

// source https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

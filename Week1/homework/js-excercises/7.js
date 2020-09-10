'use strict';

// Excercise #8

// declaring 4 variables

let firstStr = 'First string';
let secondStr = 'Second string';
let person = {
  firstName: 'Yoselyn',
  age: 24,
  height: '158cm',
};
let motorcycle = {
  model: 'Suzuki',
  color: 'Black',
};

// checking type of all variables

console.log(typeof firstStr);
console.log(typeof person);
console.log(typeof secondStr);
console.log(typeof motorcycle);

/* Function to check conditional statements 
to compare one another */

function myFun(arg1, arg2) {
  if (typeof arg1 == typeof arg2) {
    return 'SAME TYPE';
  } else {
    return 'Not the same...';
  }
}

// testing all of possibilities

console.log(myFun(person, motorcycle));
console.log(myFun(person, firstStr));
console.log(myFun(firstStr, secondStr));
console.log(myFun(motorcycle, secondStr));
console.log(myFun(person, secondStr));
console.log(myFun(motorcycle, firstStr));

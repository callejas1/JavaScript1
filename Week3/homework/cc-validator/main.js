'use strict';

// At least two different numbers should be represented

function validateCreditNumber(creditCardNumber) {
  // source https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
  // Split will return string as array of str and join will remove any spaces
  const convertToArr = creditCardNumber.split(' ');
  const cardNum = convertToArr.join('');
  const len = cardNum.length;

  // Will check if last digit is even
  //source https://stackoverflow.com/questions/160930/how-do-i-check-if-an-integer-is-even-or-odd
  const lastNumIsEven = cardNum[15] % 2 === 0 ? true : false;

  //Check sum of all digits
  //source https://stackoverflow.com/questions/38334652/sum-all-the-digits-of-a-number-javascript
  let sum = cardNum
    .split('')
    .map(Number)
    .reduce(function (a, b) {
      return a + b;
    }, 0);

  // Check if sum of all numbers is > 16
  if (sum < 16) {
    return 'Invalid! Please enter a valid credit card number.';
  }

  //Check if all characters are numbers
  else if (isNaN(cardNum) === true) {
    return `Invalid! The input ${creditCardNumber} should contain only numbers!`;
  }

  //Check length of credit card number
  else if (len !== 16) {
    return 'Invalid. Card number must be 16 digits!';
  }

  //Check if last number is an even num
  else if (lastNumIsEven === false) {
    return `Invalid! Please check if ${creditCardNumber} matches your credit card number and try again.`;
  }

  // create func to return 1st number inside arr
  // check every value to find if similar to 1st number
  // if true, output: error!
  else if (convertToArr.every((num) => num === convertToArr[0])) {
    return `Invalid! The input ${creditCardNumber} should contain at least 2 different types of numbers!`;
  }

  //check if one number type
  else {
    return `Success! The input ${creditCardNumber} is a valid credit card number!`;
  }
}

console.log(validateCreditNumber('4444444444444444')); // same number
console.log(validateCreditNumber('123456789asd2134')); // numbers and letters
console.log(validateCreditNumber('4234534524560109')); // last is even number
console.log(validateCreditNumber('1230000000000004')); // sum is not === 16
console.log(validateCreditNumber('490080980080988')); //  not 16 digits

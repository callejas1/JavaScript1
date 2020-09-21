'use strict';

let myString = 'hello,this,is,a,difficult,to,read,sentence';
console.log(myString.length);

//We use g to target and replace
//all the commas for the new value
//source: https://www.w3schools.com/jsref/jsref_replace.asp

myString = myString.replace(/,/g, ' ');
console.log(myString);

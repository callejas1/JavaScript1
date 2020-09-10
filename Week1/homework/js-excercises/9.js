'use strict';

// Excercise #10

let myFavLanguages = ['one', 'two', 'three', 'four'];
let favoriteRecipes = [
  'Burritos',
  'Empanadas',
  'Curry',
  'Gallopinto',
  'Fried rice',
  'Wraps',
  'Pasta',
];

console.log('The length of my favorite languages is: ' + myFavLanguages.length);
console.log('The length of my favorite recipes is: ' + favoriteRecipes.length);

if (myFavLanguages.length == favoriteRecipes.length) {
  console.log('They are the same!');
} else {
  console.log('Two different sizes');
}

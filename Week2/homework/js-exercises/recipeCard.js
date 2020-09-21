'use strict';

//source to iterate through an object keys & values:
//https://attacomsian.com/blog/javascript-iterate-objects#forin--loop

const myMealRecipe = {
  Meal: 'Pasta',
  Serves: 2,
  Ingredients: [
    '200 grams spaghetti',
    '1 c tomato sauce',
    '1/5 tsp salt',
    '1/4 tsp pepper',
  ],
};
for (const key in myMealRecipe) {
  if (myMealRecipe.hasOwnProperty(key)) {
    console.log(`${key}: ${myMealRecipe[key]}`);
  }
}

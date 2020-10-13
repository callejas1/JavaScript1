'use strict';

// Function starts off by converting whatever score is entered
// => into a percentage value.

//Math.floor is used to output the 1st int immediately to the left

function gradesInput(studentScore, scorePossible) {
  const percentage = Math.floor((studentScore / scorePossible) * 100);
  console.log(`${percentage}%`);

  // once percentage has been retrieved we check the conditions
  // to assign grades respectively

  if (percentage <= 100 && percentage >= 90) {
    return `You got an A (${percentage}%)`;
  } else if (percentage <= 89 && percentage >= 80) {
    return `You got a B (${percentage})%`;
  } else if (percentage <= 79 && percentage >= 70) {
    return `You got a C (${percentage}%)`;
  } else if (percentage <= 69 && percentage >= 60) {
    return `You got a D (${percentage}%)`;
  } else if (percentage <= 59 && percentage >= 50) {
    return `You got an E (${percentage}%)`;
  } else if (percentage <= 49 && percentage >= 0) {
    return `You got an F (${percentage}%)`;
  } else {
    return 'Incorrect value, please try again.';
  }
}

//Enter student grade and the highest test score possible to get results

console.log(gradesInput(45, 50));

// Grade A (90% - 100%)
// Grade B (80% - 89%)
// Grade C (70% - 79%)
// Grade D (60% - 69%)
// Grade E (50% - 59%)
// Grade F (0% - 49%)

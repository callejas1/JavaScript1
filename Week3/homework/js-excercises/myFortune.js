'use strict';

const jobs = [
  'web developer',
  'business owner',
  'chef',
  'auto mechanic',
  'pilot',
];
const locations = [
  'The Netherlands',
  'France',
  'London',
  'Canada',
  'Switzerland',
];
const partnerNames = ['Lana', 'Megan', 'Kate', 'Sarah', 'Mary'];
const numChildren = [0, 2, 3, 4, 5];

function tellFortune(profession, place, name, kids) {
  return (
    'You will be a ' +
    profession[Math.floor(Math.random() * jobs.length)] +
    ' in ' +
    place[Math.floor(Math.random() * jobs.length)] +
    ', married to ' +
    name[Math.floor(Math.random() * jobs.length)] +
    ' with ' +
    kids[Math.floor(Math.random() * jobs.length)] +
    ' kids.'
  );
}
console.log(tellFortune(jobs, locations, partnerNames, numChildren));
console.log(tellFortune(jobs, locations, partnerNames, numChildren));
console.log(tellFortune(jobs, locations, partnerNames, numChildren));

// source https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

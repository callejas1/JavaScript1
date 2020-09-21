'use strict';

const bookShelf = [
  {
    title:
      '"Cracking the Coding Interview: 150 Programming Questions and Solutions"',
    author: 'Gayle Laakmann McDowell',
    alreadyRead: false,
  },
  {
    title: '"Tiempo de fulgor"',
    author: 'Sergio Ramirez',
    alreadyRead: true,
  },
  {
    title: '"Azul"',
    author: 'Ruben Dario',
    alreadyRead: false,
  },
];

bookShelf.forEach(function (item) {
  if (item.alreadyRead === true) {
    console.log('You already read: ' + item.title);
  } else {
    console.log('You still need to read: ' + item.title);
  }
});

//source: https://www.youtube.com/watch?v=159EAISAxwg

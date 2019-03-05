'use strict'

const store = {
  score: 0,
  cardElement: 0,
  cardsInPlay: [],
  matched: [],
  cards: [
    { rank: 'Queen',
      suit: 'Hearts',
<<<<<<< HEAD
      cardImage: 'assets/scripts/images/queen-of-hearts.png',
      id: 0},
    { rank: 'Queen',
      suit: 'Diamonds',
      cardImage: 'assets/scripts/images/queen-of-diamonds.png',
      id: 1 },
    { rank: 'King',
      suit: 'Hearts',
      cardImage: 'assets/scripts/images/king-of-hearts.png',
      id: 2 },
    { rank: 'King',
      suit: 'Diamonds',
      cardImage: 'assets/scripts/images/king-of-diamonds.png',
=======
      cardImage: './images/queen-of-hearts.png',
      id: 0},
    { rank: 'Queen',
      suit: 'Diamonds',
      cardImage: './images/queen-of-diamonds.png',
      id: 1 },
    { rank: 'King',
      suit: 'Hearts',
      cardImage: './images/king-of-hearts.png',
      id: 2 },
    { rank: 'King',
      suit: 'Diamonds',
      cardImage: './images/king-of-diamonds.png',
>>>>>>> add refactor
      id: 3 }],
  animation: [
    {transform: 'rotateY(0deg)'},
    {transform: 'rotateY(180deg)'}],
  options: {
    duration: 500,
    iterations: 1,
    delay: 100 }
}

module.exports = store

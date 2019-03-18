const store = require('../store')

const initializeStore = () => {
  console.log('initializeStore')
  store.score = 0
  store.start = false
  store.over = false
  store.cardsInPlay = []
  store.html = []
  store.timer = () => {}
  storeElements()
}

const resetStore = () => {
  console.log('resetStore')
  store.score = 0
  store.over = false
  store.start = false
}

const addCardToStore = (pair, id, htmlElement) => {
  console.log('addCardToStore')
  const card = { card: store.cards[pair], id: id, htmlElement: htmlElement }
  store.cardsInPlay.push(card)
}

const resetCardsInPlay = () => { store.cardsInPlay = [] }
const incrementScore = () => { store.score++ }

const storeElements = () => {
  console.log('storeElements')
  store.winningText = '<h1 class="text-center">You found all the matches! Please click reset to play again.</h1>'
  store.cards = [
    { rank: 'Queen',
      suit: 'Hearts',
      cardImage: 'public/images/queen-of-hearts.png',
      id: 0},
    { rank: 'Queen',
      suit: 'Diamonds',
      cardImage: 'public/images/queen-of-diamonds.png',
      id: 1 },
    { rank: 'King',
      suit: 'Hearts',
      cardImage: 'public/images/king-of-hearts.png',
      id: 2 },
    { rank: 'King',
      suit: 'Diamonds',
      cardImage: 'public/images/king-of-diamonds.png',
      id: 0}]

  store.animation = [
    {transform: 'rotateY(0deg)'},
    {transform: 'rotateY(360deg)'}]

  store.options = {
    duration: 250,
    iterations: 1,
    delay: 100 }
}

module.exports = {
  incrementScore,
  initializeStore,
  resetStore,
  resetCardsInPlay,
  addCardToStore
}

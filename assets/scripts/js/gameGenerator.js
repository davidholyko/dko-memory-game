const store = require('../store')
const userFeedback = require('./userFeedback')

const createCard = (index, diff = 0) => {
  console.log('createCard')
  const element = `<img src="assets/scripts/images/back.png" data-id="${index - diff}"
   data-card="${index}" id="card-${index}" class="card"></img>`
  $('#game-board').append(element)
  $(`#card-${index}`).animate(store.animation, store.options)
}

const shuffleCards = (parent) => {
  console.log('shuffle')
  for (let i = parent.children().length; i >= 0; i--) { parent.append(parent.children()[Math.random() * i | 0]) }
}

const createBoard = () => {
  console.log('createBoard')
  // Creates the game board by adding cards as children to reset button id

  // initialize score to 0
  store.score = 0

  //  makes cards 0-3
  for (let i = 0; i < store.cards.length; i++) { createCard(i) }

  // makes cards 4-7
  for (let i = 4; i < store.cards.length + 4; i++) { createCard(i, 4) }

  // shuffles all cards around
  shuffleCards($('#game-board'))

  // adds reset button with function reset
  $('#reset-button').on('click', () => {
    userFeedback.resetBoard()
    createBoard()
  })
}

module.exports = {
  createBoard
}

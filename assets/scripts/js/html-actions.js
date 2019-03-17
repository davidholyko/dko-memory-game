const store = require('../store')

const clearCards = () => {
  console.log('clearCards')
  store.cardsInPlay = []
}

const clearMatched = () => {
  console.log('clearMatched')
  store.matched = []
}

const clearText = () => {
  console.log('clearText')
  $('#score-text').empty()
  $('#game-text').empty()
}

const clearBoard = () => {
  console.log('clearBoard')
  $('#game-board').empty()
}

const resetAll = () => {
  console.log('resetAll')
  clearMatched()
  clearText()
  clearBoard()
}

module.exports = {
  clearCards,
  clearMatched,
  clearBoard,
  resetAll
}

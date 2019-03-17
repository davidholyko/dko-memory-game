const store = require('../store')

const clearCards = () => {
  console.log('clearCards')
  store.cardsInPlay = []
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
  clearText()
  clearBoard()
}

const updateScoreText = () => { $('#score').text(`${store.score}`) }

module.exports = {
  clearCards,
  clearBoard,
  resetAll,
  updateScoreText
}

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
  $('#score').empty()
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

const setGameText = (e, bool) => {
  console.log('setGameText')
  // outputs text about matches

  clearText()
  const gameTextElement = document.createElement('h2')
  let gameText

  if (bool) {
    gameText = document.createTextNode('Match found: ' + e.rank + ' of ' + e.suit)
  } else if (!bool && store.cardsInPlay.length === 2) {
    gameText = document.createTextNode(store.cardsInPlay[0].rank + ' of ' + store.cardsInPlay[0].suit + ' does not match ' + store.cardsInPlay[1].rank + ' of ' + store.cardsInPlay[1].suit)
    if (store.cardsInPlay[0].id === store.cardsInPlay[1].id) {
      gameText = document.createTextNode(store.cardsInPlay[0].rank + ' of ' + store.cardsInPlay[0].suit + ' cannot match itself')
    }
  }

  if (store.cardsInPlay.length === 1) {
    gameText = document.createTextNode('Matching ' + store.cardsInPlay[0].rank + ' of  ' + store.cardsInPlay[0].suit + ' with...')
  }

  gameTextElement.appendChild(gameText)
  $('#game-text').append(gameTextElement)

  const scoreTextElement = document.createElement('h2')
  let scoreText = 'Score: ' + store.score

  if (store.score >= 4) { scoreText = 'You won!' }

  scoreTextElement.append(scoreText)
  document.getElementById('score').appendChild(scoreTextElement)
}

module.exports = {
  clearCards,
  clearMatched,
  clearBoard,
  resetAll,
  setGameText
}

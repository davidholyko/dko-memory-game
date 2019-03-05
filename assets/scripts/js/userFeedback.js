const store = require('../store')

const clearCards = () => {
  console.log('clearCards')
  // clears the store.cardsInPlay array
  store.store.cardsInPlay = []
}

const clearMatched = () => {
  console.log('clearMatched')
  // clears matched array
  store.matched = []
}

const clearText = () => {
  console.log('clearText')
  // clears text about game
  const clearByID = (id) => {
    const parent = document.getElementById(id)
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild)
    }
  }

  clearByID('score')
  clearByID('game-text')
}

const resetBoard = () => {
  console.log('resetBoard')
  // Flips all cards to img back and removes is-flipped class
  // Actually it resets the entire board by deleting everything and putting it back
  clearMatched()
  clearText()

  const parent = $('#game-board')
  while (parent.firstChild) { parent.removeChild(parent.firstChild) }
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
  setGameText,
  resetBoard
}

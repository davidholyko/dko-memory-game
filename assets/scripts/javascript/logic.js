const store = require('../store')

const checkForMatch = () => {
  // if cards have the same key but are not the same card, return true
  if (store.cardsInPlay.length === 2) {
    console.log('checkForMatch')
    return store.cardsInPlay[0].card === store.cardsInPlay[1].card
  }
}

module.exports = {
  checkForMatch
}

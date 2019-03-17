const store = require('../store')

const checkForMatch = () => {
  console.log('checkForMatch')
  if (store.cardsInPlay.length < 2) { return false }

  // if cards have the same key but are not the same card, return true
  if (store.cardsInPlay.length === 2) {
    return store.cardsInPlay[0].card === store.cardsInPlay[1].card && store.cardsInPlay[0].id !== store.cardsInPlay[1].id
  }
}

module.exports = {
  checkForMatch
}

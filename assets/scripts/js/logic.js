const store = require('../store')

const checkForMatch = () => {
  console.log('checkForMatch')
  if (store.cardsInPlay.length < 2) {
    // console.log("false");
    return false
  }

  // if cards have the same key but are not the same card, return true
  if (store.cardsInPlay.length === 2) {
    if (store.cardsInPlay[0].key === store.cardsInPlay[1].key && store.cardsInPlay[0].card !== store.cardsInPlay[1].card) {
      // console.log("true");
      return true
    } else {
      // console.log("false");
      return false
    }
  }
}

module.exports = checkForMatch

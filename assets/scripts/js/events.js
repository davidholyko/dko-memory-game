const store = require('../store')
const checkForMatch = require('./logic')
const userFeedback = require('./userFeedback')
const gameGenerator = require('./gameGenerator')

const flipCard = () => {
  console.log('flipCard')
  let cardOne // first card flipped in the store.cardsInPlay array
  let cardTwo // second card flipped in the store.cardsInPlay array
  const dataId = $(event.target).data('id')
  const dataCard = $(event.target).data('card')
  const id = $(event.target).attr('id')
  const e = event.target
  const card = {
    // object that contains all relevant data
    img: store.cards[dataId].cardImage,
    key: dataId,
    card: dataCard,
    rank: store.cards[dataId].rank,
    suit: store.cards[dataId].suit,
    id: id,
    htmlElement: event.target
  }

  if (store.matched.length >= 2) {
    // flips over prev store.cards that were not match
    const matchOne = $(`#${store.matched[0].id}`)
    const matchTwo = $(`#${store.matched[1].id}`)

    let animation = [
      { transform: 'rotateY(0deg)' },
      { transform: 'rotateY(180deg)' } ]
    let options = { duration: 250, iterations: 1 }

    if (store.matched[0].id === store.matched[1].id) {
      animation = [
        { transform: 'rotateY(0deg)' },
        { transform: 'rotateY(360deg)' } ]
      options = { duration: 500, iterations: 1 }
    }

    matchOne.setAttribute('src', '../images/back.png')
    matchOne.animate(animation, options)
    matchTwo.setAttribute('src', '../images/back.png')
    matchTwo.animate(animation, options)

    userFeedback.clearMatched()
  }

  // pushes card into store.cardsInPlay array
  store.cardsInPlay.push(card)

  // flips store.cards

  if (store.cardsInPlay.length === 2) {
    cardOne = document.getElementById(store.cardsInPlay[0].id)
    cardTwo = document.getElementById(store.cardsInPlay[1].id)
  }

  if (e.getAttribute('src') === '../images/back.png') {
    e.setAttribute('src', store.cards[card.key].cardImage)
  }

  if (checkForMatch() && store.cardsInPlay.length === 2) {
    // if it is a match, remove event listeners by replacing with a clone with no event listener

    const animation = [
      { transform: 'rotateY(0deg)' },
      { transform: 'rotateY(360deg)' }
    ]
    const options = {
      duration: 500,
      iterations: 1
    }

    const matchOne = cardOne.cloneNode(true)
    const matchTwo = cardTwo.cloneNode(true)

    cardOne.parentNode.replaceChild(matchOne, cardOne)
    cardTwo.parentNode.replaceChild(matchTwo, cardTwo)

    matchTwo.animate(animation, options)

    store.score++
    userFeedback.setGameText(card, true)
  } else if (!checkForMatch() && store.cardsInPlay.length === 2) {
    //  if its not a match, do nothing to store.cards and do text

    store.matched = store.cardsInPlay
    userFeedback.setGameText(card, false)
  }

  if (checkForMatch() === false && store.cardsInPlay.length === 1) {
    // outputs matching if only 1 card in store.cardsInPlay array
    userFeedback.setGameText(card, false)
  }

  if (store.cardsInPlay.length >= 2) { userFeedback.clearCards() }
}

const resetBoard = () => {
  userFeedback.resetAll()
  gameGenerator.createBoard()
}

module.exports = {
  flipCard,
  resetBoard

}

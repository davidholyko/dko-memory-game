const store = require('../store')

const addCardToStore = (pair, id, htmlElement) => {
  console.log('addCardToStore')
  const card = { card: store.cards[pair], id: id, htmlElement: htmlElement }
  store.cardsInPlay.push(card)
}

const flipCard = (pair, id, htmlElement) => {
  console.log('flipCard')
  $(htmlElement).attr('src', store.cards[pair].cardImage)
  htmlElement.animate(store.animation, store.options)
}

const flipBack = () => {
  console.log('flipBack')

  const flip = card => {
    card.animate(store.animation, store.options)
    $(card).attr('src', 'public/images/back.png')
  }

  store.timer = setTimeout(() => {
    store.cardsInPlay.forEach(card => flip(card.htmlElement))
    store.cardsInPlay = []
  }, 500)
}

const makeUnclickable = () => {
  console.log('makeUnclickable')
  store.cardsInPlay.forEach(card => $(`#card-${card.id}`).attr('data-clickable', 'false'))
}

const start = () => {
  console.log('start')
  store.start = true
  $('#score-text').html('<h1 class="text-center">Number of matches found: <span id="score">0</span></h1>')
}

module.exports = {
  flipCard,
  flipBack,
  addCardToStore,
  makeUnclickable,
  start
}

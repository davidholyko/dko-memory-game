const store = require('../store')
const logic = require('./logic')
const htmlActions = require('./html-actions')
const storeActions = require('./store-actions')
const gameGenerator = require('./game-generator')
const play = require('./play')

const onClickCard = () => {
  console.log('onClickCard')
  event.preventDefault()

  if (!store.start) { play.start() }

  const pair = $(event.target).data('pair')
  const id = $(event.target).data('id')

  // on click function exits
  if (store.over) { return }
  if ($(event.target).attr('data-clickable') === 'false') { return }
  if (store.cardsInPlay.length) { if (id === store.cardsInPlay[0].id) { return } }

  // flips card from back img to respective front face
  storeActions.addCardToStore(pair, id, event.target)
  play.flipCard(pair, id, event.target)

  // do logic
  if (logic.checkForMatch()) {
    play.makeUnclickable()
    htmlActions.updateScoreText()
    storeActions.incrementScore()
    storeActions.resetCardsInPlay()
  } else {
    if (store.cardsInPlay.length === 2) { play.flipBack() }
  }

  // do winning text
  if (store.score === 4) { $('#score-text').html(store.winningText) }
}

const resetBoard = () => {
  console.log('resetBoard')
  event.preventDefault()
  htmlActions.resetAll()
  storeActions.resetStore()
  gameGenerator.createBoard()
}

const toggleInstructions = () => {
  console.log('toggleInstructions')
  event.preventDefault()
  if ($('#instructions').css('display') !== 'none') {
    $('#instructions').css('display', 'none')
  } else {
    $('#instructions').css('display', 'inline')
  }
}

const addHandlers = () => {
  $('#game-board').on('click', '.card', onClickCard)
  $('#reset-button').on('click', resetBoard)
  $('#toggle-instructions').on('click', toggleInstructions)
}

module.exports = {
  addHandlers
}

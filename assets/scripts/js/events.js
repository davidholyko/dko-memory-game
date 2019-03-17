const store = require('../store')
const logic = require('./logic')
const htmlActions = require('./html-actions')
const storeActions = require('./store-actions')
const gameGenerator = require('./gameGenerator')
const play = require('./play')

const onClickCard = () => {
  console.log('onClickCard')
  event.preventDefault()

  if (!store.start) { play.start() }
  if (store.over) { return }
  if ($(event.target).attr('data-clickable') === 'false') { return }

  storeActions.addCardToStore($(event.target).data('pair'), $(event.target).data('id'), event.target)
  play.flipCard($(event.target).data('pair'), $(event.target).data('id'), event.target)

  if (logic.checkForMatch()) {
    store.score++
    play.makeUnclickable()
    play.start()
    $('#score').text(`${store.score}`)
    store.cardsInPlay = []
  } else {
    if (store.cardsInPlay.length === 2) { play.flipBack() }
  }

  if (store.score === 4) {
    $('#score-text').html('<h1 class="text-center">You found all the matches! Please click reset to play again.</h1>')
  }
}

const resetBoard = () => {
  console.log('resetBoard')
  event.preventDefault()
  htmlActions.resetAll()
  gameGenerator.createBoard()
  storeActions.resetAll()
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

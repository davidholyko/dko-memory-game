'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

<<<<<<< HEAD
const flipCard = require('./js/events')
=======
const events = require('./js/events')
>>>>>>> add refactor
const game = require('./js/gameGenerator')

$(() => {
  console.log('Running JavaScript...')
  game.createBoard()
<<<<<<< HEAD
  $('.card').on('click', flipCard)
=======
  $('.card').on('click', events.flipCard)
>>>>>>> add refactor
  // $('.card').on('click', () => { console.log('Card flipped!') })
})

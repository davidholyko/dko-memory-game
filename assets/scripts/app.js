'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const events = require('./javascript/events')
const game = require('./javascript/game-generator')
const store = require('./javascript/store-actions')

$(() => {
  console.log('Running JavaScript...')
  store.initializeStore()
  game.createBoard()
  events.addHandlers()
})

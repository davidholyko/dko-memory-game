'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const events = require('./js/events')
const game = require('./js/gameGenerator')
const store = require('./js/store-actions')

$(() => {
  console.log('Running JavaScript...')
  store.initializeStore()
  game.createBoard()
  events.addHandlers()
})

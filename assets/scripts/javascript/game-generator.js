const store = require('../store')

const createCard = (index, diff = 0) => {
  console.log('createCard')
  const element =
  `<img
     id="card-${index}"
     src="public/images/back.png"
     data-pair="${index - diff}"
     data-id="${index}"
     data-clickable="true"
     class="card">
   </img>`
  $('#game-board').append(element)
  $(`#card-${index}`)[0].animate(store.animation, store.options)
}

const shuffleCards = (parent) => {
  console.log('shuffle')
  for (let i = parent.children().length; i >= 0; i--) { parent.append(parent.children()[Math.random() * i | 0]) }
}

const createBoard = () => {
  console.log('createBoard')
  store.score = 0

  //  makes cards 0-3, 4-7
  for (let i = 0; i < store.cards.length; i++) { createCard(i) }
  for (let i = 4; i < store.cards.length + 4; i++) { createCard(i, 4) }

  // shuffles all cards around
  shuffleCards($('#game-board'))
}

module.exports = {
  createBoard
}

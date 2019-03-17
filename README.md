# Card Memory Game Refactored

A 4-pair card memory game in JavaScript. Originally written in vanilla JavaScript and refactored with jQuery and SCSS. Original file located at 'assets/scripts/js/main-duplicate'.

### Pre-refactored

```
console.log('Up and running!')

let score
let cardElement
let cardsInPlay = []
let matched = []
const cards = [{
  rank: 'Queen',
  suit: 'Hearts',
  cardImage: '../images/queen-of-hearts.png',
  id: 0
},
{
  rank: 'Queen',
  suit: 'Diamonds',
  cardImage: '../images/queen-of-diamonds.png',
  id: 1
},
{
  rank: 'King',
  suit: 'Hearts',
  cardImage: '../images/king-of-hearts.png',
  id: 2
},
{
  rank: 'King',
  suit: 'Diamonds',
  cardImage: '../images/king-of-diamonds.png',
  id: 3
}]
let animation = [{
  transform: 'rotateY(0deg)'
},
{
  transform: 'rotateY(180deg)'
}]
let options = {
  duration: 500,
  iterations: 1,
  delay: 100
}

const checkForMatch = () => {
  if (cardsInPlay.length < 2) {
    // console.log("false");
    return false
  }

  // if cards have the same key but are not the same card, return true
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0].key === cardsInPlay[1].key && cardsInPlay[0].card !== cardsInPlay[1].card) {
      // console.log("true");
      return true
    } else {
      // console.log("false");
      return false
    }
  }
}

const flipCard = (e) => {
  let cardOne // first card flipped in the cardsInPlay array
  let cardTwo // second card flipped in the cardsInPlay array
  const dataId = e.getAttribute('data-id')
  const dataCard = e.getAttribute('data-card')
  const id = e.getAttribute('id')
  const card = {
    // object that contains all relevant data
    img: cards[dataId].cardImage,
    key: dataId,
    card: dataCard,
    rank: cards[dataId].rank,
    suit: cards[dataId].suit,
    id: id,
    htmlElement: e
  }

  if (matched.length >= 2) {
    // flips over prev cards that were not match
    const matchOne = document.getElementById(matched[0].id)
    const matchTwo = document.getElementById(matched[1].id)

    animation = [{
      transform: 'rotateY(0deg)'
    },
    {
      transform: 'rotateY(180deg)'
    }
    ]
    options = {
      duration: 250,
      iterations: 1
    }

    if (matched[0].id === matched[1].id) {
      animation = [{
        transform: 'rotateY(0deg)'
      },
      {
        transform: 'rotateY(360deg)'
      }
      ]
      options = {
        duration: 500,
        iterations: 1
      }
    }

    matchOne.setAttribute('src', '../images/back.png')
    matchOne.animate(animation, options)
    matchTwo.setAttribute('src', '../images/back.png')
    matchTwo.animate(animation, options)

    clearMatched()
  }

  // pushes card into cardsInPlay array
  cardsInPlay.push(card)

  // flips cards
  e.classList.toggle('is-flipped')

  console.log(cardsInPlay)

  if (cardsInPlay.length === 2) {
    cardOne = document.getElementById(cardsInPlay[0].id)
    cardTwo = document.getElementById(cardsInPlay[1].id)
  }

  if (e.getAttribute('src') === '../images/back.png') {
    e.setAttribute('src', cards[card.key].cardImage)
  }

  if (checkForMatch() && cardsInPlay.length === 2) {
    // if it is a match, remove event listeners by replacing with a clone with no event listener

    animation = [{
      transform: 'rotateY(0deg)'
    },
    {
      transform: 'rotateY(360deg)'
    }
    ]
    options = {
      duration: 500,
      iterations: 1
    }

    const matchOne = cardOne.cloneNode(true)
    const matchTwo = cardTwo.cloneNode(true)

    cardOne.parentNode.replaceChild(matchOne, cardOne)
    cardTwo.parentNode.replaceChild(matchTwo, cardTwo)

    matchTwo.animate(animation, options)

    score++
    gameText(card, true)
  } else if (!checkForMatch() && cardsInPlay.length === 2) {
    //  if its not a match, do nothing to cards and do text

    matched = cardsInPlay
    gameText(card, false)
  }

  if (!checkForMatch() && cardsInPlay.length === 1) {
    // outputs matching if only 1 card in cardsInPlay array
    gameText(card, false)
  }

  if (cardsInPlay.length >= 2) {
    clearCards()
  }
}

const clearCards = () => {
  // clears the cardsInPlay array
  cardsInPlay = []
}

const clearMatched = () => {
  // clears matched array
  matched = []
}

const clearText = () => {
  // clears text about game
  const clearByID = (id) => {
    const parent = document.getElementById(id)
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild)
    }
  }

  clearByID('score')
  clearByID('game-text')
}

const reset = () => {
  // Flips all cards to img back and removes is-flipped class
  // Actually it resets the entire board by deleting everything and putting it back
  clearMatched()
  clearText()

  const parent = document.getElementById('game-board')
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }

  createBoard()
}

const gameText = (e, bool) => {
  // outputs text about matches

  clearText()
  const gameTextElement = document.createElement('h2')
  let gameText

  if (bool) {
    gameText = document.createTextNode('Match found: ' + e.rank + ' of ' + e.suit)
  } else if (!bool && cardsInPlay.length === 2) {
    gameText = document.createTextNode(cardsInPlay[0].rank + ' of ' + cardsInPlay[0].suit + ' does not match ' + cardsInPlay[1].rank + ' of ' + cardsInPlay[1].suit)
    if (cardsInPlay[0].id === cardsInPlay[1].id) {
      gameText = document.createTextNode(cardsInPlay[0].rank + ' of ' + cardsInPlay[0].suit + ' cannot match itself')
    }
  }

  if (cardsInPlay.length === 1) {
    gameText = document.createTextNode('Matching ' + cardsInPlay[0].rank + ' of  ' + cardsInPlay[0].suit + ' with...')
  }

  gameTextElement.appendChild(gameText)
  document.getElementById('game-text').appendChild(gameTextElement)

  const scoreTextElement = document.createElement('h2')
  let scoreText = 'Score: ' + score

  if (score === 4) {
    scoreText = 'You won!'
  }

  scoreTextElement.append(scoreText)
  document.getElementById('score').appendChild(scoreTextElement)
}

const createCard = (i, diff = 0) => {
  cardElement = document.createElement('img')
  cardElement.setAttribute('src', '../images/back.png') // default image is back.png
  cardElement.setAttribute('data-id', i - diff)
  cardElement.setAttribute('data-card', i)
  cardElement.setAttribute('id', 'card-' + i)
  cardElement.setAttribute('class', 'card')
  cardElement.animate(animation, options)
  cardElement.addEventListener('click', flipCard.bind(this, cardElement))
  document.getElementById('game-board').appendChild(cardElement)
}

const shuffle = (parent) => {
  for (let i = parent.childNodes.length; i >= 0; i--) {
    parent.appendChild(parent.childNodes[Math.random() * i | 0])
  }
  return parent
}

const createBoard = () => {
  // Creates the game board by adding cards as children to reset button id

  // initialize score to 0
  score = 0

  //  makes cards 0-3
  for (let i = 0; i < cards.length; i++) {
    createCard(i)
  }

  // makes cards 4-7
  for (let i = 4; i < cards.length + 4; i++) {
    createCard(i, 4)
  }

  // shuffles all cards around
  shuffle(document.getElementById('game-board'))

  // adds reset button with function reset
  document.getElementById('reset-button').addEventListener('click', reset)
}
```

const cardArray = [
  {
    name: 'fries',
    img:'images/fries.png',
  },

  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png'
  },

  {
    name: 'hotdog',
    img:'images/hotdog.png'
  },

  {
    name: 'ice-cream',
    img:'images/ice-cream.png'
  },

  {
    name: 'milkshake',
    img: 'images/milkshake.png'
  },

  {
    name: 'pizza',
    img:'images/pizza.png'
  },
  {
    name: 'fries',
    img:'images/fries.png',
  },

  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png'
  },

  {
    name: 'hotdog',
    img:'images/hotdog.png'
  },

  {
    name: 'ice-cream',
    img:'images/ice-cream.png'
  },

  {
    name: 'milkshake',
    img: 'images/milkshake.png'
  },

  {
    name: 'pizza',
    img:'images/pizza.png'
  },
]

//Shuffling array randomly

cardArray.sort(()=> 0.5 - Math.random()) // Math.random() returns any number from 0 to less than 1

const gridDisplay = document.querySelector('#grid') // # indicates searching id of grid
const resultDisplay = document.querySelector('#result')

let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard(){
  for(let i = 0; i<cardArray.length; i++){
    const card = document.createElement('img')
    card.setAttribute('src', 'images/blank.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    gridDisplay.appendChild(card)

  }
}

createBoard()

function checkMatch(){
  const cards = document.querySelectorAll('img')
  const optionOneId = cardsChosenIds[0]
  const optionTwoId = cardsChosenIds[1]

  console.log(cards)
  console.log('check for match!')

  if(optionOneId == optionTwoId){
    cards[optionOneId].setAttribute('src','images/blank.png')
    cards[optionTwoId].setAttribute('src', 'images/blank.png')
    alert('You have clicked the same image')
  }else if(cardsChosen[0] == cardsChosen[1]){
    alert('You found a match!')
    cards[optionOneId].setAttribute('src','images/white.png')
    cards[optionTwoId].setAttribute('src','images/white.png')
    cards[optionOneId].removeEventListener('click',flipCard)
    cards[optionTwoId].removeEventListener('click',flipCard)
    cardsWon.push(cardsChosen)
  } else {
    cards[optionOneId].setAttribute('src','images/blank.png')
    cards[optionTwoId].setAttribute('src', 'images/blank.png')
    alert('Sorry try again!')
  }
  
  resultDisplay.innerHTML = cardsWon.length
  cardsChosen = []
  cardsChosenIds = []

  if(cardsWon.length === cardArray.length/2){
    resultDisplay.innerHTML = 'Congratulations you have found them all!'
  }
}

function flipCard(){
  const cardId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenIds.push(cardId)
  this.setAttribute('src', cardArray[cardId].img)
  if(cardsChosen.length === 2){
    setTimeout(checkMatch, 500)

  }
}

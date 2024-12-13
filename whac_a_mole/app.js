const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left') // class - . and id - #
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 60
let timerId = null

function randomSquare(){
  squares.forEach(square => {
    square.classList.remove('mole')
  })
  
  let randomSquare = squares[Math.floor(Math.random() * 9)] //Get a random square
  randomSquare.classList.add('mole')

  hitPosition = randomSquare.id
}


squares.forEach(square=>{
  square.addEventListener('mousedown', ()=>{
    if(square.id == hitPosition){
      result++
      score.innerHTML=result
      hitPosition = null
    }
  })
})

function moveMole(){
  timerId = setInterval(randomSquare, 1000)
}

moveMole()

function countDown(){
  currentTime--
  timeLeft.textContent = currentTime
  
  if(currentTime == 0){
    clearInterval(countDonwnTimerId) // cancels the timed execution of countDown()
    clearInterval(timerId)
    alert('GAME OVER! Your final score is' + result)
  }

}

//The global clearInterval() method cancels a timed, repeating action which was previously established by a call to setInterval().
//If the parameter provided does not identify a previously established action, this method does nothing.

let countDonwnTimerId = setInterval(countDown, 1000) // executes countDown every 1s
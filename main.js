// DOM queries
var classicVersion = document.querySelector(".container-1");
var difficultVersion = document.querySelector(".container-2");
var mainPageMessage = document.querySelector(".main-page-message");
var drawMessage = document.querySelector(".draw-message")
var alternativePageMessage = document.querySelector(".alternative-page-message");
var classicOptionIcons = document.querySelector(".classic-option-icons");
var difficultOptionIcons = document.querySelector(".difficult-option-icons");
var changeGameButton = document.querySelector(".change-game-button");
var humanWinnerMessage = document.querySelector(".human-winner-message");
var computerWinnerMessage = document.querySelector(".computer-winner-message");
var resultsIcons = document.querySelector(".results-icons")
//icons
var paperIcon = document.querySelector("#happy-paper-icon");
var scissorsIcon = document.querySelector("#happy-scissors-icon");
var rocksIcon = document.querySelector("#happy-rocks-icon");
var alienIcon = document.querySelector("#happy-alien-icon");
var lizardIcon = document.querySelector("#happy-lizard-icon");

//Event Listeners

classicVersion.addEventListener('click', displayClassic)
// difficultVersion.addEventListener('click', displayDifficult)

classicOptionIcons.addEventListener('click', function (e) {
  // 1. User clicks on an icon
  // 2. Check whether or not its a valid player icon 
  // 3. Generate oponent results (random)
  // 4. Compare user and oponent result to evaluate win
  // 5. Display winner information
  if (e.target.classList.contains("happy")) {
    var opponent = randomIcon(classicFighters)
    var winner = evaluateWinner(e.target.id, opponent)
    console.log("winner =", winner)
    if (opponent === e.target.id) {
      show(drawMessage)
    } else if (winner === opponent) {
      show(computerWinnerMessage)
    } else {
      show(humanWinnerMessage)
    }
    hide(alternativePageMessage)
    hide(classicOptionIcons)
    show(resultsIcons)
  }
})

// Global Variables

var classicFighters = [paperIcon, scissorsIcon, rocksIcon]
// var difficultFighters = [alienIcon, lizardIcon, paperIcon, scissorsIcon, rocksIcon]

// var player = {
//   name: "Human" || "Computer",
//   token: "👩🏼" || "💻",
//   wins: 0
// }




// var players = [
//   {
//     name: "Player 1",
//     gameType: gameType,
//     fighter: "unknown",
//     currentWins: 0
//   },
//   {
//     name: "Player 2",
//     fighter: "unknown",
//     gameType: gameType,
//     currentWins: 0
//   }
// ]

// display functions

function showResults() {
  resultsIcons.innerHTML = '';
  resultsIcons.innerHTML = `<div class="results-icons">
                        ${winConditions()}}
                        ${winConditions()} 
                        </div                          
    `
  console.log(winConditions())
}


function evaluateWinner(userIcon, opponentIcon) {
  console.log(userIcon, opponentIcon)
  if (userIcon === "happy-scissors-icon" && opponentIcon === "happy-rocks-icon") {
    return opponentIcon
  } else if (userIcon === "happy-rocks-icon" && opponentIcon === "happy-scissors-icon") {
    return userIcon
  } else if (userIcon === "happy-scissors-icon" && opponentIcon === "happy-paper-icon") {
    return opponentIcon
  } else if (userIcon === "happy-paper-icon" && opponentIcon === "happy-scissors-icon") {
    return opponentIcon
  } else if (userIcon === "happy-paper-icon" && opponentIcon === "happy-rocks-icon") {
    return userIcon
  } else if (userIcon === "happy-rocks-icon" && opponentIcon === "happy-paper-icon") {
    return opponentIcon
  } else {
    return userIcon
  }
}




// function winConditions(e) {
//   var random = randomIcon(classicFighters)
//   if (e.target.id === "happy-scissors-icon" && random === "happy-rock-icon") {
//     show(computerWinnerMessage)
//     hide(alternativePageMessage)
//     hide(classicOptionIcons)
//     show(resultsIcons)
//     return random
//   } else if (e.target.id === "happy-rocks-icon" && random === "happy-scissors-icon") {
//     show(computerWinnerMessage)
//     hide(alternativePageMessage)
//     hide(classicOptionIcons)
//     show(resultsIcons)
//     return e.target
//   } else if (e.target.id === "happy-scissors-icon" && random === "happy-paper-icon") {
//     show(computerWinnerMessage)
//     hide(alternativePageMessage)
//     hide(classicOptionIcons)
//     return e.target
//   } else if (e.target.id === "happy-paper-icon" && random === "happy-scissors-icon") {
//     show(computerWinnerMessage)
//     hide(alternativePageMessage)
//     hide(classicOptionIcons)
//     show(resultsIcons)
//     return random
//   } else if (e.target.id === "happy-paper-icon" && random === "happy-rocks-icon") {
//     show(computerWinnerMessage)
//     hide(alternativePageMessage)
//     hide(classicOptionIcons)
//     show(resultsIcons)
//     return e.target
//   } else if (e.target.id === "happy-rocks-icon" && random === "happy-paper-icon") {
//     show(computerWinnerMessage)
//     hide(alternativePageMessage)
//     hide(classicOptionIcons)
//     show(resultsIcons)
//     return random
//   }


//DRAW ISSUE
// if (e.target === randomIcon(classicFighters)) {
//   console.log(e.target)
//   console.log(randomIcon(classicFighters))
//   show(drawMessage)
//   hide(alternativePageMessage)
//   hide(paperIcon)
//   hide(scissorsIcon)
//   hide(rocksIcon)
//   show(e.target)

// make a new div with two inserts to place the two images that populates inside it and then hide everything else 
// 


function randomIcon(array) {
  var random = Math.floor(Math.random() * array.length)
  var item = array[random]
  return item.id
}

function hide(element) {
  element.setAttribute("hidden", "")
}

function show(element) {
  element.removeAttribute("hidden");
}

function displayClassic() {
  show(alternativePageMessage);
  hide(mainPageMessage);
  hide(classicVersion);
  hide(difficultVersion);
  show(classicOptionIcons);
}

function displayDifficult() {
  show(alternativePageMessage);
  hide(mainPageMessage);
  hide(classicVersion);
  hide(difficultVersion);
  show(classicOptionIcons);
  show(difficultOptionIcons)
}

function displayHome() {
  hide(alternativePageMessage);
  show(mainPageMessage);
  show(classicVersion);
  show(difficultVersion);
  hide(classicOptionIcons);
  hide(difficultOptionIcons)
  hide(drawMessage)
}

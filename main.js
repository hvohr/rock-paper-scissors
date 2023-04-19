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
//icons
var paperIcon = document.querySelector("#happy-paper-icon");
var scissorsIcon = document.querySelector("#happy-scissors-icon");
var rocksIcon = document.querySelector("#happy-rocks-icon");
var alienIcon = document.querySelector("#happy-alien-icon");
var lizardIcon = document.querySelector("#happy-lizard-icon");
//computer icons
// var compPaperIcon = document.querySelector("#computer-paper-icon");
// var compScissorsIcon = document.querySelector("#computer-scissors-icon");
// var compRocksIcon = document.querySelector("#computer-rocks-icon");
// var alienIcon = document.querySelector("#computer-alien-icon");
// var lizardIcon = document.querySelector("#computer-lizard-icon");
//Event Listeners

classicVersion.addEventListener('click', displayClassic)
// difficultVersion.addEventListener('click', displayDifficult)

classicOptionIcons.addEventListener('click', function (e) {
  if (e.target.classList.contains('happy')) {
    winConditions(e)
    drawConditions(e)
  }
})

// Global Variables

var classicFighters = [paperIcon, scissorsIcon, rocksIcon]
// var difficultFighters = [alienIcon, lizardIcon, paperIcon, scissorsIcon, rocksIcon]

function createPlayer() {
  var player = {
    name: "Human" || "Computer",
    token: "👩🏼" || "💻",
    wins: 0
  }
  return player
}

function createGame() {
  var players = [
    {
      name: "Player 1",
      gameType: gameType,
      fighter: "unknown",
      currentWins: 0
    },
    {
      name: "Player 2",
      fighter: "unknown",
      gameType: gameType,
      currentWins: 0
    }
  ]
  return players
}

// display functions

function drawConditions(e) {
  if (e.target === randomIcon(classicFighters)) {
    console.log(e.target)
    console.log(randomIcon(classicFighters))
    show(drawMessage)
    hide(alternativePageMessage)
    hide(paperIcon)
    hide(scissorsIcon)
    hide(rocksIcon)
    show(e.target)
  }

function winConditions(e) {
  if (e.target.id === "happy-scissors-icon" && randomIcon(classicFighters) === "happy-rocks-icon") {
    show(computerWinnerMessage)
    hide(alternativePageMessage)
    hide(paperIcon)
    hide(scissorsIcon)
    hide(rocksIcon)
    show(e.target)
  } else if (e.target.id === "happy-rocks-icon" && randomIcon(classicFighters) === "happy-scissors-icon") {
    show(humanWinnerMessage)
    hide(alternativePageMessage)
    hide(paperIcon)
    hide(scissorsIcon)
    hide(rocksIcon)
    show(e.target)
  }
}
}




function randomIcon(array) {
  var random = Math.floor(Math.random() * array.length)
  var item = array[random]
  return item
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

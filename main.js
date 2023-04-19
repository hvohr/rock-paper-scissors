// DOM queries
var classicVersion = document.querySelector(".container-1");
var difficultVersion = document.querySelector(".container-2");
var mainPageMessage = document.querySelector(".main-page-message");
var drawMessage = document.querySelector(".draw-message")
var alternativePageMessage = document.querySelector(".alternative-page-message");
var classicOptionIcons = document.querySelector(".classic-option-icons");
var difficultOptionIcons = document.querySelector(".difficult-option-icons");
var changeGameButton = document.querySelector(".change-game-button");
var paperIcon = document.querySelector("#happy-paper-icon");
var scissorsIcon = document.querySelector("#happy-scissors-icon");
var rocksIcon = document.querySelector("#happy-rocks-icon");
var alienIcon = document.querySelector("#happy-alien-icon");
var lizardIcon = document.querySelector("#happy-lizard-icon");

//Event Listeners

classicVersion.addEventListener('click', displayClassic)
difficultVersion.addEventListener('click', displayDifficult)

classicOptionIcons.addEventListener('click', function (e) {
  if (e.target.classList.contains('happy')) {
    winConditions(e)
  }
})

// Global Variables

var classicFighters = [paperIcon, scissorsIcon, rocksIcon]
var difficultFighters = [alienIcon, lizardIcon, paperIcon, scissorsIcon, rocksIcon]

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

function winConditions(e) {
  if (e.target.id === randomIcon(classicFighters)) {
    show(drawMessage)
    hide(alternativePageMessage)
    
  }
}

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



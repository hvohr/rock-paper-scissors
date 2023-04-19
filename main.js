// DOM queries
var classicVersion = document.querySelector(".container-1");
var difficultVersion = document.querySelector(".container-2");
var mainPageMessage = document.querySelector(".main-page-message");
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

classicOptionIcons.addEventListener('click', function(e) {
  if (e.target.classList.contains('happy')) {
      console.log("fuck")
  }
})

// Global Variables

var classicFighters = [paperIcon, scissorsIcon, rocksIcon]
var difficultFighters = [alienIcon, lizardIcon, paperIcon, scissorsIcon, rocksIcon]

function createPlayer(name, token, wins) {
  var player = {
    name: name,
    token: token,
    wins: wins,
  }
}

function createGame () {
  var player1 = {
    currentWins,

  }
  var player2 = {
    currentWins,
  }
}

// display functions

// function computerChoice() {
//   for (var i = 0; i < fighters.length; i++) {
//     console.log(fighters[i])
//     show(fighters[i])
//   }
// }

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



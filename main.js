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

console.log(classicOptionIcons)

var difficulty = "classic"

classicVersion.addEventListener('click', displayClassic)
changeGameButton.addEventListener('click', displayHome)
difficultVersion.addEventListener('click', displayDifficult)

if (difficulty === "classic") {
  classicOptionIcons.addEventListener('click', classicVersionTest)
} else {
  difficultVersion.addEventListener('click', 'tbd')
}

// classicOptionIcons.addEventListener('click', )

// Global Variables

var classicFighters = [paperIcon, scissorsIcon, rocksIcon]
// var difficultFighters = [alienIcon, lizardIcon, paperIcon, scissorsIcon, rocksIcon]

// Data Models
function createPlayer(name, token, wins = 0) {
  var player = {
    name: name,
    token: token,
    wins: wins
}
 return player
}

function createGame(fighter, gameType) { 
  var players = [
  {
    fighter: fighter,
    gameType: gameType,
    gameResult: []
  },
  {
    fighter: fighter,
    gameType: gameType,
    gameResult: []
  }
]
return players;
}

// display functions
function classicVersionTest(e) {
  if (e.target.classList.contains("happy") && difficulty === "classic") {
    var opponent = randomIcon(classicFighters)
    var winner = evaluateWinner(e.target.id, opponent)
    if (opponent === e.target.id) {
      show(drawMessage)
    } else if (winner === opponent) {
      show(computerWinnerMessage)
    } else {
      show(humanWinnerMessage)
    }
    hide(alternativePageMessage)
    hide(classicOptionIcons)
    showResults(e.target.id, opponent)
    show(resultsIcons)
    setTimeout(displayClassic, 3000)
    setTimeout(removeNewIcon, 2900)
    setTimeout(removeNewIcon, 2900)
    show(changeGameButton)
  }
}

function removeNewIcon() {
  resultsIcons.removeChild(resultsIcons.firstElementChild);
}

function showResults(winner, loser) {
  var winnerImg = document.createElement("img");
  var winnerName = winner.substr(0, winner.indexOf('-icon'))
  winnerImg.setAttribute("src", `./assets/${winnerName}.png`);
  winnerImg.setAttribute("id", winner);
  document.getElementById("result").appendChild(winnerImg); 
  var loserImg = document.createElement("img");
  var loserName = loser.substr(0, loser.indexOf('-icon'))
  loserImg.setAttribute("src", `./assets/${loserName}.png`);
  loserImg.setAttribute("id", loser);
  document.getElementById("result").appendChild(loserImg);
}

function hideResultMessage() {
  hide(computerWinnerMessage)
  hide(humanWinnerMessage)
  hide(drawMessage)
}



// refactor to be better (needs less conditions - section into wins and loses)
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
  difficulty = "classic"
  show(alternativePageMessage);
  hide(mainPageMessage);
  hide(classicVersion);
  hide(difficultVersion);
  show(classicOptionIcons);
  hideResultMessage()
}

function displayDifficult() {
  difficulty = "difficult"
  show(alternativePageMessage);
  hide(mainPageMessage);
  hide(classicVersion);
  hide(difficultVersion);
  show(classicOptionIcons);
  show(difficultOptionIcons)
  hideResultMessage()
}

function displayHome() {
  hide(alternativePageMessage);
  show(mainPageMessage);
  show(classicVersion);
  show(difficultVersion);
  hide(classicOptionIcons);
  hide(difficultOptionIcons)
  hide(changeGameButton)
  hideResultMessage()
}

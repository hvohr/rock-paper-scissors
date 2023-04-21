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
var humanWinCount = document.querySelector(".human-win-count")
var computerWinCount = document.querySelector(".computer-win-count")
var paperIcon = document.querySelector("#happy-paper-icon");
var scissorsIcon = document.querySelector("#happy-scissors-icon");
var rocksIcon = document.querySelector("#happy-rocks-icon");
var alienIcon = document.querySelector("#happy-alien-icon");
var lizardIcon = document.querySelector("#happy-lizard-icon");

//Event Listeners

var difficulty = "classic"
if (difficulty === "difficult") {
  classicOptionIcons.addEventListener('click', createGameDifficult)
  difficultOptionIcons.addEventListener('click', createGameDifficult)
} else {
  classicOptionIcons.addEventListener('click', createGameClassic)
}
classicVersion.addEventListener('click', displayClassic)
changeGameButton.addEventListener('click', displayHome)
difficultVersion.addEventListener('click', displayDifficult)

// Global Variables

var classicFighters = [paperIcon, scissorsIcon, rocksIcon]
var difficultFighters = [alienIcon, lizardIcon, paperIcon, scissorsIcon, rocksIcon]

// Data Models

var player1 = {
  name: "Computer",
  fighter: "unknown",
  wins: 0
}

var player2 = {
  name: "Human",
  fighter: "unknown",
  wins: 0
}

// Create Game Functions

function createGameClassic(e) {
  if (e.target.classList.contains("happy") && difficulty === "classic") {
    var opponent = randomIcon(classicFighters)
    var winner = evaluateWinner(player1.fighter, player2.fighter)
    player2.fighter = opponent
    player1.fighter = e.target.id
    if (player2.fighter === player1.fighter) {
      show(drawMessage)
    } else if (winner === player2.fighter) {
      show(computerWinnerMessage)
      player2.wins++
    } else {
      show(humanWinnerMessage)
      player1.wins++
    }
    hide(alternativePageMessage)
    hide(classicOptionIcons)
    winCount()
    showResults(player1.fighter, player2.fighter)
    setTimeout(displayClassic, 2000)
    setTimeout(removeNewIcon, 1900)
    setTimeout(removeNewIcon, 1900)
    show(changeGameButton)
  }
}

function createGameDifficult(e) {
  if (e.target.classList.contains("happy") && difficulty === "difficult") {
    var opponent = randomIcon(difficultFighters)
    player2.fighter = opponent
    player1.fighter = e.target.id
    var winner = evaluateWinnerDifficult(player1.fighter, player2.fighter)
    if (player2.fighter === player1.fighter) {
      show(drawMessage)
    } else if (winner === player2.fighter) {
      show(computerWinnerMessage)
      player2.wins++
    } else {
      show(humanWinnerMessage)
      player1.wins++
    }
    hide(alternativePageMessage)
    hide(classicOptionIcons)
    hide(difficultOptionIcons)
    winCount()
    showResults(player1.fighter, player2.fighter)
    setTimeout(displayDifficult, 2000)
    setTimeout(removeNewIcon, 1900)
    setTimeout(removeNewIcon, 1900)
    show(changeGameButton)
  }
}

function randomIcon(array) {
  var random = Math.floor(Math.random() * array.length)
  var item = array[random]
  return item.id
}

// Display Functions
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

function hide(element) {
  element.setAttribute("hidden", "")
}

function show(element) {
  element.removeAttribute("hidden");
}

function displayClassic() {
  difficulty = "classic";
  show(alternativePageMessage);
  hide(mainPageMessage);
  hide(classicVersion);
  hide(difficultVersion);
  show(classicOptionIcons);
  hideResultMessage()
}

function displayDifficult() {
  difficulty = "difficult";
  classicOptionIcons.addEventListener('click', createGameDifficult)
  difficultOptionIcons.addEventListener('click', createGameDifficult)
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

function winCount() {
  humanWinCount.innerText = `Wins: ${player1.wins}`
  computerWinCount.innerText = `Wins: ${player2.wins}`
}

// Game Rules Functions
// refactor to be better (needs less conditions - section into wins and loses)
function evaluateWinner(userIcon, opponentIcon) {
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

function evaluateWinnerDifficult(userIcon, opponentIcon) {
  if (userIcon === "happy-scissors-icon" && (opponentIcon === "happy-paper-icon" || opponentIcon === "happy-lizard-icon")) {
    return userIcon
  } else if (userIcon === "happy-rocks-icon" && (opponentIcon === "happy-scissors-icon" || opponentIcon === "happy-lizard-icon")) {
    return userIcon
  } else if (userIcon === "happy-paper-icon" && (opponentIcon === "happy-rock-icon" & opponentIcon === "happy-alien-icon")) {
    return userIcon
  } else if (userIcon === "happy-lizard-icon" && (opponentIcon === "happy-paper-icon" || opponentIcon === "happy-alien-icon")) {
    return opponentIcon
  } else if (userIcon === "happy-alien-icon" && (opponentIcon === "happy-rocks-icon" || opponentIcon === "happy-scissors-icon")) {
    return opponentIcon
  } else {
    return userIcon
  }
}
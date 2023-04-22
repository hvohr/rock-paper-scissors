// DOM queries

var classicVersion = document.querySelector(".container-1");
var difficultVersion = document.querySelector(".container-2");
var mainPageMessage = document.querySelector(".main-page-message");
var alternativePageMessage = document.querySelector(".alternative-page-message");
var classicOptionIcons = document.querySelector(".classic-option-icons");
var difficultOptionIcons = document.querySelector(".difficult-option-icons");
var changeGameButton = document.querySelector(".change-game-button");
var resultsIcons = document.querySelector(".results-icons")
var humanWinCount = document.querySelector(".human-win-count")
var computerWinCount = document.querySelector(".computer-win-count")
var paperIcon = document.querySelector("#happy-paper-icon");
var scissorsIcon = document.querySelector("#happy-scissors-icon");
var rocksIcon = document.querySelector("#happy-rocks-icon");
var alienIcon = document.querySelector("#happy-alien-icon");
var lizardIcon = document.querySelector("#happy-lizard-icon");
var compWinnerToken = document.querySelector(".computer-winner-token")
var humanWinnerToken = document.querySelector(".human-winner-token")

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
      alternativePageMessage.innerText = `🥲It's a draw!🥲`
    } else if (winner === player2.fighter) {
      alternativePageMessage.innerText = `💻Computer won this round!💻`
      player2.wins++
    } else {
      alternativePageMessage.innerText = `👩🏼You won this round!👩🏼`
      player1.wins++
    }
    displayResult()
    setTimeout(displayClassic, 2000)
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
      alternativePageMessage.innerText = `🥲It's a draw!🥲`
    } else if (winner === player2.fighter) {
      alternativePageMessage.innerText = `💻Computer won this round!💻`
      player2.wins++
    } else {
      alternativePageMessage.innerText = `👩🏼You won this round!👩🏼`
      player1.wins++
    }
    displayResult()
    hide(difficultOptionIcons)
    setTimeout(displayDifficult, 2000)
    show(changeGameButton)
  }
}

function displayResult() {
  setTimeout(removeNewIcon, 1900)
  setTimeout(removeNewIcon, 1900)
  showIconResults(player1.fighter, player2.fighter)
  winCount()
  showWinnerToken()
  show(alternativePageMessage)
  hide(classicOptionIcons)
}

function randomIcon(array) {
  var random = Math.floor(Math.random() * array.length)
  var item = array[random]
  return item.id
}

// Display Functions

function showWinnerToken() {
  if (player1.wins === player2.wins) {
    hide(humanWinnerToken)
    hide(compWinnerToken)
  } else if (player1.wins > player2.wins) {
    show(humanWinnerToken)
    hide(compWinnerToken)
  } else {
    hide(humanWinnerToken)
    show(compWinnerToken)
  }
}

function removeNewIcon() {
  resultsIcons.removeChild(resultsIcons.firstElementChild);
}

function showIconResults(winner, loser) {
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

function hide(element) {
  element.setAttribute("hidden", "")
}

function show(element) {
  element.removeAttribute("hidden");
}

function displayClassic() {
  alternativePageMessage.innerText = `Choose your fighter!`
  difficulty = "classic";
  show(alternativePageMessage);
  hide(mainPageMessage);
  hide(classicVersion);
  hide(difficultVersion);
  show(classicOptionIcons);
}

function displayDifficult() {
  alternativePageMessage.innerText = `Choose your fighter!`
  difficulty = "difficult";
  classicOptionIcons.addEventListener('click', createGameDifficult)
  difficultOptionIcons.addEventListener('click', createGameDifficult)
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
  hide(changeGameButton)
}

function winCount() {
  humanWinCount.innerText = `Wins: ${player1.wins}`
  computerWinCount.innerText = `Wins: ${player2.wins}`
}

// Game Rules Functions

function evaluateWinner(userIcon, opponentIcon) {
  if (userIcon === "happy-scissors-icon" && opponentIcon === "happy-paper-icon") {
    return userIcon
  } else if (userIcon === "happy-rocks-icon" && opponentIcon === "happy-scissors-icon") {
    return userIcon
  } else if (userIcon === "happy-paper-icon" && opponentIcon === "happy-rock-icon") {
    return userIcon
  } else {
    return opponentIcon
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
    return userIcon
  } else if (userIcon === "happy-alien-icon" && (opponentIcon === "happy-rocks-icon" || opponentIcon === "happy-scissors-icon")) {
    return userIcon
  } else {
    return opponentIcon
  }
}
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
    if (opponent === e.target.id) {
      show(drawMessage)
    } else if (winner === opponent) {
      show(computerWinnerMessage)
    } else {
      show(humanWinnerMessage)
    }
    hide(alternativePageMessage)
    hide(classicOptionIcons)
    showWinner(winner)
    show(resultsIcons)
    setTimeout(displayHome, 3000)
  }
})

// Global Variables

var classicFighters = [paperIcon, scissorsIcon, rocksIcon]
// var difficultFighters = [alienIcon, lizardIcon, paperIcon, scissorsIcon, rocksIcon]


function createPlayer(name, token, wins) {
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

function showWinner(id) {
  // show(resultsIcons)
  var elem = document.createElement("img");
  var imageName = id.substr(0, id.indexOf('-icon'))
  elem.setAttribute("src", `./assets/${imageName}.png`);
  console.log(imageName)
  elem.setAttribute("id", id);
  document.getElementById("result").appendChild(elem);
  }



// function showResults(winner, loser) {
//   // show(resultsHolder)
//   var winnerImg = document.createElement("img");
//   var winnerName = winner.substr(0, winner.indexOf('-icon'))
//   winnerImg.setAttribute("src", `./assets/${winnerName}.png`);
//   winnerImg.setAttribute("id", winner);
//   document.getElementById("result").appendChild(winnerImg); 
//   var loserImg = document.createElement("img");
//   var loserName = loser.substr(0, loser.indexOf('-icon'))
//   loserImg.setAttribute("src", `./assets/${loserName}.png`);
//   loserImg.setAttribute("id", loser);
//   document.getElementById("result").appendChild(loserImg);
// }

function hideResultMessage() {
  hide(computerWinnerMessage)
  hide(humanWinnerMessage)
  hide(drawMessage)
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
  hideResultMessage()
}

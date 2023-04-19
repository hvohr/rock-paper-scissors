// DOM queries
var classicVersion = document.querySelector(".container-1");
var difficultVersion = document.querySelector(".container-2");
var mainPageMessage = document.querySelector(".main-page-message");
var alternativePageMessage = document.querySelector(".alternative-page-message");
var classicOptionIcons = document.querySelector(".classic-option-icons");
var difficultOptionIcons = document.querySelector(".difficult-option-icons");
var changeGameButton = document.querySelector(".change-game-button");

//Event Listeners

classicVersion.addEventListener('click', displayClassic)
difficultVersion.addEventListener('click', displayDifficult)


//Functions
function createPlayer(name, token, wins) {
  var player = {
    name: name,
    token: token,
    wins: wins
  }
  return player
}


function createGame() {
  var player1 = {
    currentWins: currentWins,
  }
  var player2 = {
    currentWins: currentWins,
  }
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



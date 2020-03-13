const X_CLASS = "x";
const CIRCLE_CLASS = "circle";

const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const cellElements = document.querySelectorAll("[data-cell]");
const board = document.getElementById("board");
const winningmessagetextelement = document.querySelector(
  "[data-winning-message-text]"
);
const winnmessageelement = document.getElementById("winningMessage");

const restartButton = document.getElementById('restart');

let circleTurn;

startGame();

restartButton.addEventListener('click', startGame);

function startGame() {
  circleTurn = false;
  cellElements.forEach(cell => {
    cell.classList.remove(X_CLASS);
    cell.classList.remove(CIRCLE_CLASS);
    cell.removeEventListener("click", handleClick);
    cell.addEventListener("click", handleClick, { once: true });
  });

  setBoardHoverClass();

  //remove old game setting if any
  winnmessageelement.classList.remove("show");
}



function handleClick(e) {
  console.log("clicked");

  const cell = e.target;
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
  //placemark
  placeMark(cell, currentClass);

  //check for win
  if (checkWin(currentClass)) {
    console.log("winner");
    endGame(false);
  } else if (isDraw()) {
    //check for draw

    endGame(true);
  } else {
    //switch turns
    swapTurns();

    //set hover enabled after swapping turns
    setBoardHoverClass();
  }
}

function endGame(draw) {
  if (draw) {
    winningmessagetextelement.innerText = "Draw !";
  } else {
    winningmessagetextelement.innerText = `${circleTurn ? "O" : "X"} wins`;
  }

  winnmessageelement.classList.add("show");
}

function isDraw() {
  return [...cellElements].every(cell => {
    return (
      cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
    );
  });
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

function swapTurns() {
  circleTurn = !circleTurn;
}

function setBoardHoverClass() {
  board.classList.remove(X_CLASS);
  board.classList.remove(CIRCLE_CLASS);
  if (circleTurn) {
    board.classList.add(CIRCLE_CLASS);
  } else {
    board.classList.add(X_CLASS);
  }
}

function checkWin(currentClass) {
  return WINNING_COMBINATIONS.some(combination => {
    return combination.every(index => {
      return cellElements[index].classList.contains(currentClass);
    });
  });
}



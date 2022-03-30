/**********************************************************
 *                 BUTTONS MANAGEMENT
 *********************************************************/

function isFirstMovement(currentMovement) {
  return currentMovement == 0;
}
function isMiddleMovement(movementsLength, currentMovement) {
  return currentMovement > 0 && movementsLength > 1;
}
function isLastMovement(movementsLength, currentMovement) {
  return currentMovement == movementsLength - 1;
}

//Unable game movement buttons when info is available
function buttonsManagement(movementsLength, currentMovement) {
  const buttonNext = document.getElementById("next");
  const buttonBack = document.getElementById("back");

  if (isFirstMovement(currentMovement)) {
    if (movementsLength == 1) {
      buttonNext.disabled = true;
      buttonBack.disabled = true;
    } else {
      buttonNext.disabled = false;
      buttonBack.disabled = true;
    }
  } else if (isLastMovement(movementsLength, currentMovement)) {
    buttonNext.disabled = true;
    buttonBack.disabled = false;
  } else if (isMiddleMovement(movementsLength, currentMovement)) {
    buttonNext.disabled = false;
    buttonBack.disabled = false;
  } else {
    buttonNext.disabled = true;
    buttonBack.disabled = true;
  }
}

/**********************************************************
 *               UPDATE MOVEMENTS DISPLAY
 *********************************************************/

//Adds a movement to the grid
function addGameMovement(movement, sign) {
  let movementRow = movement[0];
  let movementCol = movement[1];
  let cells = document.getElementsByClassName("cell");
  for (const cell of cells) {
    if (cell.dataset.row == movementRow && cell.dataset.column == movementCol) {
      cell.innerHTML = sign;
      return;
    }
  }
}

function resetGrid() {
  let cells = document.getElementsByClassName("cell");
  for (const cell of cells) {
    cell.innerHTML = "";
  }
}

//Diplays the game grid movements
function updateGrid(movements, movementNumber) {
console.log(movements);
console.log(movementNumber);

  let sign = "";
  resetGrid();

  //adds all movement  until current one
  for (let i = 0; i <= movementNumber; i++) {
    i % 2 == 0 ? (sign = "x") : (sign = "o");
    addGameMovement(movements[i], sign);
  }
}

module.exports = {
  updateGrid,
  buttonsManagement,
};

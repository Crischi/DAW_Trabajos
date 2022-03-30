import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../common/common.css";
import "./game.css";

const { updateGrid, buttonsManagement } = require("./module_game");

const {
  makePetition,
  getParam,
  getAuthorization,
  getUrl,
} = require("../common/module_petitions");

/**********************************************************
 *                      VARIABLES
 *********************************************************/

let movementsArray;
let currentMovement = 0;

//Preparing petition
const gameId = getParam("game");
const movementCode = getParam("movement");
const nextMovementsUrl = getUrl(
  "/game/".concat(gameId).concat("/movements/").concat(movementCode)
);

//Display game number
document.getElementById("game-id").innerHTML = gameId;

/**********************************************************
 *               MOVEMENTS BUTTONS EVENT
 *********************************************************/

const buttonNext = document.getElementById("next");
const buttonBack = document.getElementById("back");

buttonNext.addEventListener("click", () => {
  currentMovement++;
  updateGrid(movementsArray, currentMovement);
  buttonsManagement(movementsArray.length, currentMovement);
});

buttonBack.addEventListener("click", () => {
  currentMovement--;
  updateGrid(movementsArray, currentMovement);
  buttonsManagement(movementsArray.length, currentMovement);
});

/**********************************************************
 *               RETURN EVENT
 *********************************************************/

const buttonReturn = document.getElementById("return");

buttonReturn.addEventListener("click", () => {
  //redirects to the previous page using the id stored in localStorage
  window.location.href = "/list.html?player=" + localStorage.player_id;
});

/**********************************************************
 *             DO FOLLOWING PETITIONS PETITIONS
 *********************************************************/
function getNextMovementInfo(nextMovementsUrl, playerPetition) {
  //Do fetch
  let response = makePetition(nextMovementsUrl, playerPetition);

  response
    .then((movementInfo) => {
      //store movements
      movementsArray.push(movementInfo.movement);

      if (movementInfo.next !== null) {
        //Display the first movement
        if (movementsArray.length == 1) {
          updateGrid(movementsArray, currentMovement);

          //Disable loader:
          document.getElementById("loader").classList.remove("active");
        }

        //Prepare next url to fetch
        nextMovementsUrl = getUrl(
          "/game/"
            .concat(gameId)
            .concat("/movements/")
            .concat(movementInfo.next)
        );
        //fetch, display, manage buttons for the next movement
        getNextMovementInfo(nextMovementsUrl, playerPetition);
      }
      
      //Enable/disable movement buttons
      buttonsManagement(movementsArray.length, currentMovement);
    })
    .catch((error) => {
      console.log(error);
    });
}

/**********************************************************
 *                     ON WINDOW LOAD
 *             DO THE FIRST MOVEMENT PETITION
 *********************************************************/

window.addEventListener("load", () => {
  //Enable loader while fetching
  document.getElementById("loader").classList.add("active");

  const playerPetition = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: getAuthorization(),
    },
  };
  movementsArray = [];
  getNextMovementInfo(nextMovementsUrl, playerPetition);
});

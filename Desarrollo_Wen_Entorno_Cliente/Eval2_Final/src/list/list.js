import "./list.css";
import "../common/common.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const {
  makePetition,
  getParam,
  getAuthorization,
  getUrl,
} = require("../common/module_petitions");

const { displayPlayerInfo, displayPlayerName } = require("./module_list");

/********************variables*******************************/
let gamesIdAndFirstMove = [];

const playerPetition = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    authorization: getAuthorization(),
  },
};

/**********************************************************
 *                   ON CLICK VIEW GAME
 *                 REDIRECTS TO GAME PAGE
 *********************************************************/

//Redirect to the number game given by the button with data-game attribute
function redirect(e) {
  gamesIdAndFirstMove.forEach((element) => {
    //Search the first movement for this id, an redirect
    if (e.target.dataset.game == element.id) {
      window.location.href ="/game.html?game=" + element.id + "&movement=" + element.first_movement;
    }
  });
}

function listenRedirectionEvent() {
  const gameButtons = document.getElementsByClassName("view-button");
  for (let button of gameButtons) {
    button.onclick = redirect;
  }
}

/**********************************************************
 *                    GETS GAMES INFO
 *********************************************************/

//Make fetch for all games info
function getGamesInfo(playerNameAndGames) {
  let playerName = playerNameAndGames[0].name;

  Promise.all(
    playerNameAndGames[1].map((gameId) => {
      //fetch game/id
      let gameUrl = getUrl("/game/".concat(gameId));
      return makePetition(gameUrl, playerPetition);
    })
  )
    .then((gameInfo) => {
      // Display games card info
      displayPlayerInfo(gameInfo, playerName);

      //Store all ids and first moves info to be recovered later
      gamesIdAndFirstMove = gameInfo.slice();
    }).catch((error) => {
      console.log(error);
    })
    .finally(() => {
      listenRedirectionEvent();
    });
}

/**********************************************************
 *                   ON WINDOW LOAD
 *          GETS PLAYER NAME AND PLAYER GAMES
 *********************************************************/

window.addEventListener("load", () => {
  //Enable loader while fetching
  document.getElementById("loader").classList.add("active");

  //Prepare player name petition
  const id = getParam("player");
  const playerUrl = getUrl("/player/".concat(id));
  

  //Prepare player games petition
  const playerGamesUrl = getUrl("/player/".concat(id).concat("/games"));

  //Make fetch for player and games info
  Promise.all([
    makePetition(playerUrl, playerPetition),
    makePetition(playerGamesUrl, playerPetition),
  ])
    .then((playerNameAndGames) => {
      //Do fetch for the games or display Name/No game
      if (playerNameAndGames[1].length !== 0) {
        getGamesInfo(playerNameAndGames);
      } else {
        displayPlayerName(playerNameAndGames[0].name);
        document.getElementById("game-list").innerHTML = "No games";
      }
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      //Disable loader:
      document.getElementById("loader").classList.remove("active");
    });
});

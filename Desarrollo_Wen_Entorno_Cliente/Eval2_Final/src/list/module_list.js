/**********************************************************
 *                   HTML TEMPLATES
 *********************************************************/

function setMovement(result) {
  if (result === 1) {
    return "x";
  } else if (result === 2) {
    return "o";
  } else {
    return "";
  }
}

function dataStyle(gameInfo) {
  const d = new Date(gameInfo.date);
  const gameData =
    d.getDate() +
    "/" +
    (d.getMonth() + 1) +
    "/" +
    d.getFullYear() +
    " " +
    d.getHours() +
    ": " +
    d.getMinutes();
  return gameData;
}

function createHtmlGameTemplate(gameInfo) {
  const template = ` <ol class="game m-3">

   <div class="card p-1">
     <h5 class="game-info"> Game # ${gameInfo.id}
     </h5>
     <div class="date"> ${dataStyle(gameInfo)}
     </div>
   </div>

   <div class="card mt-1 p-2 align-items-center">
     <div class="preview">
       <div class="line">
         <div class="cell">${setMovement(gameInfo.result[0][0])}</div>
         <div class="cell">${setMovement(gameInfo.result[0][1])}</div>
         <div class="cell">${setMovement(gameInfo.result[0][2])}</div>
       </div>
       <div class="line">
       <div class="cell">${setMovement(gameInfo.result[1][0])}</div>
       <div class="cell">${setMovement(gameInfo.result[1][1])}</div>
       <div class="cell">${setMovement(gameInfo.result[1][2])}</div>
       </div>
       <div class="line">
       <div class="cell">${setMovement(gameInfo.result[2][0])}</div>
       <div class="cell">${setMovement(gameInfo.result[2][1])}</div>
       <div class="cell">${setMovement(gameInfo.result[2][2])}</div>
       </div>
     </div>

     <button class="btn btn-smttt btn-primary view-button" data-game="${
       gameInfo.id
     }">
     View game
     </button>

   </div>
 </ol>`;

  return template;
}

/**********************************************************
 *                   DISPLAY PLAYER INFO TOOLS
 *********************************************************/

function displayGameTemplates(arrayGamesInfo) {
  const gameList = document.getElementById("game-list");
  let allGames = "";

  //create templates
  arrayGamesInfo.forEach((element) => {
    // dataStyle(element);
    let template = createHtmlGameTemplate(element);
    allGames = allGames.concat(template);
  });

  //Insert templates on DOM
  gameList.innerHTML = allGames;
}

function displayPlayerName(playerName) {
  document.getElementById("player-name").innerHTML = playerName;
}

function displayPlayerInfo(arrayGamesInfo, playerName) {
  displayPlayerName(playerName);
  displayGameTemplates(arrayGamesInfo);
}

module.exports = {
  displayGameTemplates,
  displayPlayerInfo,
  displayPlayerName,
};

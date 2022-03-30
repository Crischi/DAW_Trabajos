const { makePetition } = require("../common/module_petitions");
const { displayError } = require("../common/module_common_tools");

/**********************************************************
 *                   SELECT REDIRECTION PAGE
 *********************************************************/

function selectRedirectionPage(previousPlayerId, currentPlayerId) {
  //in case of error 401 redirect to the last page displayed if is the same player
  if (
    localStorage.pageBeforeError != undefined &&
    previousPlayerId == currentPlayerId
  ) {
    let redirectTo = localStorage.pageBeforeError;
    localStorage.removeItem("pageBeforeError");
    window.location.href = redirectTo;
    //in any other case redirect to list.html
  } else {
    localStorage.removeItem("pageBeforeError");
    window.location.href = "/list.html?player=" + currentPlayerId;
  }
}

/**********************************************************
 *                   PLAYER INFO FETCH
 *********************************************************/

function makePlayerInfoFetch() {
  //Prepare fetch parameters
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const loginUrl = "https://dwec-tres-en-raya.herokuapp.com/login";
  const loginPetitionOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: username, password: password }),
  };

  //Do fetch
  makePetition(loginUrl, loginPetitionOptions)
    .then((loginPetitionResponse) => {
      let previousId = localStorage.player_id;

      //Store token and id, and redirect to the following page
      localStorage.setItem("token", loginPetitionResponse.access_token);
      localStorage.setItem("player_id", loginPetitionResponse.player_id);

      //Redirects to the correct page
      selectRedirectionPage(previousId, localStorage.player_id);
    })
    .catch((error) => {
      displayError(error);
      console.log(error);
    })
    .finally(() => {
      //Stop loader:
      document.getElementById("loader").classList.remove("active");
    });
}

/*********************FORM VALIDATION******************/
function checkingFormValidity(e) {
  //Cancel form submission until validition is done
  e.preventDefault();

  const form = document.getElementsByTagName("form")[0];

  if (form.checkValidity()) {
    //Throw loader while fetching
    document.getElementById("loader").classList.add("active");

    //Do player info fetch
    makePlayerInfoFetch();
  }
}

module.exports = {
  checkingFormValidity,
};

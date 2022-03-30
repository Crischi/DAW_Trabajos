const {  manageErrors,} = require("../common/module_common_tools");

/**********************************************************
 *                  GETTING PLAYERS DATA
 **********************************************************/
function getParam(parameter) {
  //Query string id value
  let params = new URLSearchParams(document.location.search);
  const data = params.get(parameter);
  return data;
}

function getAuthorization() {
  const token = localStorage.token;
  const authorization = "Bearer ".concat(token);
  return authorization;
}

/**********************************************************
 *                  PREPARING FETCH
 **********************************************************/
function getUrl(option) {
  const urlFetch = "https://dwec-tres-en-raya.herokuapp.com".concat(option);
  return urlFetch;
}

/**********************************************************
 *                  MAKING FETCH
 **********************************************************/
async function makePetition(url, option) {
  const response = await fetch(url, option);

  if (response.status === 200) {
    const responseJson = response.json();
    return responseJson;
  } else {
    manageErrors(response);
  }
}

module.exports = {
  makePetition,
  getParam,
  getAuthorization,
  getUrl,
};

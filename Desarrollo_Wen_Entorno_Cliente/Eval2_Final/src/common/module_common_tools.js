/**********************************************************
 *                   ERRORS MANAGEMENT
 **********************************************************/

function displayError(msg) {
  const errorDisplay = document.getElementById("error");
  errorDisplay.textContent = "Error: " + msg;
  errorDisplay.classList.add("show");
}
function manageErrors(response) {
  if (response.status === 401 && window.location.pathname !== "/index.html") {
    //redirect to login page if the token expires
    localStorage.setItem("pageBeforeError", window.location.href);
    console.log(localStorage.pageBeforeError);
    window.location.href = "/index.html";
  } else {
    throw response.statusText;
  }
}

/**********************************************************
 *                   MULTIPAGE MANAGEMENT
 *********************************************************/
function redirecting(url) {
  window.location.href = url;
}

module.exports = {
  displayError,
  redirecting,
  manageErrors,
};

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../common/common.css";
import "./index.css";

const { checkingFormValidity } = require("./module_index");

//When form login is submitted
const form = document.getElementsByTagName("form")[0];

//add validation format
form.classList.add("was-validated");

form.addEventListener("submit", checkingFormValidity);

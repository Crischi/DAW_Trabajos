function sortArrayByNameProperty(fetchedCharacters) {
  fetchedCharacters.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });
  return fetchedCharacters;
}

function errorsManagement(error) {
  if (error === 404) {
    return Promise.reject("personaje no encontrado");
  } else {
    return Promise.reject("Error: " + error);
  }
}

function checkingConditionsBeforeFetch(characterUrl, mainCharaterUrl, urlsFetchedList) {
  
  if (characterUrl === mainCharaterUrl)  return false;  

  for (let url of urlsFetchedList) {
    if (url === characterUrl)       return false;
  }
  return true;
}

export {
  sortArrayByNameProperty,
  errorsManagement,
  checkingConditionsBeforeFetch,
};

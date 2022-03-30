import { fetchRequest } from "./fetch.js";
import {
  sortArrayByNameProperty,
  errorsManagement,
  checkingConditionsBeforeFetch,
} from "./data_processing.js";

async function searchCharacter(characterName) {
  const apiPath = "https://rickandmortyapi.com/api/character/?name=";
  try {
    const characterDataResponse = await fetchRequest(apiPath + characterName);
    return characterDataResponse.results[0];
  } catch (error) {
    return errorsManagement(error);
  }
}

async function getCompanions(characterName) {
  let condition = false;
  let charactersOutput = [];
  let alreadyFetchedUrls = [];

  try {
    //Main character info
    const characterDataFetchResponse = await searchCharacter(characterName);
    const episodesList = characterDataFetchResponse.episode;

    //Episodes info promises
    const episodesInfoPromises = episodesList.map(async (episode) => {
      const episodeInfoFetchResponse = await fetchRequest(episode);

      //Characters info promises
      let characterInfoCollection = new Set();
      episodeInfoFetchResponse.characters.forEach((characterUrl) => {
        //Filter already fetched urls
        condition = checkingConditionsBeforeFetch(
          characterUrl,
          characterDataFetchResponse.url,
          alreadyFetchedUrls
        );
        if (condition) {
          let currentFetch = fetchRequest(characterUrl);
          alreadyFetchedUrls.push(characterUrl);
          characterInfoCollection.add(currentFetch);
        }
      });

      //Characters info
      const charactersInfoArray = await Promise.all(characterInfoCollection);

      //final characters list
      charactersInfoArray.forEach((characterData) =>
        charactersOutput.push({
          id: characterData.id,
          name: characterData.name,
        })
      );
    });
    //Episodes info
    await Promise.all(episodesInfoPromises);

    const charactersSortedOutput = sortArrayByNameProperty(charactersOutput);

  

    return charactersSortedOutput;
  } catch (error) {
    return errorsManagement(error);
  }
}

export { searchCharacter, getCompanions };

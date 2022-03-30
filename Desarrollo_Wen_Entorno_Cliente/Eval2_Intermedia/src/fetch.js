import fetch from "node-fetch";

async function fetchRequest(path) {

  const response = await fetch(path);

  if (response.status === 200) {
    return await response.json();
  } else {
    throw response.status;
  }
}

export { fetchRequest };

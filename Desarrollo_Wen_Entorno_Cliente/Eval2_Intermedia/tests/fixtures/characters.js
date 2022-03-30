const annie = {
  "id": 21,
  "name": "Aqua Morty",
  "status": "unknown",
  "species": "Humanoid",
  "type": "Fish-Person",
  "gender": "Male",
  "origin": {
    "name": "unknown",
    "url": ""
  },
  "location": {
    "name": "Citadel of Ricks",
    "url": "https://rickandmortyapi.com/api/location/3"
  },
  "image": "https://rickandmortyapi.com/api/character/avatar/21.jpeg",
  "episode": [
    "https://rickandmortyapi.com/api/episode/10",
    "https://rickandmortyapi.com/api/episode/22"
  ],
  "url": "https://rickandmortyapi.com/api/character/21",
  "created": "2017-11-04T22:39:48.055Z"
}

const attila = {
  "id": 28,
  "name": "Attila Starwar",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Male",
  "origin": {
    "name": "unknown",
    "url": ""
  },
  "location": {
    "name": "Interdimensional Cable",
    "url": "https://rickandmortyapi.com/api/location/6"
  },
  "image": "https://rickandmortyapi.com/api/character/avatar/28.jpeg",
  "episode": [
    "https://rickandmortyapi.com/api/episode/8",
    "https://rickandmortyapi.com/api/episode/13",
    "https://rickandmortyapi.com/api/episode/17"
  ],
  "url": "https://rickandmortyapi.com/api/character/28",
  "created": "2017-11-05T09:02:16.595Z"
}
const aqua={
  info: { count: 2, pages: 1, next: null, prev: null },
  results: [
    {
      id: 21,
      name: "Aqua Morty",
      status: "unknown",
      species: "Humanoid",
      type: "Fish-Person",
      gender: "Male",
      origin: { name: "unknown", url: "" },
      location: {
        name: "Citadel of Ricks",
        url: "https://rickandmortyapi.com/api/location/3",
      },
      image:
        "https://rickandmortyapi.com/api/character/avatar/21.jpeg",
      episode: [
        "https://rickandmortyapi.com/api/episode/10",
        "https://rickandmortyapi.com/api/episode/22",
      ],
      url: "https://rickandmortyapi.com/api/character/21",
      created: "2017-11-04T22:39:48.055Z",
    },
    {
      id: 22,
      name: "Aqua Rick",
      status: "unknown",
      species: "Humanoid",
      type: "Fish-Person",
      gender: "Male",
      origin: { name: "unknown", url: "" },
      location: {
        name: "Citadel of Ricks",
        url: "https://rickandmortyapi.com/api/location/3",
      },
      image:
        "https://rickandmortyapi.com/api/character/avatar/22.jpeg",
      episode: [
        "https://rickandmortyapi.com/api/episode/10",
        "https://rickandmortyapi.com/api/episode/22",
        "https://rickandmortyapi.com/api/episode/28",
      ],
      url: "https://rickandmortyapi.com/api/character/22",
      created: "2017-11-04T22:41:07.171Z",
    },
  ],
}

const characters = {
  annie,
  attila,
  aqua
}


export {
  characters
}

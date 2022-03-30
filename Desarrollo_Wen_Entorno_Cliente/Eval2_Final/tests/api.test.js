/**
 * @jest-environment jsdom
 */

//const fs = require("fs"); //importa módulo js para manejo ficheros
//const HTML = fs.readFileSync("./src/index/index.html");
//const { makePetition } = require("../src/index/module_index");
//const { makePetition, getUrl } = require("../src/common/module_petitions");
// const fetch = require("node-fetch"); ////corchetes??????????
// jest.mock("node-fetch"); //Simula consultas fetch


/*
fetch exists on the global object, usually window in the browser. 
Before the test, we want to replace the real fetch with the fake/stub one:*/
//jest.spyOn(global, "fetch").mockImplementation(setupFetchStub(fakeData));
/*
Then at the end of the test, we want to make sure we undo that action
so that any other test that may need to real/native fetch implementation in tact, has it to use.
*/
//global.fetch.mockClear()


// const {
//   invalidLoginResponse,
//   loginResponse,
//   playerIdResponse,
//   playerGamesResponse,
//   gameInfoResponse,
//   movementsResponse,
// } = require("./mock_module.test");

// describe("makePetition", () => {

//   it("fetchs the URL", async() => {

//     const url = "https://dwec-tres-en-raya.herokuapp.com/login";
//     const petitionOptions = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ username: "player1", password: "pass1" }),
//     };

//     const mockResponse = {
//       status: 200,
//       json: () => {
//         return loginResponse;
//       },
//     };

//     jest.spyOn(global, "fetch").mockImplementation(setupFetchStub(mockResponse));
    
//     let response=await makePetition(url, petitionOptions);
//     console.log(response);
   
//     expect (response).toBe(loginResponse);
//     global.fetch.mockClear();

//   });




  // it("fetchs the URL", () => {
  //   const url = "https://dwec-tres-en-raya.herokuapp.com/login";
  //   const petitionOptions = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ username: "player1", password: "pass1" }),
  //   };

  //   const mockResponse = {
  //     status: 200,
  //     json: () => {
  //       return loginResponse;
  //     },
  //   };

  //   fetch.mockResolvedValueOnce(mockResponse);

  //   makePetition(url, petitionOptions).then((data) => {
  //     expect(data.player_id).toBe(311);
  //   });
  // });

  // it("returns the json data", () => {
  //   const url = "https://dwec-tres-en-raya.herokuapp.com/login";
  //   const petitionOptions = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ username: "player1", password: "pass1" }),
  //   };

  //   const mockResponse = {
  //     status: 200,
  //     json: () => {
  //       return loginResponse;
  //     },
  //   };

  //   fetch.mockResolvedValueOnce(mockResponse);
  //   makePetition(url, petitionOptions).then((data) => {
  //     expect(data).toMatchObject(loginResponse);
  //   });
  // });

  // it("includes the authorization token", () => {
  //   const url = "https://dwec-tres-en-raya.herokuapp.com/login";
  //   const petitionOptions = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ username: "player1", password: "pass1" }),
  //   };

  //   const mockResponse = {
  //     status: 200,
  //     json: () => {
  //       return loginResponse;
  //     },
  //   };

  //   fetch.mockResolvedValueOnce(mockResponse);
  //   makePetition(url, petitionOptions).then((data) => {
  //     expect(data.access_token).toBe(
  //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzExLCJpYXQiOjE2NDQ4MzU2MjgsImV4cCI6MTY0NDgzNTkyOH0.ZakDcw2U8uuMgPs5TVR4MmArB65Rwr43GvZzOerk-Zw"
  //     );
  //   });
  // });

  // describe("when the api returns an error", () => {
  //   it("returns the error", async () => {
  //     const url = "https://dwec-tres-en-raya.herokuapp.com/login";
  //     const petitionOptions = {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: { username: "player1", password: "pass1" },//wrong format
  //     };

  //     const mockResponse = {
  //       status: 400,
  //       json: () => {
  //         return invalidJSON;
  //       },
  //     };

  //     fetch.mockResolvedValueOnce(mockResponse);
  //     makePetition(url, petitionOptions)
  //       //   .then((data) => {})  Omito then ya que no entra
  //       .catch((error) => {
  //         expect(error).toBe(400);
  //       });
  //   });
  // });

  // describe("when the API returns 401", () => {
  //   it("redirects to login", () => {
  //     const url = "https://dwec-tres-en-raya.herokuapp.com/login";
  //     const petitionOptions = {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ username: "player1", password: "wrongPass" }),
  //     };

  //     const mockResponse = {
  //       status: 401,
  //       json: () => {
  //         return invalidLoginResponse;
  //       },
  //     };

  //     fetch.mockResolvedValueOnce(mockResponse);
  //     makePetition(url, petitionOptions)
  //       .catch((error) => {
  //         //Si no pongo catch falla : thown 403
         
  //         expect(error).toBe(401);

  //         //Recuperar localstorage, y comprobar que se guarda ultima página
  //       });
  //   });
  // });
//});

// const invalidLoginResponse = { error: "Invalid login" };

// const invalidJSON = { error: "Invalid JSON" };

// const loginResponse = {
//   access_token:
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzExLCJpYXQiOjE2NDQ4MzU2MjgsImV4cCI6MTY0NDgzNTkyOH0.ZakDcw2U8uuMgPs5TVR4MmArB65Rwr43GvZzOerk-Zw",
//   token_type: "Bearer",
//   expires_in: 300,
//   player_id: 311,
// };

// const playerIdResponse = {
//   id: 311,
//   username: "player1",
//   name: "Player 1",
// };

// const playerGamesResponse = [51, 260];

// const gameInfoResponse = {
//   player: 311,
//   id: 260,
//   date: "2022-01-08T10:25:43.511Z",
//   result: [
//     [2, 0, 0],
//     [2, 2, 1],
//     [1, 1, 1],
//   ],
//   first_movement:
//     "7724d10c5b5384fea7de16a3ee09849a:286c3303a1f27e33ef8a2b415f6a70e944a12e1f415ae88faa",
// };

// const movementsResponse = {
//   movement: [1, 2],
//   next: "0a42462bff0584349364335882a413de:f01e2d4325f40eeae4e4608f75c0af73d90dae0c5f38bb52c6",
// };
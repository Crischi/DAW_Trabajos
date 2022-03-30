import { characters } from "./fixtures/characters";
import { searchCharacter } from "../src/characters_info";
import fetch from "node-fetch";

jest.mock("node-fetch");

describe("searchCharacter", () => {
  it("gets the character data", async () => {
    const mockResponse = {
      status: 200,
      json: () => {
        return characters.aqua;
      },
    };
    fetch.mockResolvedValueOnce(mockResponse);
    const characterData = await searchCharacter("morty");
    return expect(characterData.name).toBe("Aqua Morty");
  });

  describe("when there are more than one characters", () => {
    it("gets the first one", async () => {
      const mockResponse = {
        status: 200,
        json: () => {
          return characters.aqua;
        },
      };
      fetch.mockResolvedValueOnce(mockResponse);
      const characterData = await searchCharacter("aqua");
      expect(characterData.name).toBe("Aqua Morty");
    });

    it("gets the first one", async () => {
      const mockResponse = {
        status: 200,
        json: () => {
          return characters.aqua;
        },
      };
      fetch.mockResolvedValueOnce(mockResponse);
      const characterData = await searchCharacter("aqua");
      expect(characterData).toEqual(characters.annie);
    });
  });

  describe("when there is an HTTP error", () => {
    it("returns a rejected promise with the error", async () => {
      const mockResponse = {
        status: 201,
        json: () => {
          return "" ;
        },
      };
      fetch.mockResolvedValueOnce(mockResponse);
      const characterData = searchCharacter("");
      return expect(characterData).rejects.toBe("Error: 201");
    });
  });

  describe("when no data is found", () => {
    it('returns "personaje no encontrado"', async () => {
      const mockResponse = {
        status: 404,
        json: () => {
          return { error: "There is nothing here" };
        },
      };
      fetch.mockResolvedValueOnce(mockResponse);
      const characterData = searchCharacter("Cris");
      return expect(characterData).rejects.toBe("personaje no encontrado");
    });
  });
});

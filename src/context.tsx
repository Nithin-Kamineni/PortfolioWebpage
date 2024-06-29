/* eslint-disable */
import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  FC,
} from "react";
import axios, { AxiosResponse, AxiosError } from "axios";
import { DnDCharacter } from "./dnd-character-sheets/dist";

import { CharacterData, SheetData } from "./pages/DND/dnd-modals";
import { gapi } from "gapi-script";

// initial state
const initialState = {
  character: {} as DnDCharacter,
  setCharacter: (character: DnDCharacter) => {},
  updateCharacter: (character: DnDCharacter) => {},
  pets: [{}] as DnDCharacter[],
  updatePets: (character: DnDCharacter, index: number) => {},
  charactersData: [] as CharacterData[],
  petsData: [] as CharacterData[],
  characterIndex: -1,
  setcharacterIndex: (characterIndex: number) => {},
  ispetIndexes: [],
  setIspetIndexes: (ispetIndexes: Boolean[]) => {},

  ispetFavoriteIndexes: [],
  setIspetFavoriteIndexes: (ispetIndexes: Boolean[]) => {},
  isCharacterFavoriteIndexes: [],
  setIsCharacterFavoriteIndexes: (ispetIndexes: Boolean[]) => {},
};

// Define the context type
interface ParametersContextType {
  character: DnDCharacter;
  setCharacter: (character: DnDCharacter) => void;
  updateCharacter: (character: DnDCharacter) => void;
  pets: DnDCharacter[];
  updatePets: (character: DnDCharacter, index: number) => void;
  charactersData: CharacterData[];
  petsData: CharacterData[];
  characterIndex: number;
  setcharacterIndex: (characterIndex: number) => void;
  ispetIndexes: boolean[];
  setIspetIndexes: (ispetIndexes: boolean[]) => void;

  ispetFavoriteIndexes: boolean[];
  setIspetFavoriteIndexes: (ispetIndexes: boolean[]) => void;
  isCharacterFavoriteIndexes: boolean[];
  setIsCharacterFavoriteIndexes: (ispetIndexes: boolean[]) => void;
}

// Load the default character from localStorage
function loadDefaultCharacter(): DnDCharacter {
  let character: DnDCharacter = {};
  const lsData = localStorage.getItem("dnd-character-data");
  if (lsData) {
    try {
      character = JSON.parse(lsData);
    } catch {
      // Handle parsing error if necessary
    }
  }
  return character;
}

// ==============================|| CONFIG CONTEXT & PROVIDER ||============================== //

// Create the context with the initial state
const ParametersContext = createContext<ParametersContextType>(initialState);

// Define the props type for the provider component
interface ParamProviderProps {
  children: ReactNode;
}

// Provider component
const ParamProvider: FC<ParamProviderProps> = (props) => {
  const [charactersData, setCharactersData] = useState<CharacterData[]>([]);
  const [petsData, setPetsData] = useState<CharacterData[]>([]);
  const [characterIndex, setcharacterIndex] = useState<number>(-1);
  const [ispetIndexes, setIspetIndexes] = useState<boolean[]>([]);
  const [ispetFavoriteIndexes, setIspetFavoriteIndexes] = useState<boolean[]>(
    []
  );
  const [isCharacterFavoriteIndexes, setIsCharacterFavoriteIndexes] = useState<
    boolean[]
  >([]);

  const [character, setCharacter] = useState<DnDCharacter>(
    loadDefaultCharacter()
  );

  const updateCharacter = (character: DnDCharacter) => {
    setCharacter(character);
    localStorage.setItem("dnd-character-data", JSON.stringify(character));
  };

  const [pets, setPets] = useState<DnDCharacter[]>([
    loadDefaultCharacter(),
    loadDefaultCharacter(),
  ]);

  const [petsNum, setPetsNum] = useState<number[]>([0, 1]);

  const updatePets = (pet: DnDCharacter, index: number) => {
    let tempPets = [...pets];
    tempPets[index] = pet;
    setPets(tempPets);
    localStorage.setItem("dnd-pets-data", JSON.stringify(tempPets));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'YOUR_GOOGLE_SHEET_ID' with your actual Google Sheet ID
        const sheetId = "1okeYwSDDPN7HjV34rtdTBSAhzhcIYHNOCEkgRbg-JuI";

        // Replace 'YOUR_GOOGLE_SHEET_API_KEY' with your actual Google Sheet API Key
        const apiKey = "AIzaSyAOhYDUZDOfwTjRLzb722jYmzz8toIDSP8";

        //Sheet and range
        const range = "Sheet1!A1:K16";

        // Make a GET request to the API endpoint
        const response: AxiosResponse<any> = await axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`
        );

        // Access the data from the response
        const responseData = response.data;

        // Now you can work with the data
        console.log("Data recieved from API...");

        console.log("responseData", responseData.values);

        let tempCharacters = [];
        let tempPets = [];
        let tempIsPetsActive: boolean[] = [];
        let tempCharactersActive = -1;
        let tempIsPetsFavActive: boolean[] = [];
        let tempIsCharFavActive: boolean[] = [];

        for (let i = 1; i < responseData.values.length; i++) {
          let [
            SNo,
            Type,
            Setting,
            LastUsed,
            LastEdited,
            Bookmark,
            Use,
            imageUrl,
            JsonData,
          ]: string[] = responseData.values[i];

          const Data: DnDCharacter = JSON.parse(JsonData);

          const characterData: CharacterData = {
            Name: Data.name,
            ClassLevel: Data.classLevel,
            ImageUrl: imageUrl,
            Setting: Setting,
            Use: Use,
            LastUsed: LastUsed,
            LastEdited: LastEdited,
            Bookmark: Bookmark,
            Data: Data,
          };

          if (Type === "Player") {
            if (Use === "1") {
              tempCharactersActive = tempCharacters.length;
            }
            tempIsCharFavActive.push(Bookmark === "1");
            tempCharacters.push(characterData);
          } else if (Type === "Pet") {
            tempIsPetsActive.push(Use === "1");
            tempIsPetsFavActive.push(Bookmark === "1");
            tempPets.push(characterData);
          }
        }

        setIsCharacterFavoriteIndexes(tempIsCharFavActive);
        setIspetFavoriteIndexes(tempIsPetsFavActive);
        setcharacterIndex(tempCharactersActive);
        setIspetIndexes(tempIsPetsActive);
        setCharactersData(tempCharacters);
        setPetsData(tempPets);
      } catch (error) {
        console.error("Error fetching data from Google Sheet:", error);
      }
    };

    fetchData();
  }, []);

  //Update the values in the excel sheet
  useEffect(() => {
    const updateSheetData = async () => {
      try {
        // Replace 'YOUR_GOOGLE_SHEET_ID' with your actual Google Sheet ID
        const sheetId = "1okeYwSDDPN7HjV34rtdTBSAhzhcIYHNOCEkgRbg-JuI";

        // Replace 'YOUR_GOOGLE_SHEET_API_KEY' with your actual Google Sheet API Key
        const apiKey = "AIzaSyAOhYDUZDOfwTjRLzb722jYmzz8toIDSP8";

        //Sheet and range
        const range = "Sheet1!A2:K16";

        // Prepare data to be updated
        const values = [];

        // Add character data to the values array
        for (let index = 0; index < charactersData.length; index++) {
          const character = charactersData[index];
          values.push([
            index + 1,
            "Player",
            character.Setting,
            character.LastUsed,
            character.LastEdited,
            isCharacterFavoriteIndexes[index] ? "1" : "0",
            characterIndex === index ? "1" : "0", // Assuming Use is "1" for the active character
            character.ImageUrl,
            JSON.stringify(character.Data),
          ]);
        }

        // Add pet data to the values array
        for (let index = 0; index < petsData.length; index++) {
          const pet = petsData[index];
          values.push([
            charactersData.length + index + 1,
            "Pet",
            pet.Setting,
            pet.LastUsed,
            pet.LastEdited,
            ispetFavoriteIndexes[index] ? "1" : "0",
            ispetIndexes[index] ? "1" : "0",
            pet.ImageUrl,
            JSON.stringify(pet.Data),
          ]);
        }

        const body = {
          values,
        };

        console.log("Updating the excel sheet");
        // Make a PUT request to the API endpoint to update the sheet
        await axios.put(
          `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}&valueInputOption=RAW`,
          body
        );

        console.log("Sheet data updated successfully.");
      } catch (error) {
        console.error("Error updating data to Google Sheet:", error);
      }
    };

    updateSheetData();
  }, [
    characterIndex,
    ispetIndexes,
    ispetFavoriteIndexes,
    isCharacterFavoriteIndexes,
    charactersData,
    petsData,
  ]);

  // Updating what charactrs must be used
  useEffect(() => {
    if (charactersData[characterIndex]) {
      updateCharacter(charactersData[characterIndex].Data);
    }
  }, [characterIndex]);

  // reverse updating character sheet to react varibles
  useEffect(() => {
    let tempcharactersData = [...charactersData];
    if (
      characterIndex < tempcharactersData.length &&
      tempcharactersData[characterIndex]
    ) {
      tempcharactersData[characterIndex].Data = character;
    }
    setCharactersData(tempcharactersData);
  }, [character]);

  // Updating what pets must be used
  useEffect(() => {
    let tempPets: DnDCharacter[] = [];
    let tempPetsNum: number[] = [];
    for (let i = 0; i < ispetIndexes.length; i++) {
      if (ispetIndexes[i] === true) {
        tempPets.push(petsData[i].Data);
        tempPetsNum.push(i);
      }
    }
    setPets(tempPets);
    setPetsNum(tempPetsNum);

    localStorage.setItem("dnd-pets-data", JSON.stringify(tempPets));
  }, [ispetIndexes]);

  // reverse updating pet sheets to react varibles
  useEffect(() => {
    let temppetsData = [...petsData];

    if (Math.max(...petsNum) < temppetsData.length) {
      for (let i = 0; i < petsNum.length; i++) {
        temppetsData[petsNum[i]].Data = pets[i];
      }
    }

    setPetsData(temppetsData);
  }, [pets]);

  const contextValue: ParametersContextType = {
    character: character,
    setCharacter: setCharacter,
    updateCharacter: updateCharacter,
    pets: pets,
    updatePets: updatePets,
    charactersData: charactersData,
    petsData: petsData,
    characterIndex,
    setcharacterIndex,
    ispetIndexes,
    setIspetIndexes,
    ispetFavoriteIndexes,
    setIspetFavoriteIndexes,
    isCharacterFavoriteIndexes,
    setIsCharacterFavoriteIndexes,
  };

  return (
    <ParametersContext.Provider value={contextValue}>
      {props.children}
    </ParametersContext.Provider>
  );
};

export { ParamProvider, ParametersContext };

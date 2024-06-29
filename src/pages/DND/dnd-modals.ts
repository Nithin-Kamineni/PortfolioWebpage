
import {
    DnDCharacter,
  } from "../../dnd-character-sheets";

// Define the interface for characters and pets
export interface CharacterData {
  Name: string | undefined;
  ClassLevel: string | undefined;
  ImageUrl: string;
  Setting: string;
  Use: string;
  LastUsed: string;
  LastEdited: string;
  Bookmark: string;
  Data: DnDCharacter;
}

// Define the interface for the sheet data
export interface SheetData {
    SNo: string;
    EntityID: string;
    Type: string;
    Setting: string;
    LastUsed: string;
    LastEdited: string;
    Bookmark: string;
    Use: string;
    Versions: string;
    imageUrl: string;
    JsonData: string;
  }
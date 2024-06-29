import React, { useContext } from "react";
import {
  ChakraProvider,
  Container,
  SimpleGrid,
  Divider,
  Box,
  Button,
  Flex,
  IconButton,
  Select,
  Checkbox,
  Image,
  HStack,
} from "@chakra-ui/react";
import { EditIcon, StarIcon } from "@chakra-ui/icons";
// import styles from "./dnd.module.scss";

import {
  DnDCharacterStatsSheet,
  DnDCharacterSpellSheet,
  DnDPetStatsSheet,
  DnDCharacter,
} from "../../dnd-character-sheets";
import "../../dnd-character-sheets/dist/index.css";
import { Routes, Route, Navigate, Outlet, Link } from "react-router-dom";
import { ParametersContext } from "../../context";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Badge,
} from "@chakra-ui/react";

import { CharacterData } from "./dnd-modals";

function Navbar() {
  return (
    <Flex as="nav" bg="gray.800" color="white" padding="1rem">
      <Button
        as={Link}
        to="/dnd/all"
        colorScheme="teal"
        variant="ghost"
        margin="0 1rem"
      >
        All
      </Button>
      <Button
        as={Link}
        to="/dnd/character"
        colorScheme="teal"
        variant="ghost"
        margin="0 1rem"
      >
        Character Sheet
      </Button>
      <Button
        as={Link}
        to="/dnd/spells"
        colorScheme="teal"
        variant="ghost"
        margin="0 1rem"
      >
        Spell Sheet
      </Button>
      <Button
        as={Link}
        to="/dnd/pets"
        colorScheme="teal"
        variant="ghost"
        margin="0 1rem"
      >
        Pets Sheet
      </Button>
      <Button
        as={Link}
        to="/dnd/character-selection"
        colorScheme="teal"
        variant="ghost"
        margin="0 1rem"
      >
        Character Selection
      </Button>
      <Button
        as={Link}
        to="/dnd/pets-selection"
        colorScheme="teal"
        variant="ghost"
        margin="0 1rem"
      >
        Pets Selection
      </Button>
      <Button
        as={Link}
        to="/dnd/dice"
        colorScheme="teal"
        variant="ghost"
        margin="0 1rem"
      >
        Dice
      </Button>
    </Flex>
  );
}

function AllSheets() {
  const { character, updateCharacter, pets, updatePets } =
    useContext(ParametersContext);
  return (
    <SimpleGrid columns={{ base: 1, xl: 2 }} spacing={1} minChildWidth="1800px">
      <CharacterSheet />
      <Divider variant={"solid"} colorScheme={"blackAlpha"} size={"lg"} />
      <SpellSheet />
      <Divider variant={"solid"} colorScheme={"blackAlpha"} size={"lg"} />
      <PetsSheet />
    </SimpleGrid>
  );
}

function CharacterSheet() {
  const { character, updateCharacter } = useContext(ParametersContext);
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <DnDCharacterStatsSheet
        character={character}
        onCharacterChanged={updateCharacter}
      />
    </>
  );
}

function SpellSheet() {
  const { character, updateCharacter } = useContext(ParametersContext);
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <DnDCharacterSpellSheet
        character={character}
        onCharacterChanged={updateCharacter}
      />
    </>
  );
}

function PetsSheet() {
  const { character, updateCharacter, pets, updatePets } =
    useContext(ParametersContext);
  return (
    <>
      <Flex direction="row" width="100%" justifyContent="space-between">
        {pets.map((pet, index) => (
          <>
            {/* @ts-expect-error Server Component */}
            <DnDPetStatsSheet
              character={pet}
              onCharacterChanged={(pet) => updatePets(pet, index)}
            />
          </>
        ))}
      </Flex>
    </>
  );
}

function AllCharacters() {
  const {
    charactersData,
    characterIndex,
    setcharacterIndex,
    ispetIndexes,
    setIspetIndexes,
    ispetFavoriteIndexes,
    setIspetFavoriteIndexes,
    isCharacterFavoriteIndexes,
    setIsCharacterFavoriteIndexes,
  } = useContext(ParametersContext);

  console.log("characterData", charactersData);
  return (
    <TableContainer>
      <Table variant="striped" colorScheme="teal">
        <TableCaption>
          Select a character to populate character sheet
        </TableCaption>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Class & Level</Th>
            <Th>Image</Th>
            <Th>Setting</Th>
            <Th>Use</Th>
            <Th>Last Used</Th>
            <Th>Last edited</Th>
            <Th>Bookmark</Th>
            <Th>Edit</Th>
          </Tr>
        </Thead>
        <Tbody>
          {charactersData.map((characterData: CharacterData, index: any) => {
            return (
              <Tr>
                <Td>{characterData.Name}</Td>
                <Td>
                  <HStack spacing={3}>
                    <Badge variant="solid" colorScheme="yellow">
                      {characterData.ClassLevel?.split(" ")[0]}
                    </Badge>
                    <Box>
                      <h4>{characterData.ClassLevel?.split(" ")[1]}</h4>
                    </Box>
                  </HStack>
                </Td>
                <Td>
                  <Image
                    borderRadius="full"
                    boxSize="65px"
                    src={characterData.ImageUrl}
                    alt="Dan Abramov"
                  />
                </Td>
                <Td>{characterData.Setting}</Td>
                <Td>
                  <Button
                    colorScheme={characterIndex === index ? "yellow" : "blue"}
                    size="md"
                    onClick={() => {
                      if (characterIndex === index) {
                        setcharacterIndex(-1);
                      } else {
                        setcharacterIndex(index);
                      }
                    }}
                  >
                    {characterIndex === index ? "In Use" : "Use"}
                  </Button>
                </Td>
                <Td>{characterData.LastUsed}</Td>
                <Td>{characterData.LastEdited}</Td>
                <Td>
                  <IconButton
                    isRound={true}
                    variant="outline"
                    colorScheme={
                      isCharacterFavoriteIndexes[index] == true
                        ? "yellow"
                        : "black"
                    }
                    aria-label="Done"
                    fontSize="20px"
                    icon={<StarIcon />}
                    onClick={() => {
                      let result = isCharacterFavoriteIndexes[index] !== true;
                      let tempIsCharFavIndexes = [
                        ...isCharacterFavoriteIndexes,
                      ];

                      tempIsCharFavIndexes[index] = result;

                      setIsCharacterFavoriteIndexes(tempIsCharFavIndexes);
                    }}
                  />
                </Td>
                <Td>
                  <IconButton
                    isRound={true}
                    variant="solid"
                    colorScheme="teal"
                    aria-label="Done"
                    fontSize="20px"
                    icon={<EditIcon />}
                  />
                </Td>
              </Tr>
            );
          })}
        </Tbody>
        {/* <Tfoot>
          <Tr>
            <Th>Name</Th>
            <Th>Class & Level</Th>
            <Th>Image</Th>
            <Th>Setting</Th>
            <Th>Use</Th>
            <Th>Last Used</Th>
            <Th>Last edited</Th>
            <Th>Bookmark</Th>
            <Th>Edit</Th>
          </Tr>
        </Tfoot> */}
      </Table>
    </TableContainer>
  );
}

function AllPets() {
  const {
    charactersData,
    petsData,
    ispetIndexes,
    setIspetIndexes,
    ispetFavoriteIndexes,
    setIspetFavoriteIndexes,
    isCharacterFavoriteIndexes,
    setIsCharacterFavoriteIndexes,
  } = useContext(ParametersContext);
  return (
    <TableContainer>
      <Table variant="striped" colorScheme="teal">
        <TableCaption>
          Select max 4 pets to populate the pets sheet
        </TableCaption>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Class & Level</Th>
            <Th>Image</Th>
            <Th>Setting</Th>
            <Th>Use</Th>
            <Th>Last Used</Th>
            <Th>Last edited</Th>
            <Th>Bookmark</Th>
            <Th>Edit</Th>
          </Tr>
        </Thead>
        <Tbody>
          {petsData.map((characterData: CharacterData, index: any) => {
            return (
              <Tr>
                <Td>{characterData.Name}</Td>
                <Td>
                  <HStack spacing={3}>
                    <Badge variant="solid" colorScheme="yellow">
                      {characterData.ClassLevel?.split(" ")[0]}
                    </Badge>
                    <Box>
                      <h4>{characterData.ClassLevel?.split(" ")[1]}</h4>
                    </Box>
                  </HStack>
                </Td>
                <Td>
                  <Image
                    borderRadius="full"
                    boxSize="65px"
                    src={characterData.ImageUrl}
                    alt="Dan Abramov"
                  />
                </Td>
                <Td>{characterData.Setting}</Td>
                <Td>
                  {/* {characterData.Use == "0" ? "blue" : "yellow"} */}
                  <Checkbox
                    value="naruto"
                    size="lg"
                    isInvalid
                    isChecked={ispetIndexes[index]}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      if (
                        !e.target.checked ||
                        ispetIndexes.filter((boolValue) => boolValue === true)
                          .length < 4
                      ) {
                        let tempIspetIndexes = [...ispetIndexes];
                        tempIspetIndexes[index] = e.target.checked;
                        setIspetIndexes(tempIspetIndexes);
                      }
                    }}
                  />
                </Td>
                <Td>{characterData.LastUsed}</Td>
                <Td>{characterData.LastEdited}</Td>
                <Td>
                  <IconButton
                    isRound={true}
                    variant="outline"
                    colorScheme={
                      ispetFavoriteIndexes[index] === true ? "yellow" : "black"
                    }
                    aria-label="Done"
                    fontSize="20px"
                    icon={<StarIcon />}
                    onClick={() => {
                      let result = ispetFavoriteIndexes[index] !== true;
                      let tempIspetFavIndexes = [...ispetFavoriteIndexes];

                      tempIspetFavIndexes[index] = result;
                      setIspetFavoriteIndexes(tempIspetFavIndexes);
                    }}
                  />
                </Td>
                <Td>
                  <IconButton
                    isRound={true}
                    variant="solid"
                    colorScheme="teal"
                    aria-label="Done"
                    fontSize="20px"
                    icon={<EditIcon />}
                  />
                </Td>
              </Tr>
            );
          })}
        </Tbody>
        {/* <Tfoot>
          <Tr>
            <Th>Name</Th>
            <Th>Class</Th>
            <Th isNumeric>Level</Th>
            <Th>Setting</Th>
            <Th>Use</Th>
            <Th>Edit</Th>
            <Th>Last Used</Th>
            <Th>Last edited</Th>
            <Th>Image</Th>
          </Tr>
        </Tfoot> */}
      </Table>
    </TableContainer>
  );
}

export default function DND() {
  const { character, updateCharacter } = useContext(ParametersContext);
  return (
    <ChakraProvider>
      <br />
      <br />
      <br />

      <Navbar />
      <Routes>
        <Route path="all" element={<AllSheets />} />
        <Route path="/" element={<AllCharacters />} />
        <Route path="character" element={<CharacterSheet />} />
        <Route path="spells" element={<SpellSheet />} />
        <Route path="pets" element={<PetsSheet />} />
        <Route path="character-selection" element={<AllCharacters />} />
        <Route path="pets-selection" element={<AllPets />} />
        <Route path="dice" element={<SpellSheet />} />
      </Routes>
    </ChakraProvider>
  );
}

import React, { useState } from "react";
import { Navbar2 } from "../../components/Navbar/navbar";
import { BsBarChart } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { Outlet } from "react-router-dom";
import {
  SidenavProvider,
  SidenavContainer,
  SidenavItem,
  Sidenav,
} from "../../components/sidenav";
import Sidebar from "../../components/Sidebar";
import { Text } from "@chakra-ui/layout";
import { FlashcardArray } from "react-quizlet-flashcard";

import BottomNav from "../../components/flashcards/BottomNav";
import FlashCard from "../../features/flashcard/FlashCard";
import CreateFlashCard from "../../features/flashcard/CreateFlashCard";

import { Grid } from "@material-ui/core";
import { Center } from "../../components/flashcards/Center";
import { Provider } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import SendIcon from "@mui/icons-material/Send";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import store from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios, { AxiosResponse, AxiosError } from "axios";

interface FlashCardType {
  id: number;
  StackID: string;
  front: {
    title: string;
    content: string;
  };
  back: {
    title: string;
    content: string;
  };
  Flag: boolean;
}

type RawData = {
  range: string;
  majorDimension: string;
  values: any[][];
  // Add other properties if necessary
};

export default function FlashCards() {
  const { flashcardsStackId } = useParams();

  const [data, setData] = React.useState<RawData | null>(null);

  const [flashcards, setFlashcards] = React.useState<FlashCardType[]>();

  // const cards = [
  //   {
  //     // State is an Array of Flashcards With a Front and Back. The id is the array index
  //     id: 0,
  //     front: {
  //       title: "Question 1",
  //       content: "What is Redux Toolkit? (click anywhere on the card to flip)",
  //     },
  //     back: {
  //       title: `${flashcardsStackId} que`,
  //       content:
  //         "Redux Toolkit is the official, opinionated, batteries-included toolset for efficient Redux development and is intended to be the standard way to write Redux logic.",
  //     },
  //   },
  //   {
  //     // State is an Array of Flashcards With a Front and Back. The id is the array index
  //     id: 1,
  //     front: {
  //       title: "About This Project",
  //       content:
  //         "This project was built with React, React-Router, Redux, Redux Toolkit, React-Redux & a Custom Designed MaterialUI Theme",
  //     },
  //     back: {
  //       title: "More info",
  //       content:
  //         "Click the GitHub icon in the top right of the screen to view the source code!",
  //     },
  //   },
  // ];

  const [current, setCurrent] = useState(0);
  const handelCurrent = (changeCurrent: number) => {
    if (flashcards !== undefined) {
      if (current < changeCurrent && current < flashcards.length - 1) {
        setCurrent(changeCurrent);
      } else if (current > changeCurrent && current > 0) {
        setCurrent(changeCurrent);
      }
    }
  };

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'YOUR_GOOGLE_SHEET_ID' with your actual Google Sheet ID
        const sheetId = "1M0cn1viQIYM4bcEWtT8D9-PkyUxE0uJaI9R3fhOG9GY";

        // Replace 'YOUR_GOOGLE_SHEET_API_KEY' with your actual Google Sheet API Key
        const apiKey = "AIzaSyAOhYDUZDOfwTjRLzb722jYmzz8toIDSP8";

        //Sheet and range
        const range = "Terms!A1:P450";

        // Make a GET request to the API endpoint
        const response: AxiosResponse<any> = await axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`
        );

        // Access the data from the response
        const responseData = response.data;

        // Now you can work with the data
        console.log("Data recieved from API...");

        console.log(responseData);
        setData(responseData);
      } catch (error) {
        console.error("Error fetching data from Google Sheet:", error);
      }
    };

    fetchData();
  }, []);

  React.useEffect(() => {
    try {
      console.log("try block0");
      console.log(data);
      if (data !== null) {
        console.log("try block1");

        let rawData: RawData = data;
        const headers = rawData?.values[0];
        const transformedData: FlashCardType[] = [];
        for (let i = 1; i < rawData.values.length; i++) {
          const row = rawData.values[i];
          console.log(row[headers.indexOf("Solution(optional)")]);
          const problem: FlashCardType = {
            id: row[headers.indexOf("S.Index")],
            StackID: row[headers.indexOf("StackID")],
            front: {
              title: row[headers.indexOf("FrontTitle")],
              content: row[headers.indexOf("FrontContent")],
            },
            back: {
              title: row[headers.indexOf("BackTitle")],
              content: row[headers.indexOf("BackContent")],
            },
            Flag: row[headers.indexOf("Flag")],
          };

          transformedData.push(problem);
        }
        console.log("try block2");

        setFlashcards(transformedData);
      }
    } catch (error) {
      console.error(
        "Error in Formating data recived from Google Sheet:",
        error
      );
    }
  }, [data]);

  const navigate = useNavigate();

  return flashcards === undefined ? (
    <>Loading...</>
  ) : (
    <>
      <>
        <br />
        <br />
        <br />
        <Sidebar>
          <br />
          <br />
          <br />
          <IconButton
            aria-label="share"
            onClick={() => {
              navigate(`/flashcards`);
            }}
          >
            <ArrowBackIcon style={{ color: "black" }} />
          </IconButton>
          <Center style={{ marginTop: "-120px" }}>
            <Grid item xs={10} sm={8} md={6} xl={4}>
              <FlashCard
                id={current}
                front={flashcards[current].front}
                back={flashcards[current].back}
              />
            </Grid>
          </Center>
          <BottomNav
            nextCard={() => handelCurrent(current + 1)}
            prevCard={() => handelCurrent(current - 1)}
          />

          {/* <CreateFlashCard />
        <BottomNav /> */}
        </Sidebar>
      </>
    </>
  );
}

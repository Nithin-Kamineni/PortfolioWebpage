import React, { useState } from "react";
import { Navbar2 } from "../../components/Navbar/navbar";
import { BsBarChart } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
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
import CardLayout from "./CardLayout";
import { makeStyles } from "@material-ui/styles";
import axios, { AxiosResponse, AxiosError } from "axios";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "20px",
    paddingRight: "20px",
  },
});

interface Stack {
  stackIndex: number;
  title: string;
  lastSeenDate: string;
  image: string;
  imagetitle: string;
  description: string;
  liked: boolean;
  extraData: string[];
}

type RawData = {
  range: string;
  majorDimension: string;
  values: any[][];
  // Add other properties if necessary
};

export default function FlashCardsDashboard() {
  const classes = useStyles();

  const [data, setData] = React.useState<RawData | null>(null);

  const [stacks, setStacks] = React.useState<Stack[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'YOUR_GOOGLE_SHEET_ID' with your actual Google Sheet ID
        // const sheetId = "15vIoYymBaBoRtd784ik945i0dLWaK9baSleQsgGcyQw";
        const sheetId = "1M0cn1viQIYM4bcEWtT8D9-PkyUxE0uJaI9R3fhOG9GY";

        // Replace 'YOUR_GOOGLE_SHEET_API_KEY' with your actual Google Sheet API Key
        const apiKey = "AIzaSyAOhYDUZDOfwTjRLzb722jYmzz8toIDSP8";

        //Sheet and range
        const range = "Stacks!A1:P450";

        // Make a GET request to the API endpoint
        const response: AxiosResponse<any> = await axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`
        );

        // Access the data from the response
        const responseData = response.data;

        // Now you can work with the data
        // console.log("Data recieved from API...");

        // console.log(responseData);
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
        const transformedData: Stack[] = [];
        for (let i = 1; i < rawData.values.length; i++) {
          const row = rawData.values[i];
          console.log(row[headers.indexOf("Solution(optional)")]);
          const problem: Stack = {
            stackIndex: row[headers.indexOf("S.Index")],
            title: row[headers.indexOf("Title")],
            lastSeenDate: row[headers.indexOf("lastSeenDate")],
            image: row[headers.indexOf("Image")],
            imagetitle: row[headers.indexOf("ImageTitle")],
            description: row[headers.indexOf("Description")],
            liked: row[headers.indexOf("Liked")],
            extraData: row[headers.indexOf("ExtraData")].split(","),
          };

          transformedData.push(problem);
        }
        console.log("try block2");

        setStacks(transformedData);
      }
    } catch (error) {
      console.error(
        "Error in Formating data recived from Google Sheet:",
        error
      );
    }
  }, [data]);

  return (
    <>
      <br />
      <br />
      <br />
      <Sidebar>
        <br />
        <br />
        <br />

        <Grid
          container
          spacing={4}
          className={classes.gridContainer}
          justify="center"
        >
          {stacks.map((stack) => {
            return (
              <Grid item xs={12} sm={6} md={4}>
                <CardLayout value={stack} />
              </Grid>
            );
          })}
        </Grid>
      </Sidebar>
    </>
  );
}

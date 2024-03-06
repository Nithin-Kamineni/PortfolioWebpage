import React, { useMemo } from "react";
import {
  MaterialReactTable,
  type MRT_ColumnDef,
  useMaterialReactTable,
} from "material-react-table";
import { data, Person, RawData } from "./makeData";

import {
  Box,
  Button,
  ListItemIcon,
  MenuItem,
  Typography,
  Stack,
} from "@mui/material";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { useEffect, useState } from "react";
import { GoogleSpreadsheet } from "google-spreadsheet";
import axios, { AxiosResponse, AxiosError } from "axios";
import "./styles.css";
import { ThemeProvider, createTheme } from "@mui/material";
import Sidebar from "../../components/Sidebar";

// const theme = createMuiTheme();

// theme.shadows[24] = theme.shadows[4];

const LC_Dashboard = () => {
  ///////////////////////////////////

  const [data2, setData2] = useState<RawData | null>(null);
  const [data3, setData3] = useState<Person[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'YOUR_GOOGLE_SHEET_ID' with your actual Google Sheet ID
        const sheetId = "15vIoYymBaBoRtd784ik945i0dLWaK9baSleQsgGcyQw";

        // Replace 'YOUR_GOOGLE_SHEET_API_KEY' with your actual Google Sheet API Key
        const apiKey = "AIzaSyAOhYDUZDOfwTjRLzb722jYmzz8toIDSP8";

        //Sheet and range
        const range = "Nithin!A1:P450";

        // Make a GET request to the API endpoint
        const response: AxiosResponse<any> = await axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`
        );

        // Access the data from the response
        const responseData = response.data;

        // Now you can work with the data
        console.log("Data recieved from API...");

        setData2(responseData);
      } catch (error) {
        console.error("Error fetching data from Google Sheet:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    try {
      if (data2 !== null) {
        let rawData: RawData = data2;
        const headers = rawData?.values[0];
        const transformedData: Person[] = [];
        for (let i = 1; i < rawData.values.length; i++) {
          const row = rawData.values[i];
          console.log(row[headers.indexOf("Solution(optional)")]);
          const problem: Person = {
            isActive: true,
            "Problem Number": row[headers.indexOf("Problem Number")],
            "Problem Name": row[headers.indexOf("Problem Name")],
            Type: row[headers.indexOf("Type")],
            Concepts: row[headers.indexOf("Concepts")],
            Status: row[headers.indexOf("Status")],
            "Last Solved": row[headers.indexOf("Last Solved")],
            "How to Solve": row[headers.indexOf("How to solve")],
            Solution: row[headers.indexOf("Solution(optional)")],
            link: row[headers.indexOf("Link(Question)")],
          };

          transformedData.push(problem);
        }
        setData3(transformedData);
        console.log("data3", data3);
      }
    } catch (error) {
      console.error(
        "Error in Formating data recived from Google Sheet:",
        error
      );
    }
  }, [data2]);

  ////////////////////

  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: "Problem Number",
        filterFn: "startsWith", //set filter mode to equals
        // filterVariant: 'multi-select',
        header: "Problem Number",
        // columnFilterModeOptions: ['contains', 'startsWith'],
        size: 50,
      },
      {
        accessorKey: "Problem Name",
        header: "Problem Name",
        filterVariant: "text", // default
        size: 100,
        accessorFn: (row) => row["Problem Name"] + "||" + row["link"],
        Cell: ({ cell }) => (
          <a href={cell.getValue<string>().split("||")[1]}>
            {cell.getValue<string>().split("||")[0]}
          </a>
        ),
      },
      {
        accessorKey: "Type",
        header: "Type",
        filterVariant: "multi-select",
        //no need to specify filterSelectOptions if using faceted values

        Cell: ({ cell }) => (
          <Box
            component="span"
            sx={(theme) => ({
              backgroundColor:
                cell.getValue<string>() == "Hard"
                  ? theme.palette.error.dark
                  : cell.getValue<string>() == "Medium"
                  ? theme.palette.warning.light
                  : theme.palette.success.dark,
              borderRadius: "0.25rem",
              color: "#fff",
              maxWidth: "9ch",
              p: "0.25rem",
            })}
          >
            {cell.getValue<number>()?.toLocaleString?.("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </Box>
        ),
      },
      {
        accessorKey: "Concepts",
        header: "Concepts",
        filterVariant: "multi-select",
        // columnFilterModeOptions: ['contains', 'startsWith'],
        filterSelectOptions: ["Hash Map", "Heap", "Binary search"],
        //no need to specify filterSelectOptions if using faceted values
      },
      {
        accessorKey: "Status",
        header: "Status",
        //no need to specify filterSelectOptions if using faceted values
        Cell: ({ cell }) => (
          <Box
            component="span"
            sx={(theme) => ({
              backgroundColor:
                cell.getValue<number>() == 5
                  ? theme.palette.success.dark
                  : cell.getValue<number>() == 4
                  ? theme.palette.success.light
                  : cell.getValue<number>() == 3
                  ? theme.palette.warning.light
                  : cell.getValue<number>() == 2
                  ? theme.palette.warning.main
                  : cell.getValue<number>() == 1
                  ? theme.palette.error.light
                  : cell.getValue<number>() == 0
                  ? theme.palette.error.dark
                  : theme.palette.secondary.main,
              borderRadius: "0.25rem",
              color: "#fff",
              maxWidth: "9ch",
              p: "0.25rem",
            })}
          >
            {cell.getValue<number>()?.toLocaleString?.("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </Box>
        ),
        filterVariant: "range-slider",
        filterFn: "betweenInclusive", // default (or between)
        muiFilterSliderProps: {
          marks: true,
          max: 5, //custom max (as opposed to faceted max)
          min: 0, //custom min (as opposed to faceted min)
          step: 1,
        },
      },
      {
        header: "Last Solved",
        size: 200,
        accessorFn: (row) => new Date(row["Last Solved"]), //convert to Date for sorting and filtering
        filterVariant: "date",
        filterFn: "between",
        sortingFn: "datetime",
        Cell: ({ cell }) => cell.getValue<Date>()?.toLocaleDateString(), //render Date as a string
        Header: ({ column }) => <em>{column.columnDef.header}</em>, //custom header markup
        muiFilterTextFieldProps: {
          sx: {
            minWidth: "250px",
          },
        },
        //no need to specify filterSelectOptions if using faceted values
      },
      {
        accessorKey: "How to Solve",
        header: "How to Solve",
        filterVariant: "text", // default
        size: 300,
        //no need to specify filterSelectOptions if using faceted values
      },
      {
        accessorKey: "Solution",
        header: "Solution",
        filterVariant: "text", // default
        //no need to specify filterSelectOptions if using faceted values
        Cell: ({ cell }) => (
          <a href={cell.getValue<string>()}>{cell.getValue<string>()}</a>
        ),
      },
    ],
    []
  );

  // return <MaterialReactTable table={table} />;
  // console.log("columns", columns);

  const defaultMaterialTheme = createTheme();

  return (
    <>
      <br />
      <br />
      <br />
      <Sidebar>
        <div style={{ width: "100%", height: "100%" }}>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          <ThemeProvider theme={defaultMaterialTheme}>
            {data3 !== null && (
              <MaterialReactTable
                columns={columns}
                data={data3}
                enableRowSelection
                enableFacetedValues
                enableColumnFilterModes
                initialState={{ showColumnFilters: false }}
                renderDetailPanel={({ row }) => (
                  <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                      }}
                    >
                      <Box sx={{ textAlign: "center" }}>
                        <Typography variant="h4">How to Solve:</Typography>
                        <Typography variant="h5">
                          &quot;{row.original["How to Solve"]}&quot;
                        </Typography>
                      </Box>
                    </Box>
                    {row.original["Solution"] !== undefined && (
                      <iframe
                        src={`https://www.youtube.com/embed/${
                          row.original["Solution"].split("?v=")[1]
                        }?autoplay=0&origin=http://example.com&controls=0&rel=1`}
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        width="40%"
                        height="360"
                        title="video"
                      />
                    )}
                  </Stack>
                )}
              />
            )}
          </ThemeProvider>
        </div>
      </Sidebar>
    </>
  );
};

export default LC_Dashboard;

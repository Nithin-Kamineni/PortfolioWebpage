import React, { useState } from "react";
import { Navbar2 } from "../../components/Navbar/navbar";
import { BsBarChart } from "react-icons/bs";
import { BiMap, BiChalkboard } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { Outlet } from "react-router-dom";
import {
  SidenavProvider,
  SidenavContainer,
  SidenavItem,
  Sidenav,
} from "../../components/sidenav";
import Sidebar from "../../components/Sidebar";
// Chakra imports
import {
  Box,
  Button,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Grid,
  GridItem,
  Icon,
  Progress,
  SimpleGrid,
  Spacer,
  Stack,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { PaperCountdown } from "../../components/PaperCountdown";

export default function Dashboard() {
  return (
    <>
      <br />
      <br />
      <br />
      <Sidebar>
        <PaperCountdown />
      </Sidebar>
    </>
  );
}

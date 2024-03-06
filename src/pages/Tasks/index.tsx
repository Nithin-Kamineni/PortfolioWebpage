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
import { Text } from "@chakra-ui/layout";

export default function TasksDashboard() {
  const navItems: SidenavItem[] = [
    { icon: BsBarChart, label: "Dashboard", to: "" },
    { icon: BiChalkboard, label: "Forecast", to: "forecast" },
    { icon: BiMap, label: "Location", to: "location" },
    { icon: FiSettings, label: "Settings", to: "settings" },
  ];
  return (
    <>
      <br />
      <br />
      <br />
      <Sidebar>
        <br />
        <br />
        <br />
        <iframe
          style={{ marginLeft: "-30px", marginTop: "-20px" }}
          width="103%"
          height="850px"
          // https://docs.google.com/spreadsheets/d/15vIoYymBaBoRtd784ik945i0dLWaK9baSleQsgGcyQw/edit?usp=sharing
          src="https://docs.google.com/document/d/1msFjkF1vrIMAomnFYhMKp68KIAE-MGqDGKuYdroXU0c/edit?usp=sharing?widget=true&amp;headers=false"
        ></iframe>
      </Sidebar>
    </>
  );
}

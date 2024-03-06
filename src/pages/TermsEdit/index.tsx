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

export default function TermsEditDashboard() {
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
          src="https://docs.google.com/spreadsheets/d/1M0cn1viQIYM4bcEWtT8D9-PkyUxE0uJaI9R3fhOG9GY/edit?usp=sharing?widget=true&amp;headers=false"
        ></iframe>
      </Sidebar>
    </>
  );
}

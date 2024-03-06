import { Navbar2 } from "../../components/Navbar/navbar";
import { BsBarChart } from "react-icons/bs";
import { BiMap, BiChalkboard } from "react-icons/bi";
import { TbCards } from "react-icons/tb";
import { BsCardChecklist } from "react-icons/bs";

import { GiArchiveResearch } from "react-icons/gi";
import { SiLeetcode } from "react-icons/si";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { IoNewspaperSharp } from "react-icons/io5";

import { FiSettings } from "react-icons/fi";
import { Outlet } from "react-router-dom";
import {
  SidenavProvider,
  SidenavContainer,
  SidenavItem,
  Sidenav,
} from "../../components/sidenav";
import { Box } from "@chakra-ui/layout";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const navItems: SidenavItem[] = [
    { icon: BsBarChart, label: "Dashboard", to: "/dashboard" },
    { icon: IoNewspaperSharp, label: "Reading-List", to: "/reading-list" },
    { icon: BiChalkboard, label: "Forecast", to: "/forecast" },
    { icon: BsCardChecklist, label: "Tasks", to: "/tasks" },
    { icon: TbCards, label: "flashcards", to: "/flashcards" },
    { icon: BiChalkboard, label: "Courses-progress", to: "/courses-progress" },
    {
      icon: GiArchiveResearch,
      label: "research-roadmap",
      to: "/research-roadmap",
    },
    { icon: SiLeetcode, label: "leetcode", to: "/leetcode" },
    { icon: MdOutlinePeopleAlt, label: "Connections", to: "/connections" },
    { icon: FaCalendarAlt, label: "Calendar", to: "/calendar" },
  ];

  return (
    <>
      <SidenavProvider>
        <SidenavContainer sidenav={<Sidenav navItems={navItems} />}>
          <main>
            <div className="App">
              <Navbar2 />
              <div style={{ marginTop: "-80px" }}>
                <Outlet />
              </div>
            </div>
            {children}
          </main>
        </SidenavContainer>
      </SidenavProvider>
    </>
  );
};

export default Sidebar;

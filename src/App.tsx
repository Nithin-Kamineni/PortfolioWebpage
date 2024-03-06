import React, { createContext, useContext } from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import MainNavbar from "./components/mainNavBar/MainNavbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import LC_Dashboard from "./pages/LeetcodeDashboard";
import Dashboard from "./pages/Dashboard";
import Dashboard2 from "./pages/Dashboard2";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import { ChakraProvider } from "@chakra-ui/react";
import AuthProvider from "./context/AuthContext";
import { AuthContext } from "./context/AuthContext";
import TasksDashboard from "./pages/Tasks";
import LeetcodeDashboard from "./pages/Leetcode";
import ConnectionsDashboard from "./pages/Networking-Connections";
import GoogleCalendarDashboard from "./pages/Google-Calendar";
import FlashCardsDashboard from "./pages/FlashCards";
import { Provider } from "react-redux";
import store from "./redux/store";
import FlashCards from "./pages/FlashCards/flashcards";
import TermsEditDashboard from "./pages/TermsEdit";

const ProtectedRoutes: React.FC = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

const App: React.FC = () => {
  return (
    <>
      {/* <AuthProvider> */}
      <MainNavbar />
      <ChakraProvider>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />

            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path='/resume' element={<Resume />} /> */}
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/leetcode" element={<LC_Dashboard />} /> */}

            <Route element={<ProtectedRoutes />}>
              <Route path="/leetcode" element={<LC_Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/forecast" element={<Dashboard2 />} />
              <Route path="/flashcards" element={<FlashCardsDashboard />} />
              <Route path="/flashcards/edit" element={<TermsEditDashboard />} />
              <Route path="/courses-progress" element={<Dashboard2 />} />
              <Route path="/research-roadmap" element={<Dashboard2 />} />
              <Route path="/leetcode/edit" element={<LeetcodeDashboard />} />
              <Route path="/connections" element={<ConnectionsDashboard />} />
              <Route path="/calendar" element={<GoogleCalendarDashboard />} />
              <Route path="/reading-list" element={<Dashboard2 />} />
              <Route path="/tasks" element={<TasksDashboard />} />
              <Route
                path="/flashcards/:flashcardsStackId"
                element={<FlashCards />}
              />
            </Route>
          </Routes>
        </Provider>
      </ChakraProvider>
      {/* </AuthProvider> */}
    </>
  );
};

export default App;

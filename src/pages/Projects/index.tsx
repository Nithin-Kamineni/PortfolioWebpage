// const Flip = require("react-reveal/Flip");
const Flip = require('../../modules/react-reveal/Flip');
import { motion } from "framer-motion";
import { useState } from 'react';
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import { ProjectsData } from "../../data/ProjectsData";

import { pageVariants, pageTransition } from "../../utils/FramerAnimation";
import styles from "./projects.module.scss";
import { Text } from "@chakra-ui/layout";
import { FaAngular, FaJava, FaNodeJs, FaPython, FaReact } from 'react-icons/fa'
import { TbBrandGolang } from 'react-icons/tb';
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaGithub, FaRocket } from "react-icons/fa";
import GithubChart from "../../components/GithubContributionsChart/githubContributionChart";
import {
  ChakraProvider,
  Center,
  HStack,
  Stack,
  Button,
  Divider,
  Badge,
  Tag,
  useBreakpointValue,
  TagLabel,
  TagLeftIcon,
} from '@chakra-ui/react';
import GitHubCalendar from 'react-github-calendar';
const projectsOpen = "<projects>";
const projectsClose = "</projects>";
// let filteredData: ProjectsType[];



const Projects = () => {

  const [selectedButton, setSelectedButton] = useState('All');
  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
  };

  let [filteredData, setfilteredData] = useState(ProjectsData);

  const All = () => {
    handleButtonClick('All');
    setfilteredData(ProjectsData);
  }
  const Angular = () => {
    handleButtonClick('Angular');
    setfilteredData(ProjectsData.filter((item) => item.tags.some(tag => tag.toLowerCase() === 'angular')));
  }
  
  const React = () => {
    handleButtonClick('React');
    setfilteredData(ProjectsData.filter((item) => item.tags.some(tag => tag.toLowerCase() === 'react')));
  }
  
  const Django = () => {
    handleButtonClick('Django');
    setfilteredData(ProjectsData.filter((item) => item.tags.some(tag => tag.toLowerCase() === 'django')));
  }
  
  const Nodejs = () => {
    handleButtonClick('Nodejs');
    setfilteredData(ProjectsData.filter((item) => item.tags.some(tag => tag.toLowerCase() === 'nodejs')));
  }
  
  const GoLang = () => {
    handleButtonClick('GoLang');
    setfilteredData(ProjectsData.filter((item) => item.tags.some(tag => tag.toLowerCase() === 'go')));
  }
  
  const Dotnet = () => {
    handleButtonClick('dotnet');
    setfilteredData(ProjectsData.filter((item) => item.tags.some(tag => tag.toLowerCase() === 'c#')));
  }

  const Spring = () => {
    handleButtonClick('Spring');
    setfilteredData(ProjectsData.filter((item) => item.tags.some(tag => tag.toLowerCase() === 'spring-boot')));
  }

  const Docker = () => {
    handleButtonClick('Docker');
    setfilteredData(ProjectsData.filter((item) => item.tags.some(tag => tag.toLowerCase() === 'docker')));
  }
  
  const Backend = () => {
    handleButtonClick('Backend');
    setfilteredData(ProjectsData.filter((item) => item.tags.some(tag => tag.toLowerCase() === 'backend')));
  }
  
  const Frontend = () => {
    handleButtonClick('Frontend');
    setfilteredData(ProjectsData.filter((item) => item.tags.some(tag => tag.toLowerCase() === 'frontend')));
  }

  return (
    <div className={styles.projects}>
      <motion.div
        initial='init'
        animate='anim'
        exit='last'
        variants={pageVariants}
        transition={pageTransition}
      >
        <div className={styles.wrapper}>
          <h3 className={styles.projectsOpen}>{projectsOpen}</h3>
          <ChakraProvider>
            <Center>
              <HStack direction={{ base: "column", md: "row" }}>
                <div className={styles.filterTags}>
                  <Button colorScheme={selectedButton === 'Frontend' ? 'blue' : 'gray'} size='xs' onClick={Frontend}>
                    Frontend
                  </Button>
                  <Button colorScheme={selectedButton === 'Backend' ? 'blue' : 'gray'} size='xs' onClick={Backend}>
                    Backend
                  </Button>
                  <Button colorScheme={selectedButton === 'Spring' ? 'blue' : 'gray'} leftIcon={<FaJava />} size='xs' onClick={Spring}>
                    Spring-Boot
                  </Button>
                  <Button colorScheme={selectedButton === 'dotnet' ? 'blue' : 'gray'} leftIcon={<FaJava />} size='xs' onClick={Dotnet}>
                    ASP .Net
                  </Button>
                  <Button colorScheme={selectedButton === 'Docker' ? 'blue' : 'gray'} leftIcon={<FaJava />} size='xs' onClick={Docker}>
                    Docker
                  </Button>
                  <Button colorScheme={selectedButton === 'GoLang' ? 'blue' : 'gray'} leftIcon={<TbBrandGolang />} size='xs' onClick={GoLang}>
                    GO
                  </Button>
                  <Button colorScheme={selectedButton === 'Nodejs' ? 'blue' : 'gray'} leftIcon={<FaNodeJs />} size='xs' onClick={Nodejs}>
                    Node.js
                  </Button>
                  <Button colorScheme={selectedButton === 'Django' ? 'blue' : 'gray'} leftIcon={<FaPython />} size='xs' onClick={Django}>
                    Django
                  </Button>
                  <Button colorScheme={selectedButton === 'React' ? 'blue' : 'gray'} leftIcon={<FaReact />} size='xs' onClick={React}>
                    React
                  </Button>
                  <Button colorScheme={selectedButton === 'Angular' ? 'blue' : 'gray'} leftIcon={<FaAngular />} size='xs' onClick={Angular}>
                    Angular
                  </Button>
                  <Button colorScheme={selectedButton === 'All' ? 'blue' : 'gray'} size='xs' onClick={All}>
                    All
                  </Button>
                </div>
              </HStack>
            </Center>
            <Center height={10}></Center>
          </ChakraProvider>
          
            <div className={styles.projectscontent}>

              {filteredData.length==0 && <>No projects with this technology</>}

              {filteredData.map((item, index) => (
                <div className={styles.projects_item} key={index}>
                  {index % 2 === 0 ? (
                    <Flip top key={item.title}>
                      <ProjectCard
                        key={item.title}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        GitHub={item.GitHub}
                        hosted={item.hosted}
                        tags={item.tags}
                        points={item.points}
                        publition={item.publition}
                      />
                    </Flip>
                  ) : (
                    <Flip bottom key={item.title}>
                      <ProjectCard
                        key={item.title}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        GitHub={item.GitHub}
                        hosted={item.hosted}
                        tags={item.tags}
                        points={item.points}
                        publition={item.publition}
                      />
                    </Flip>
                  )}
                </div>
              ))}
            </div>
            {/* , paddingBottom:'10px' */}
            <div className={styles.githubContainerOverlay}>
              
              <div className={styles.githubContainer}>
                <GithubChart />
              </div>
          </div>
          <h3 className={styles.projectsClose}>{projectsClose}</h3>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
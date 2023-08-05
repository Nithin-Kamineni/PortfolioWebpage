import GitHubCalendar from 'react-github-calendar';
import styles from "./githubchart.module.scss";


import "react-vertical-timeline-component/style.min.css";
import {MdOutlineWork} from "react-icons/md";


import {
    Tag,
    TagLabel,
    TagLeftIcon,
  } from '@chakra-ui/react';
  import { FaGithub, FaRocket } from "react-icons/fa";

const eduOpen = "<github>";
const eduClose = "</github>";

const GithubChart = () => {
  return (
    <div className={styles.education}>
        <div className={styles.wrapper}>
            <div className={styles.githubContainerHeaderOpen}>
                <Tag size="lg" variant="solid" colorScheme="blackAlpha" color="black" borderRadius="full">
                  <TagLeftIcon boxSize="22px" as={FaGithub} />
                  <TagLabel>{eduOpen}</TagLabel>
                </Tag>
            </div> 
            <GitHubCalendar username="Nithin-Kamineni" />
            <div className={styles.githubContainerHeaderClose}>
                <Tag size="lg" variant="solid" colorScheme="blackAlpha" color="black" borderRadius="full">
                  <TagLeftIcon boxSize="22px" as={FaGithub} />
                  <TagLabel>{eduClose}</TagLabel>
                </Tag>
            </div> 
        </div>
    </div>
  );
};

export default GithubChart;


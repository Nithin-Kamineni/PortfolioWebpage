const Zoom = require("react-reveal/Zoom");
import { ChakraProvider, Divider } from '@chakra-ui/react'
import { AboutData } from "../../data/AboutData";
import { LinksData } from "../../data/LinksData";
import styles from "./home.module.scss";
import stylesExp from "../Experience/experience.module.scss";
import styleSkills from "../Skills/skills.module.scss";
import profilePic from "../../assets/profile.png";
import Experience from "../Experience";
import Skills from "../Skills";
import { Row, Col, Container } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdOutlineWork } from "react-icons/md";
import Projects from '../Projects';
import Blogs from '../Blogs';
import Contact from '../Contact';
import About from '../About';


const welcomeText = `I Am, ${AboutData.firstName}  ${AboutData.lastName}`;

const Home = () => {
  return (
    <ChakraProvider>
      <Container>
      <section id="home">
        <Row>
          <div className={styles.home}>
            <Zoom cascade>
              <img src={profilePic} alt='Profile' className={styles.image} />
              <h2 className={styles.title}>{welcomeText}</h2>
            </Zoom>
            <Zoom>
              <span className={styles.rolesGroup}>
                <div className={styles.roles}>{'<'}</div>
                <div className={styles.roles}>
                <Typewriter 
                  options={{
                    strings: AboutData.roles,
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                /></div>
                <div className={styles.roles}>{'/>'}</div>
              </span>
              <h3 className={styles.about}>{AboutData.about1}</h3>
              <h3 className={styles.about_next}>{AboutData.about2}</h3>
              <div className={styles.links}>
                {LinksData.map((item) => (
                  <a
                    href={item.link}
                    target='_blank'
                    rel='noreferrer'
                    key={item.title}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </Zoom>
          </div>
        </Row>
        </section>
        
        <hr className="rounded"></hr>
        <section id="experience">
        <Row>
          <div>
            <Experience />
          </div>
        </Row>
        </section>
        <section id="projects">
        <hr className="rounded"></hr>
        <Row>
          <div>
            <Projects />
          </div>
        </Row>
        </section>
        <section id="skills">
        <hr className="rounded"></hr>
        <Row>
          <div>
            <Skills />
          </div>
        </Row>
        </section>
        <section id="about">
        <hr className="rounded"></hr>
        <Row>
          <div>
            <About />
          </div>
        </Row>
        </section>
        <section id="blogs">
        <hr className="rounded"></hr>
        <Row>
          <div>
            <Blogs />
          </div>
        </Row>
        </section>
        <section id="contact">
        <hr className="rounded"></hr>
        <Row>
          <div>
            <Contact />
          </div>
        </Row>
        </section>
      </Container>
    </ChakraProvider>
  );
};

export default Home;

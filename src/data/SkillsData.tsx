import { FaReact, FaNodeJs, FaHtml5, FaSass, FaJava, FaAngular, FaDocker, FaServer, FaFlask } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiRedux,
  SiCss3,
  SiNextdotjs,
  SiTypescript,
  SiPostman,
  SiBootstrap,
  SiPwa,
  SiElectron,
  SiPython,
  SiDart,
  SiExpress,
  SiSpringboot,
  SiDjango,
  SiKubernetes,
  SiNginx,
  SiFlutter,
  SiMysql,
  SiMicrosoftsqlserver,
  SiFlask,
  SiMongodb,
  SiMui,
} from "react-icons/si";
// import {SiMaterialui} from "react-icons/si";
import { AiFillAndroid } from "react-icons/ai";
import { ImGit } from "react-icons/im";
import { TbBrandGolang } from "react-icons/tb";

interface SkillsType {
  name: string;
  icon: any;
  link: string;
}

export const SkillsData: SkillsType[] = [
  {
    name: "Java",
    icon: <FaJava color='#000000dc' />,
    link: "https://www.java.com/",
  },
  {
    name: "Python",
    icon: <SiPython color='#000000dc' />,
    link: "https://www.python.org/",
  },
  {
    name: "GO",
    icon: <TbBrandGolang color='#000000dc' />,
    link: "https://golang.org/",
  },
  {
    name: "Dart",
    icon: <SiDart color='#000000dc' />,
    link: "https://dart.dev/",
  },
  {
    name: "Express",
    icon: <SiExpress color='#000000dc' />,
    link: "https://expressjs.com/",
  },
  {
    name: "Spring-Boot",
    icon: <SiSpringboot color='#000000dc' />,
    link: "https://spring.io/projects/spring-boot",
  },
  {
    name: "Django",
    icon: <SiDjango color='#000000dc' />,
    link: "https://www.djangoproject.com/",
  },
  {
    name: "Angular",
    icon: <FaAngular color='#000000dc' />,
    link: "https://angular.io/",
  },
  {
    name: "Kubernetes",
    icon: <SiKubernetes color='#000000dc' />,
    link: "https://kubernetes.io/",
  },
  {
    name: "Docker",
    icon: <FaDocker color='#000000dc' />,
    link: "https://www.docker.com/",
  },
  {
    name: "Nginx",
    icon: <SiNginx color='#000000dc' />,
    link: "https://www.nginx.com/",
  },
  {
    name: "Flutter",
    icon: <SiFlutter color='#000000dc' />,
    link: "https://flutter.dev/",
  },
  {
    name: "MySQL",
    icon: <SiMysql color='#000000dc' />,
    link: "https://www.mysql.com/",
  },
  {
    name: "MS SQL Server",
    icon: <SiMicrosoftsqlserver color='#000000dc' />,
    link: "https://www.microsoft.com/en-us/sql-server/",
  },
  {
    name: "REST API",
    icon: <FaServer color='#000000dc' />,
    link: "https://en.wikipedia.org/wiki/Representational_state_transfer",
  },
  {
    name: "Flask",
    icon: <SiFlask color='#000000dc' />,
    link: "https://palletsprojects.com/p/flask/",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb color='#000000dc' />,
    link: "https://www.mongodb.com/",
  },
  {
    name: "JavaScript",
    icon: <IoLogoJavascript color='#000000dc' />,
    link: "https://www.javascript.com/",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript color='#000000dc' />,
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "React",
    icon: <FaReact color='#000000dc' />,
    link: "https://reactjs.org/",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs color='#000000dc' />,
    link: "https://nextjs.org/",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs color='#000000dc' />,
    link: "https://nodejs.org/",
  },
  {
    name: "Android",
    icon: <AiFillAndroid color='#000000dc' />,
    link: "https://developer.android.com/",
  },
  {
    name: "HTML",
    icon: <FaHtml5 color='#000000dc' />,
    link: "https://www.w3schools.com/html/",
  },
  {
    name: "CSS",
    icon: <SiCss3 color='#000000dc' />,
    link: "https://www.w3schools.com/css/",
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap color='#000000dc' />,
    link: "https://getbootstrap.com/",
  },
  {
    name: "Material-Ui",
    // icon: <SiMaterialui color='#000000dc' />,
    icon: <SiMui color='#000000dc' />,
    link: "https://mui.com/",
  },
  {
    name: "Git",
    icon: <ImGit color='#000000dc' />,
    link: "https://git-scm.com/",
  },
  {
    name: "Postman",
    icon: <SiPostman color='#000000dc' />,
    link: "https://www.postman.com/",
  },
];

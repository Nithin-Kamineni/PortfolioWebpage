import { ImGithub, ImLinkedin } from "react-icons/im";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";

interface LinksType {
  title: string;
  icon: any;
  link: string;
}

export const LinksData: LinksType[] = [
  {
    title: "GitHub",
    icon: <ImGithub color='#000000dc' />,
    link: "https://github.com/Nithin-Kamineni",
  },
  {
    title: "LinkedIn",
    icon: <ImLinkedin color='#000000dc' />,
    link: "https://www.linkedin.com/in/nithin-kamineni/",
  },
  {
    title: "Twitter",
    icon: <FaTwitter color='#000000dc' />,
    link: "https://twitter.com/NithinKamineni",
  },
  {
    title: "Instagram",
    icon: <FaYoutube color='#000000dc' />,
    link: "https://www.youtube.com/channel/UC8mj0Qsn7hyZhIkqfvnhAzw",
  },
];
